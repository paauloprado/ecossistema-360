const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\Paulo Prado\\Downloads\\Compressed\\ecossistema\\src\\pages\\MitosisVisualization.css';
let content = fs.readFileSync(filePath, 'utf8');

const targetPart = `  display: flex;
  align-items: center;

.mv-core--care {
  background: transparent;
  border: none;
  box-shadow: none;
}`;

const replacementPart = `  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  z-index: 1;
}

.mv-appcircle-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

/* ─── Cell cores ──────────────────────────────────────────────────────────── */
.mv-core {
  position: absolute;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 5;
}

.mv-core--grupo {
  background: #081a10;
  border: 3px solid #a1ce28;
  box-shadow: 0 0 0 6px rgba(161, 206, 40, 0.15), 0 0 36px rgba(161, 206, 40, 0.4);
}

.mv-core--care {
  background: transparent;
  border: none;
  box-shadow: none;
}`;

if (content.includes(targetPart)) {
    content = content.replace(targetPart, replacementPart);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Success');
} else {
    console.log('Target part not found');
}
