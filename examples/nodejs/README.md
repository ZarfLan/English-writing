# Redis Pub/Sub - Node.js Example

This example demonstrates Redis pub/sub with **one publisher and multiple subscribers**.

## Prerequisites

- Node.js installed
- Redis server running on localhost:6379

## Setup

```bash
npm install
```

## Running the Example

### Start Redis (if not already running)
```bash
# On Linux/Mac
redis-server

# Or using Docker
docker run -d -p 6379:6379 redis
```

### Terminal 1: Start the Publisher
```bash
npm run publisher
```

### Terminal 2: Start First Subscriber
```bash
node subscriber.js "News App"
```

### Terminal 3: Start Second Subscriber
```bash
node subscriber.js "Website"
```

### Terminal 4: Start Third Subscriber
```bash
node subscriber.js "Mobile App"
```

## What You'll See

All subscribers will receive the same messages simultaneously from the single publisher, demonstrating that **Redis pub/sub supports one publisher with multiple subscribers at the same time**.

## Stopping the Example

Press `Ctrl+C` in each terminal to stop the publisher and subscribers.
