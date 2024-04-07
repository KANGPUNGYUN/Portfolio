const express = require("express");
const next = require("next");
const axios = require("axios");
const { DOMParser } = require("xmldom");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://portfolio-phi-pied-52.vercel.app",
      ],
    })
  );

  server.get("/api/rss", async (req, res) => {
    try {
      const response = await axios.get("https://v2.velog.io/rss/@kangpungyun");
      const xmlData = response.data;
      const xmlDocs = new DOMParser().parseFromString(xmlData, "text/xml");
      const items = xmlDocs.getElementsByTagName("item");

      const postsData = [];
      for (let key in items) {
        if (items.hasOwnProperty(key)) {
          let item = items[key];
          if (typeof item === "object" && item !== null) {
            postsData.push({
              title: item.getElementsByTagName("title")[0].textContent,
              url: item.getElementsByTagName("link")[0].textContent,
              createdAt: item.getElementsByTagName("pubDate")[0].textContent,
            });
          }
        }
      }
      postsData.pop();
      res.status(200).json(postsData);
    } catch (error) {
      console.error("Error fetching RSS:", error);
      res.status(500).json({ error: "Error fetching RSS" });
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
