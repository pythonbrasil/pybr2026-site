const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const nested = require('postcss-nested');
const glob = require('glob');

const pattern = 'src/**/*.css';

glob(pattern, (err, files) => {
  if (err) throw err;
  files.forEach(async (file) => {
    try {
      const css = fs.readFileSync(file, 'utf8');
      const result = await postcss([nested]).process(css, { from: file, map: false });
      fs.writeFileSync(file, result.css, 'utf8');
      console.log('Processed', file);
    } catch (e) {
      console.error('Failed', file, e);
    }
  });
});
