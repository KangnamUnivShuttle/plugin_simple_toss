const request = require("supertest");
const http = require('http');
const app = require('../src/app');
// https://stackoverflow.com/questions/38062689/how-do-i-get-the-http-server-from-the-express-app

let agent;
let server;

beforeAll((done) => {
  server = http.createServer(app);
  agent = request.agent(server);
  done();
});

afterAll((done) => {
  server && server.close();
  done();
});

describe("Test the root path", () => {
  test("Get available route list", async () => {
    const response = await agent.post('/chat')
      .type('application/json')
      .send({})
    expect(response.statusCode).toBe(200);
    const data = response.body
    expect(data).toEqual({
      "version": "2.0",
      "template": {
        "outputs": [
          {
            "simpleText": {
              "text": "원하는 메뉴를 선택하세요"
            }
          }
        ],
        "quickReplies": [
          {
            "messageText": "홈 으로",
            "action": "message",
            "label": "홈"
          },
          {
            "messageText": "뒤로 가기",
            "action": "message",
            "label": "↩"
          }
        ]
      }
    })
  });
});