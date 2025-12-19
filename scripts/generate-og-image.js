const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

// SVGでテキストを含む画像を生成
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&amp;family=Inter:wght@600&amp;display=swap');
    </style>
  </defs>
  
  <!-- 背景 -->
  <rect width="${width}" height="${height}" fill="#233041"/>
  
  <!-- メインテキスト -->
  <text 
    x="600" 
    y="280" 
    font-family="'Noto Sans JP', 'Inter', sans-serif" 
    font-size="72" 
    font-weight="700" 
    fill="#ffffff" 
    text-anchor="middle"
    dominant-baseline="middle">
    橋本大輝 / Daiki Hashimoto
  </text>
  
  <!-- サブテキスト -->
  <text 
    x="600" 
    y="370" 
    font-family="'Inter', sans-serif" 
    font-size="36" 
    font-weight="600" 
    fill="#64748b" 
    text-anchor="middle"
    dominant-baseline="middle">
    Research homepage
  </text>
  
  <!-- 下線装飾 (オプション) -->
  <line x1="400" y1="420" x2="800" y2="420" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
</svg>
`;

// 出力先パス
const outputPath = path.join(__dirname, '../public/opengraph-image.png');

// SVGからPNG画像を生成
sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('✅ OG画像が生成されました:', outputPath);
  })
  .catch(err => {
    console.error('❌ エラー:', err);
  });
