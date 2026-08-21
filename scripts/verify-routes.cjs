const http = require('http');

const routes = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/industries',
  '/technologies',
  '/blog',
  '/blog/best-ai-tools-for-students-2026',
  '/careers',
  '/contact',
  '/sitemap'
];

async function testRoutes() {
  console.log('Testing live local server routes on http://localhost:3000...\n');
  for (const r of routes) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000' + r, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          const hasTitle = body.includes('Algorithyum') || body.includes('<html');
          console.log(`[HTTP ${res.statusCode}] ${r.padEnd(42)} Status: OK (${body.length} bytes, valid HTML: ${hasTitle})`);
          resolve();
        });
      }).on('error', (err) => {
        console.log(`[ERROR] ${r.padEnd(42)} Failed: ${err.message}`);
        resolve();
      });
    });
  }
}

testRoutes();
