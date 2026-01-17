const redis = require('redis');

async function subscriber(subscriberName) {
    const client = redis.createClient();
    
    client.on('error', (err) => {
        console.error('Redis Client Error:', err);
    });
    
    try {
        await client.connect();
        console.log(`${subscriberName} connected and listening to news-channel...`);
        
        await client.subscribe('news-channel', (message) => {
            console.log(`[${subscriberName}] Received: ${message}`);
        });
    } catch (err) {
        console.error(`Failed to connect or subscribe (${subscriberName}):`, err);
        process.exit(1);
    }
}

// Get subscriber name from command line argument
const subscriberName = process.argv[2] || 'Subscriber';
subscriber(subscriberName).catch((err) => {
    console.error(`Subscriber error (${subscriberName}):`, err);
    process.exit(1);
});
