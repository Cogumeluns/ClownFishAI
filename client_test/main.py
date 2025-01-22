import requests

url = "http://127.0.0.1:8000/get-image"
'''
response = requests.post(url, json={"text":"img_0.jpg"})
if response.status_code == 200:
    with open("output_image.png", "wb") as f:
        f.write(response.content)
    print("Image saved as output_image.png")
else:
    print(f"Error: {response.json()}")
'''

url = "http://127.0.0.1:8000/get-image-infos"
'''
response = requests.post(url)
if response.status_code == 200:
    print(response.json())
    print("[ Files ]")
else:
    print(f"Error: {response.json()}")
'''

url = "http://127.0.0.1:8000/generate-image"
response = requests.post(url, json={"text": "Sunset"})
if response.status_code == 200:
    with open("output_image.png", "wb") as f:
        f.write(response.content)
    print("Image saved as output_image.png")
else:
    print(f"Error: {response.json()}")