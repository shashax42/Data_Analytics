import sqlite3
import pandas as pd
import matplotlib.pyplot as plt
import os

# Neo-Brutalism Style Constants
BG_COLOR = "#F5F500"
ACCENT_COLOR = "#FF2D55"
WHITE = "#FFFFFF"
BLACK = "#000000"

def generate_charts():
    conn = sqlite3.connect('data/nemo_data.db')
    df = pd.read_sql_query("SELECT * FROM store_items", conn)
    conn.close()

    if df.empty:
        print("No data found in database.")
        return

    # Create assets directory
    os.makedirs('assets', exist_ok=True)

    # 1. Business Type Distribution (Bar Chart)
    plt.figure(figsize=(8, 6), facecolor=BG_COLOR)
    counts = df['business_name'].value_counts()
    
    # Custom Neo-Brutalist Plotting
    ax = counts.plot(kind='bar', color=ACCENT_COLOR, edgecolor=BLACK, linewidth=3)
    plt.title("BUSINESS TYPE DISTRIBUTION", fontsize=20, fontweight='bold', pad=20)
    plt.xticks(rotation=45, fontweight='bold')
    plt.yticks(fontweight='bold')
    
    # Add Hard Shadow Effect to Bars (fake)
    for i, p in enumerate(ax.patches):
        ax.annotate(str(p.get_height()), (p.get_x() + p.get_width()/2., p.get_height()), 
                    ha='center', va='center', xytext=(0, 10), textcoords='offset points', fontweight='bold')
    
    ax.set_facecolor(WHITE)
    plt.tight_layout()
    plt.savefig('assets/business_dist.png', facecolor=BG_COLOR)
    print("Saved assets/business_dist.png")

    # 2. Size vs Deposit (Scatter Plot)
    plt.figure(figsize=(8, 6), facecolor=BG_COLOR)
    plt.scatter(df['size'], df['deposit'], s=100, color="#00FFCC", edgecolor=BLACK, linewidth=2, alpha=0.8)
    
    plt.title("SIZE VS DEPOSIT CORRELATION", fontsize=20, fontweight='bold', pad=20)
    plt.xlabel("Size (sqm)", fontweight='bold')
    plt.ylabel("Deposit (10k KRW)", fontweight='bold')
    plt.grid(True, linestyle='--', alpha=0.6, color=BLACK)
    
    ax = plt.gca()
    ax.set_facecolor(WHITE)
    for spine in ax.spines.values():
        spine.set_linewidth(3)
        spine.set_color(BLACK)
        
    plt.tight_layout()
    plt.savefig('assets/size_deposit.png', facecolor=BG_COLOR)
    print("Saved assets/size_deposit.png")

if __name__ == "__main__":
    generate_charts()
