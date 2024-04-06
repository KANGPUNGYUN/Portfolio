const nextConfig = {
  async headers() {
    return [
      {
        source: "/", // 모든 API 엔드포인트에 대해 CORS 설정
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // 모든 도메인에서 접근 허용
          { key: "Access-Control-Allow-Methods", value: "GET" }, // GET 메서드 허용
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          }, // 헤더 허용
        ],
      },
    ];
  },
};

module.exports = nextConfig;
