export default async function handler(req, res) {
  try {
    // 외부 리소스에 대한 URL
    const targetUrl = "https://v2.velog.io/rss/@kangpungyun";
    const response = await fetch(targetUrl);

    // 응답을 텍스트로 변환하여 클라이언트에게 전달
    const responseData = await response.text();
    res.status(200).send(responseData);
  } catch (error) {
    console.error("Error fetching external data:", error);
    res.status(500).send("Error fetching external data");
  }
}
