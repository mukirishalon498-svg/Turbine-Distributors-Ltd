from pathlib import Path
import re
text = Path('index.html').read_text(encoding='utf-8')
start = text.index('<style>') + len('<style>')
end = text.index('</style>')
css = text[start:end]
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
brace = 0
for i, line in enumerate(css.splitlines(), 1):
    line2 = re.sub(r'".*?"', '""', line)
    line2 = re.sub(r"'.*?'", "''", line2)
    opens = line2.count('{')
    closes = line2.count('}')
    brace += opens - closes
    if opens or closes:
        print(i, brace, line.strip())
        if brace < 0:
            break
print('FINAL', brace)
