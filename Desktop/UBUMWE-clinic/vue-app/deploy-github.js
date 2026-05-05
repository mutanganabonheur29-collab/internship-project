// GitHub Pages deployment script
const fs = require('fs');
const path = require('path');

// Create .nojekyll file to prevent GitHub from processing with Jekyll
fs.writeFileSync(path.join(__dirname, 'dist', '.nojekyll'), '');

console.log('✅ Ready for GitHub Pages deployment!');
console.log('');
console.log('📋 Steps to deploy:');
console.log('1. Create a GitHub repository');
console.log('2. Push your code to GitHub');
console.log('3. Go to repository Settings > Pages');
console.log('4. Select "Deploy from a branch"');
console.log('5. Choose "main" branch and "/(root)" folder');
console.log('6. Save and wait for deployment');
console.log('');
console.log('🌐 Your site will be available at:');
console.log('https://[your-username].github.io/ubumwe-clinic/');
