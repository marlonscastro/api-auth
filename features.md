* Casos de uso 
    ** Autenticar um usuario;

    1º usuário passa um objeto de login (json): 
        {
            email: string
            senha: string
        }
    2º o sistema deve receber os dados mediante / através de uma rota (/login) - POST
    3º deve verificar se
        3.1 o usuario existe
        3.2 se a sua senha confere
    4º gerar um token de acesso com alguns dados do usuario
    5º criar um objeto de retorno e retornar pro front / mobile / web etc...
        {
            id: number
            nome: string 
            email: string
            token: string
        } 
