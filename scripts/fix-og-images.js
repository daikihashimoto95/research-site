const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const files = ['opengraph-image'];

files.forEach(file => {
  const src = path.join(outDir, file);
  const dest = path.join(outDir, `${file}.png`);
  
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Renamed ${file} to ${file}.png`);
  }
});
