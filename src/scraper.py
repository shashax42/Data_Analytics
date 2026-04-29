import requests
import sqlite3
import json
import os

def setup_db():
    os.makedirs('data', exist_ok=True)
    conn = sqlite3.connect('data/nemo_data.db')
    cursor = conn.cursor()
    cursor.execute('DROP TABLE IF EXISTS store_items')
    cursor.execute('''
        CREATE TABLE store_items (
            id TEXT PRIMARY KEY,
            title TEXT,
            business_name TEXT,
            price_type TEXT,
            deposit INTEGER,
            monthly_rent INTEGER,
            premium INTEGER,
            size REAL,
            floor TEXT,
            near_subway TEXT,
            raw_json TEXT
        )
    ''')
    conn.commit()
    return conn

def fetch_data():
    url = "https://www.nemoapp.kr/api/store/search-list"
    params = {
        "Subway": "222",
        "Radius": "1000",
        "CompletedOnly": "false",
        "NELat": "37.513418496475516",
        "NELng": "127.03560698494442",
        "SWLat": "37.48333024902553",
        "SWLng": "127.00058793535545",
        "Zoom": "15",
        "SortBy": "29",
        "PageIndex": "0"
    }
    headers = {
        "referer": "https://www.nemoapp.kr/store",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36"
    }
    
    print(f"Fetching data from {url}...")
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None

def save_to_db(conn, data):
    if not data or 'items' not in data:
        print("No items to save.")
        return

    cursor = conn.cursor()
    items = data['items']
    count = 0
    
    for item in items:
        item_id = item.get('id', '')
        title = item.get('title', '')
        business_name = item.get('businessLargeCodeName', '')
        price_type = item.get('priceTypeName', '')
        deposit = item.get('deposit', 0)
        monthly_rent = item.get('monthlyRent', 0)
        premium = item.get('premium', 0)
        size = item.get('size', 0.0)
        floor = f"{item.get('floor', '')}층"
        near_subway = item.get('nearSubwayStation', '')
        
        cursor.execute('''
            INSERT OR REPLACE INTO store_items 
            (id, title, business_name, price_type, deposit, monthly_rent, premium, size, floor, near_subway, raw_json)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (item_id, title, business_name, price_type, deposit, monthly_rent, premium, size, floor, near_subway, json.dumps(item)))
        count += 1
    
    conn.commit()
    print(f"Successfully saved {count} items to database.")

if __name__ == "__main__":
    db_conn = setup_db()
    scraped_data = fetch_data()
    if scraped_data:
        save_to_db(db_conn, scraped_data)
    db_conn.close()
