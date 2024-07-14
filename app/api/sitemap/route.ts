/* eslint-disable no-secrets/no-secrets */
// Function to generate the XML sitemap
const generateXmlSitemap = () => {
  // Your XML sitemap generation logic goes here
  // Return the generated XML sitemap as a string
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/page1</loc>
        <lastmod>2022-01-01</lastmod>
    </url>
    <url>
        <loc>https://example.com/page2</loc>
        <lastmod>2022-01-02</lastmod>
    </url>
</urlset>`;

  return xml;
};

export const GET = () => {
  // Generate your XML sitemap here
  const xmlSitemap = generateXmlSitemap();

  const response = new Response(xmlSitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
    status: 200,
    statusText: "OK",
  });

  return response;
};
