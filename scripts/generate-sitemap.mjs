// 构建后生成 dist/client/sitemap.xml，lastmod 使用构建当天日期。
import { writeFileSync } from 'node:fs';

const siteUrl = 'https://robotmonkeybutler.github.io/';
const lastmod = new Date().toISOString().slice(0, 10);

writeFileSync(
  'dist/client/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`,
);
