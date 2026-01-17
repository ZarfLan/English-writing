# Redis Pub/Sub Examples

This directory contains working examples demonstrating that **Redis pub/sub can have one publisher and multiple subscribers at the same time**.

## Question Answered

**"Can Redis pub/sub have one publisher and multiple subscribers at the same time?"**

**Answer: YES!** These examples prove it works perfectly.

## Available Examples

- **[Node.js Example](nodejs/)** - JavaScript implementation using the `redis` npm package
- **[Python Example](python/)** - Python implementation using the `redis-py` library

## Quick Start

Choose your preferred language and follow the instructions in the respective README:

- [Node.js README](nodejs/README.md)
- [Python README](python/README.md)

## Architecture

```
┌─────────────┐
│  Publisher  │ ──┐
└─────────────┘   │
                  │
                  ▼
            ┌──────────┐
            │  Redis   │
            │ Channel  │
            └──────────┘
                  │
       ┌──────────┼──────────┐
       │          │          │
       ▼          ▼          ▼
  ┌────────┐ ┌────────┐ ┌────────┐
  │ Sub #1 │ │ Sub #2 │ │ Sub #3 │
  └────────┘ └────────┘ └────────┘
```

One publisher broadcasts messages to a Redis channel, and all subscribers listening to that channel receive the messages simultaneously.

## Testing Requirements

To run these examples, you need:
1. Redis server running (default: localhost:6379)
2. Programming language runtime (Node.js or Python)
3. Required dependencies installed

## Expected Behavior

When you run the examples:
1. The publisher will send messages every 3 seconds
2. All active subscribers will receive each message simultaneously
3. You can start/stop subscribers at any time
4. New subscribers only receive messages sent after they connect (pub/sub is fire-and-forget)

## Use Cases

These examples demonstrate patterns useful for:
- Real-time notifications
- Chat applications
- Live data feeds
- Event broadcasting
- IoT sensor data distribution
