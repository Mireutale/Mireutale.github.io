// src/content/profile/*.md 를 '---' 줄 기준 항목으로 나눠 읽는다.
// 항목 = 맨 위 "키: 값" 줄들 + (빈 줄 뒤) 요약 문단, "- " 목록, "### 제목" 하위 묶음
export interface Group {
  summary: string;
  bullets: string[];
}
export interface Block extends Group {
  fields: Record<string, string>;
  sections: Group[];
}

export function parseBlocks(raw: string): Block[] {
  return raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .split(/^---[ \t]*$/m)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const lines = chunk.split('\n');
      const fields: Record<string, string> = {};
      let i = 0;
      for (; i < lines.length; i++) {
        const m = lines[i].match(/^([^\s:-][^:]*):\s*(.*)$/);
        if (!m) break;
        fields[m[1].trim()] = m[2].trim();
      }
      const main: Group = { summary: '', bullets: [] };
      const sections: Group[] = [];
      let current = main;
      for (const line of lines.slice(i)) {
        const text = line.trim();
        if (!text) continue;
        if (text.startsWith('### ')) {
          current = { summary: text.slice(4), bullets: [] };
          sections.push(current);
        } else if (text.startsWith('- ')) {
          current.bullets.push(text.slice(2));
        } else {
          current.summary = current.summary ? `${current.summary} ${text}` : text;
        }
      }
      return { fields, ...main, sections };
    });
}

// 필수 키가 빠지면 빌드를 멈추고 어느 파일·항목인지 알려 준다
export function field(block: Block, key: string, file: string): string {
  const value = block.fields[key];
  if (!value) throw new Error(`${file}: "${key}:" 값이 없는 항목이 있습니다 → ${JSON.stringify(block.fields)}`);
  return value;
}
