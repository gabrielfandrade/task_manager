# Gerenciador de Tarefas

Aplicação para o cadastro, visualização, atualização e exclusão de terafas.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

- Você instalou a versão mais recente de `NodeJs e NPM`.
- Banco de dados SQL, que no caso, este projeto foi desenvolvido utilizando `MySQL`.

### 🔧 Instalação

Para instalar o projeto, clone o repositório e siga estas etapas.

Instalar dependências:

```
npm install
```

E para iniciar o projeto:

```
npm start
```

## 🛠️ Construído com

* [NodeJS](https://nodejs.org/en/docs)
* [Express](https://expressjs.com/en/5x/api.html)
* [MySQL](https://dev.mysql.com/doc/)

## Endpoints da API:

#### Listagem de tarefas

|Método |Funcionalidade                                                                     |URL                                          |
|:-----:|:---------------------------------------------------------------------------------:|:-------------------------------------------:|
|`GET`  |Retorna todas as tarefas cadastradas no banco de dados                             |http://localhost:3000/task                   |
|`GET`  |Retorna uma tarefa em específico com base em seu `ID`                              |http://localhost:3000/task/:id               |
|`GET`  |Retorna todas as terafas em específico com base em seu `Titulo`                    |http://localhost:3000/task/title/:title      |
|`GET`  |Retorna todas as terafas com o `Status` `pendente`                                 |http://localhost:3000/task/status/1          |
|`GET`  |Retorna todas as terafas com o `Status` `em andamento`                             |http://localhost:3000/task/status/2          |
|`GET`  |Retorna todas as terafas com o `Status` `concluída`                                |http://localhost:3000/task/status/3          |

#### Cadastro de Tarefas

|Método |Funcionalidade                                                                    |URL                                           |
|:-----:|:--------------------------------------------------------------------------------:|:--------------------------------------------:|
|`POST` |Cadastra uma nova tarefa e retorna um `JWT` necessario para atualização e exclusão|http://localhost:3000/task                    |


Na requisição `POST` é necessário informar um JSON no seguinte formato:

```
{
  "title": "Titulo da Tarefa",
  "description": "Descrição da Tarefa",
}
```

#### Atualização de Tarefas

|Método |Funcionalidade                                                                    |URL                                           |
|:-----:|:--------------------------------------------------------------------------------:|:--------------------------------------------:|
|`PUT`  |Atualiza uma tarefa com base em seu `ID`                                          |http://localhost:3000/task/:id                |


Na requisição `PUT` que atualiza uma tarefa é necessário informar um JSON no seguinte formato:

```
{
  "description": "Descrição atualizada da Tarefa",
  "status": "concluída"
}
```

#### Exclusão de Tarefas

|Método |Funcionalidade                                                                    |URL                                           |
|:-----:|:--------------------------------------------------------------------------------:|:--------------------------------------------:|
|`DELETE`|Exclui uma tarefa do banco de dados com base em seu `ID`                         |http://localhost:3000/task/:id                |


<br>
<br>
