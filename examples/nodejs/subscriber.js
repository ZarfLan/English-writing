const redis = require('redis');

async function subscriber(subscriberName) {
    const client = redis.createClient();
    await client.connect();
    
    console.log(`${subscriberName} connected and listening to news-channel...`);
    
    await client.subscribe('news-channel', (message) => {
        console.log(`[${subscriberName}] Received: ${message}`);
    });
}

// Get subscriber name from command line argument
const subscriberName = process.argv[2] || 'Subscriber';
subscriber(subscriberName).catch(console.error);
