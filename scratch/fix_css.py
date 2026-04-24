import sys

file_path = r'c:\Users\Paulo Prado\Downloads\Compressed\ecossistema\src\pages\MitosisVisualization.css'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Target line 307 (1-indexed is 306 in 0-indexed)
# Wait, let's look for the point where it broke.
# Line 306 is "justify-content: center;"
# Line 307 is "background: #081a10;"

insertion_point = -1
for i, line in enumerate(lines):
    if 'justify-content: center;' in line and i > 300:
        insertion_point = i + 1
        break

if insertion_point != -1:
    new_content = [
        '  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);\n',
        '  overflow: hidden;\n',
        '  z-index: 1;\n',
        '}\n',
        '\n',
        '.mv-appcircle-img {\n',
        '  width: 48px;\n',
        '  height: 48px;\n',
        '  object-fit: contain;\n',
        '}\n',
        '\n',
        '/* ─── Cell cores ──────────────────────────────────────────────────────────── */\n',
        '.mv-core {\n',
        '  position: absolute;\n',
        '  border-radius: 50%;\n',
        '  display: flex;\n',
        '  flex-direction: column;\n',
        '  align-items: center;\n',
        '  justify-content: center;\n',
        '  gap: 5px;\n',
        '  z-index: 5;\n',
        '}\n',
        '\n'
    ]
    lines[insertion_point:insertion_point] = new_content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Success")
else:
    print("Insertion point not found")
