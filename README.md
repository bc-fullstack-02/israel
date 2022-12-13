![images](https://user-images.githubusercontent.com/83549174/206623406-d511887f-4be5-4091-a112-9f42c4ecf9dc.png)

<h1>Rede social amazonas</h1>

> Status: Developing⚠️

### Uma aplicação planejada pela Sysmap, onde eu tenho que desenvolver uma rede social midia com frontend, backend e mobile. 

## Descrição principal do projeto:

+ Registrar usuario

+ Autenticar 

+ Logar

+ Adicionar imagens e videos

+ Curti postagens 

+ Seguir outros usuarios

**Esses recursos estão em desenvolvimento

## Tecnologias usadas:

+ Javascript
+ React
+ Nodejs
+ MongoDB
+ Swagger para documentação da API

## Como rodar aplicação Backend:
+ 1 - Abra o terminal do projeto
+ 2 - entre na pasta do projeto backend (cd backend) depois (cd src) para entrar no repositorio do projeto.
+ 3 - no terminal, executa o comando nodemon server.js
+ 4 - servidor backend funcionando.

### Executando as Rotas backend:
+ 1 - No postman, nos iremos executar as devidas rotas para execução do backend.
+ 2 - com o comando POST no postman, iremos executar a rota abaixo.

   * http://localhost:3001/auth/register
   
   * comando de execução dessa operação abaixo:
   
   {
   "name": "exemplo",
   "email": "exemplo@exmplo.com",
   "password": "exemplo"
   }
   
+ 3 - Com o comando POST no postman, iremos executar a rota de autenticação de usuário

   * http://localhost:3001/auth/autentica 

   { "name": "exemplo1", "password": "password" } 
    
    O sistema vai verificar se tem usuario cadastrado ou não no banco de dados. com as seguintes menssagens ira exibir no seu console do postman.
    
   * User not found - usuario não existente.
    
   * Invalid password - Email ou senha inválidos.
   
+ 4 Nessa rota iremos executar a validação com token do usuário com o sistema usando o comando GET.

  * http://localhost:3001/admin/users 
  
  Essa validação fica entre a requisição do usuário e entre o servidor, pra validar se o token do usuario é igual do servidor.
   
   



