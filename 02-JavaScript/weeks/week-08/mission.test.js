import { jest } from "@jest/globals";
import { streamAIResponse } from "./mission.js";

// fetch Mocking
global.fetch = jest.fn();

describe("8주차 미션: AI 스트리밍 데이터 수신기 검증", () => {
  test("streamAIResponse가 ReadableStream을 읽고 각 chunk마다 콜백을 실행해야 합니다.", async () => {
    const mockChunks = ["Hello", " ", "World", "!"];
    
    // ReadableStream 리더 모킹
    let chunkIndex = 0;
    const mockReader = {
      read: jest.fn(() => {
        if (chunkIndex < mockChunks.length) {
          const textEncoder = new TextEncoder();
          const value = textEncoder.encode(mockChunks[chunkIndex]);
          chunkIndex++;
          return Promise.resolve({ done: false, value });
        }
        return Promise.resolve({ done: true, value: undefined });
      }),
    };

    fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        body: {
          getReader: () => mockReader,
        },
      })
    );

    const onChunk = jest.fn();
    await streamAIResponse("https://api.example.com/ai", "Say hello", onChunk);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(onChunk).toHaveBeenCalledTimes(mockChunks.length);
    expect(onChunk).toHaveBeenNthCalledWith(1, "Hello");
    expect(onChunk).toHaveBeenNthCalledWith(3, "World");
  });
});
