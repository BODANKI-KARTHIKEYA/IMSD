// save as write-src-async.js
const fs = require('fs');

const content = 'HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js';

// Write file asynchronously
fs.writeFile('src.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    process.exit(1);
  }
  console.log('✅ src.txt created successfully.');

  // Now read and display the content
  fs.readFile('src.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('\n📄 File content:');
    console.log(data);
  });
});
