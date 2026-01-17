import redis
import sys

def subscriber(subscriber_name):
    """Subscriber that listens to the news-channel"""
    client = redis.Redis(host='localhost', port=6379, decode_responses=True)
    pubsub = client.pubsub()
    pubsub.subscribe('news-channel')
    
    print(f'{subscriber_name} connected and listening to news-channel...')
    
    for message in pubsub.listen():
        if message['type'] == 'message':
            print(f'[{subscriber_name}] Received: {message["data"]}')

if __name__ == '__main__':
    subscriber_name = sys.argv[1] if len(sys.argv) > 1 else 'Subscriber'
    try:
        subscriber(subscriber_name)
    except KeyboardInterrupt:
        print(f'\n{subscriber_name} stopped.')
    except Exception as e:
        print(f'Error: {e}')
