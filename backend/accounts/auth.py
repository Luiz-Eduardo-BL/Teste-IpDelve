import requests
from rest_framework.authtoken.models import Token

def get_auth_token(username, password):
    # URL da API de login
    login_url = 'http://localhost:8000/auth/token/login/'

    # Dados do JSON para o login
    data = {
        'username': username,
        'password': password
    }

    # Faz a solicitação de login usando autenticação por token
    response = requests.post(login_url, json=data)

    # Verifica se a solicitação foi bem-sucedida (status code 200)
    if response.status_code == 200:
        # Obtém o token de autenticação da resposta JSON
        token = response.json().get('token', None)
        return token
    else:
        print('Falha no login. Verifique suas credenciais.')
        return None

def get_travel_plans(token):
    # URL da API de listagem de planos de viagem
    travel_plans_url = 'http://localhost:8000/create_travel_plan/'

    # Cabeçalho da requisição com o token de autenticação usando o esquema Bearer Token
    headers = {
        'Authorization': 'Bearer ' + token
    }

    # Faz a solicitação de listagem de planos de viagem
    response = requests.get(travel_plans_url, headers=headers)

    # Verifica se a solicitação foi bem-sucedida (status code 200)
    if response.status_code == 200:
        # Obtém a lista de planos de viagem da resposta JSON
        travel_plans = response.json()
        return travel_plans
    else:
        print('Falha na listagem de planos de viagem.')
        return None
