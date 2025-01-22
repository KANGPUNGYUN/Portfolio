import { DOMParser } from '@xmldom/xmldom';

export async function GET() {
  try {
    const response = await fetch('https://v2.velog.io/rss/kangpungyun');
    const rssData = await response.text();
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssData, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");
    
    const posts = Array.from(items).map(item => ({
      title: item.getElementsByTagName("title")[0].childNodes[0].nodeValue
        .replace("<![CDATA[", "").replace("]]>", ""),
      url: item.getElementsByTagName("link")[0].childNodes[0].nodeValue,
      createdAt: item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue
    }));

    return new Response(JSON.stringify(posts), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch RSS feed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}