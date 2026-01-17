import redis
import time
import datetime

def publisher():
    """Publisher that sends messages to the news-channel"""
    client = redis.Redis(host='localhost', port=6379, decode_responses=True)
    print('Publisher started. Publishing news updates...')
    
    count = 1
    while True:
        message = f"Breaking News #{count}: Important update at {datetime.datetime.now().strftime('%H:%M:%S')}"
        client.publish('news-channel', message)
        print(f'Published: {message}')
        count += 1
        time.sleep(3)

if __name__ == '__main__':
    try:
        publisher()
    except KeyboardInterrupt:
        print('\nPublisher stopped.')
    except Exception as e:
        print(f'Error: {e}')
