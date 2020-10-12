const Queue = require('bull');
const { setQueues, router } = require('bull-board');
const express = require('express');
const Redis = require('ioredis');

async function main() {
  const {
    BULL_PREFIX = 'bull',
    DASHBOARD_ROOT_PATH = '/',
    PORT = 3000, // Defined in Dockerfile
    REDIS_URL,
  } = process.env;

  const redis = new Redis(REDIS_URL);

  const keys = await redis.keys(`${BULL_PREFIX}:*`);
  const queueNamesSet = new Set(keys.map(key => key.replace(/^.+?:(.+?):.+?$/, '$1')));
  const queues = Array.from(queueNamesSet).map((item) => new Queue(item, REDIS_URL));

  setQueues(queues);

  const app = express();

  app.use(DASHBOARD_ROOT_PATH, router);
  app.listen(PORT, () => {
    console.log(`bull-board listening on host:${PORT}${DASHBOARD_ROOT_PATH}`);
  });
}

void main();
