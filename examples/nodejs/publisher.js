const redis = require('redis');

async function publisher() {
    const client = redis.createClient();
    
    client.on('error', (err) => {
        console.error('Redis Client Error:', err);
    });
    
    try {
        await client.connect();
        console.log('Publisher started. Publishing news updates...');
        
        let count = 1;
        setInterval(async () => {
            const message = `Breaking News #${count}: Important update at ${new Date().toLocaleTimeString()}`;
            try {
                await client.publish('news-channel', message);
                console.log(`Published: ${message}`);
            } catch (err) {
                console.error('Error publishing message:', err);
            }
            count++;
        }, 3000);
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
        process.exit(1);
    }
}

publisher().catch((err) => {
    console.error('Publisher error:', err);
    process.exit(1);
});
