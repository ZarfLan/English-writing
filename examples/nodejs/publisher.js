const redis = require('redis');

async function publisher() {
    const client = redis.createClient();
    await client.connect();
    
    console.log('Publisher started. Publishing news updates...');
    
    let count = 1;
    setInterval(async () => {
        const message = `Breaking News #${count}: Important update at ${new Date().toLocaleTimeString()}`;
        await client.publish('news-channel', message);
        console.log(`Published: ${message}`);
        count++;
    }, 3000);
}

publisher().catch(console.error);
