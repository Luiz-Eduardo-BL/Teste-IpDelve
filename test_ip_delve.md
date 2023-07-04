# Multiverse Travels Booker

Para este desafio, deverá ser utilizado a API do [Rick and Morty](https://rickandmortyapi.com/) como base.

Este texto documenta a especificação de uma aplicação de planejamento de viagens no universo de Rick and Morty. A API deve conter um recurso principal (/travel-plans), que representa um plano de viagem do usuário. No seguinte formato:

```js
{
  "id": 1,
  "travel_stops": [1, 2]
}
```

Cada elemento do array **travel_stops** é o ID de uma localização na Rick and Morty API.

## API
Esperamos que um usuário possa se cadastrar na plataforma e fazer login (sessão).

Esperamos que o usuário seja capaz de realizar o CRUD sobre os planos de viagens.
  O usuário deve:
  - Ser capaz de registrar um novo plano de viagens
  - Pesquisar todos os planos de viagem registradas no banco de dados
  - Pesquisar por um específico através do ID
  - Atualizar um plano de viagens
    - Adicionar uma parada ao plano de viagens

Um mesmo usuário pode criar vários planos de viagens, porém, ele só **deve** ter acesso aos planos de viagem criado por ele.

A autenticação deve utilizar JWT.

```Se preciso criar mais rotas além das que foram descritas, fique a vontade.```

## Front End (Web)
O front-end deve ser capaz de consumir todas as rotas descritas acima. Fique a vontade para dispor os dados como achar melhor. Preze pela UX.

O usuário deve ser capaz de:
  -  realizar login na sua conta
  -  visualizar os detalhes das localizações (as paradas da viagem) que ele cadastrou
  -  mostrar uma imagem de cada residente do lugar. Ex:

Para o seguinte plano de viagem:

```js
{
  "id": 1,
  "travel_stops": [25]
}
```
A API do Rick and Morty me retornaria as caracteristicas das localidades (travel_stop) do plano de viagem com o link de cada personagem residente:

```js
[
  {
    "id": 25,
    "name": "The Menagerie",
    "type": "Menagerie",
    "dimension": "unknown",
    "residents": [
      "https://rickandmortyapi.com/api/character/67",
      "https://rickandmortyapi.com/api/character/490",
      "https://rickandmortyapi.com/api/character/491"
    ],
    "url": "https://rickandmortyapi.com/api/location/25",
    "created": "2017-11-30T11:13:46.697Z"
  }
]
```
O front-end deve ser capaz de exibir uma imagem clicável de cada personagem residente de cada parada da viagem.

Ao clicar na imagem, deve-se abrir uma nova página com os detalhes do personagem.

O design do layout fica aberto à criatividade.

## Stack do desafio
### Backend
 - Deve-se utilizar Django com Django Rest
 - Banco de dados MySQL
 - Autenticação com JWT

### Frontend
  - React com Typescript
    - Next (opcional)
  - Para a estilização, escolha um:
    - Bootstrap
    - Tailwind
    - OBS: Hoje a plataforma utiliza na maioria bootstrap, mas estamos em fase de transição para o Tailwind

### Especificidades
  - Utilizar o git e github e ao final do projeto encaminhar o link do repositório do github para o Carlos Augusto
    - Os commits, preferivelmente em inglês
  - Criar um vídeo de 5 min explicando e mostrando o que foi desenvolvido
  - Informar a data de início e o prazo de entrega