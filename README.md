# bull-board-docker 🎯

Docker image of [bull-board](https://github.com/vcapretz/bull-board).

`bull-board` is a dashboard for [bull.js](https://github.com/OptimalBits/bull) and [bullmq](https://github.com/taskforcesh/bullmq) which visualizes Bull queues and their jobs.

## Running
One of the various number of ways how you can run this image is either using plain docker or use docker-compose.

### Running using Docker
Use below command to run [bull-board](https://github.com/vcapretz/bull-board) connected to the Redis from your host. Dashboard will be accessible on address: `localhost:3000`.

```sh
docker run -p 3000:3000 -e REDIS_URL=redis://host.docker.internal mikek90/bull-board
```

### Running using docker-compose
The easier way is to use below command to run [bull-board](https://github.com/vcapretz/bull-board) connected to the Redis from your host. Dashboard will be accessible on address: `localhost:3000/bullboard`.

```sh
docker-compose up
```

## Environment variables
| Environment variable | Description |
|-|-|
| `REDIS_URL` | **(Required)** Redis URL. |
| `BULL_PREFIX` | Redis key prefix (default value: `bull` - default value for [bull.js](https://github.com/OptimalBits/bull)). |
| `DASHBOARD_ROOT_PATH` | Dashboard routing path - the dashboard will be accesible on address: `host:PORT/DASHBOARD_ROOT_PATH` (default value: `/` which means that the dashboard will be accesible on `host:PORT`). |
| `PORT` | Web server port (default value: `3000`). |
