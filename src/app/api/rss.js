import axios from "axios";
import { DOMParser } from "xmldom";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://v2.velog.io/rss/@kangpungyun");
    const xmlData = response.data;
    // const xmlDocs = new DOMParser().parseFromString(xmlData, "text/xml");
    // const items = xmlDocs.getElementsByTagName("item");

    console.log(xmlData);
    // const postsData = [];
    // for (let key in items) {
    //   if (items.hasOwnProperty(key)) {
    //     let item = items[key];
    //     if (typeof item === "object" && item !== null) {
    //       postsData.push({
    //         title: item.getElementsByTagName("title")[0].textContent,
    //         url: item.getElementsByTagName("link")[0].textContent,
    //         createdAt: item.getElementsByTagName("pubDate")[0].textContent,
    //       });
    //     }
    //   }
    // }
    // postsData.pop();
    // res.status(200).json(postsData);
  } catch (error) {
    console.error("Error fetching RSS:", error);
    res.status(500).json({ error: "Error fetching RSS" });
  }
}
