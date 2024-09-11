import requests

url = 'http://127.0.0.1:5000/predict'
email_body = {'email_body': 'Win a brand new car now'}
response = requests.post(url, json=email_body)

print(response.json())
