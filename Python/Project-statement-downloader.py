import pandas as pd
import requests
import os
import re


df = pd.read_csv("projects.csv")
df.columns = df.columns.str.strip()
os.makedirs("downloads", exist_ok=True)

for _, row in df.iterrows():
    link = str(row["link"]).strip()
    filename = str(row["title"]).strip() + ".pdf" 
    filename = filename.replace("/", "_")
    filepath = os.path.join("downloads", filename)
    if not link or not filename or os.path.exists(filepath):
        continue 

    match = re.search(r"/d/([a-zA-Z0-9_-]+)", link)
    if match:
        file_id = match.group(1)
        download_url = f"https://drive.google.com/uc?export=download&id={file_id}"
    else:
        download_url = link  
   
    
    try:
        response = requests.get(download_url, stream=True)
        response.raise_for_status()
        with open(filepath, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Downloaded: {filename}")   
    except Exception as e:
        print(f"Failed to download {link} — {e}")         
