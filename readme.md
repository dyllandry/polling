# Polling

This repository is a barebones demonstration of polling and long polling.

- **polling**: Repeated interval based resource requests to a server for new information.
- **long polling**: A single resource request which is held open by the server until the new information is available.

Checkout [server.js](/server.js) and [index.html](/index.html) for barebones polling and long polling implementations.

Stack Overflow [Polling vs Long Polling](https://stackoverflow.com/a/18099987/7933478)

![Diagram of timing differences between polling, long polling, and server sent events](https://miro.medium.com/max/1400/1*zG7Jyeq02JRAN6Wz6gs15g.png)

Image from [Polling vs SSE vs Websockets](https://codeburst.io/polling-vs-sse-vs-websocket-how-to-choose-the-right-one-1859e4e13bd9).
