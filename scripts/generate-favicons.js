#!/usr/bin/env node

/**
 * Favicon Generation Script for Studio Legale
 *
 * This script provides instructions and automation for generating
 * all required favicon formats from the source SVG file.
 */

const fs = require('fs');
const path = require('path');

console.log('🏛️  Studio Legale  - Favicon Generator');
console.log('================================================\n');

const publicDir = path.join(__dirname, '..', 'public');
const sourceFile = path.join(publicDir, 'favicon.svg');

// Check if source SVG exists
if (!fs.existsSync(sourceFile)) {
  console.error('❌ Error: favicon.svg not found in public directory');
  process.exit(1);
}

console.log('✅ Source SVG found: favicon.svg');
console.log('\n📋 Required favicon files to generate:');

const requiredFiles = [
  { file: 'favicon.ico', size: '16x16, 32x32, 48x48', description: 'Multi-size ICO for browsers' },
  { file: 'favicon-16x16.png', size: '16x16', description: 'Small browser favicon' },
  { file: 'favicon-32x32.png', size: '32x32', description: 'Standard browser favicon' },
  { file: 'apple-touch-icon.png', size: '180x180', description: 'iOS home screen icon' },
  { file: 'android-chrome-192x192.png', size: '192x192', description: 'Android Chrome icon' },
  { file: 'android-chrome-512x512.png', size: '512x512', description: 'Android Chrome large icon' },
  { file: 'mstile-150x150.png', size: '150x150', description: 'Windows tile icon' },
  { file: 'safari-pinned-tab.svg', size: 'vector', description: 'Safari pinned tab (monochrome)' },
  { file: 'og-image.jpg', size: '1200x630', description: 'Social media sharing image' }
];

requiredFiles.forEach((item, index) => {
  const exists = fs.existsSync(path.join(publicDir, item.file));
  const status = exists ? '✅' : '❌';
  console.log(`${index + 1}. ${status} ${item.file} (${item.size}) - ${item.description}`);
});

console.log('\n🛠️  Generation Methods:');
console.log('\n1. Online Tools (Recommended):');
console.log('   • https://realfavicongenerator.net/');
console.log('   • https://favicon.io/favicon-converter/');
console.log('   • https://www.favicon-generator.org/');

console.log('\n2. Command Line Tools:');
console.log('   npm install -g favicons-cli');
console.log('   favicons public/favicon.svg public/');

console.log('\n3. Manual Design Tools:');
console.log('   • Adobe Illustrator');
console.log('   • Figma');
console.log('   • Inkscape (free)');

console.log('\n🎨 Design Guidelines:');
console.log('   • Primary Color: #c8a96a (gold)');
console.log('   • Background: #0f1720 (dark blue)');
console.log('   • Symbol: Justice scales');
console.log('   • Style: Professional, minimal, recognizable at small sizes');

console.log('\n📱 Testing Checklist:');
console.log('   □ Chrome desktop & mobile');
console.log('   □ Firefox desktop & mobile');
console.log('   □ Safari desktop & mobile');
console.log('   □ Edge desktop');
console.log('   □ iOS home screen');
console.log('   □ Android home screen');
console.log('   □ Windows taskbar/tiles');

console.log('\n🔍 Validation Tools:');
console.log('   • https://realfavicongenerator.net/favicon_checker');
console.log('   • Browser developer tools');
console.log('   • Lighthouse audit');

const missingFiles = requiredFiles.filter(item =>
  !fs.existsSync(path.join(publicDir, item.file))
);

if (missingFiles.length === 0) {
  console.log('\n🎉 All favicon files are present!');
  console.log('   Run the validation checklist to ensure proper implementation.');
} else {
  console.log(`\n⚠️  ${missingFiles.length} files still need to be generated.`);
  console.log('   Use one of the methods above to create the missing files.');
}

console.log('\n📄 Files already configured:');
console.log('   ✅ site.webmanifest (PWA manifest)');
console.log('   ✅ browserconfig.xml (Windows tiles)');
console.log('   ✅ HTML meta tags in index.html');
console.log('   ✅ robots.txt and sitemap.xml');

console.log('\n🚀 Next Steps:');
console.log('   1. Generate missing favicon files');
console.log('   2. Test on multiple devices/browsers');
console.log('   3. Validate with online tools');
console.log('   4. Deploy and verify in production');

console.log('\n📞 Support: tech@studiolegale.it');
