# HTTP
Pontos mais importantes:
  - Method
  - url 

- Headers(Cabeçalhos - Requisição/Response) => Metadatas

## Mais usados serão: GET, POST, PUT, PATCH e DELETE

- GET => Buscar um recurso do back-end
- POST => Criar um recurso no back-end
- PUT => Atualzar um recurso no back-end
- PATCH => Atualizar uma informação especifica do recurso no back-end
- DELETE => Deletar um recurso do back-end

---
## Existe três formas do Frontend enviar informações para a nossa API

#### Query Parameters: 
  URL Stateful => Filtros, busca, paginação.
  São parâmetros não obrigatórios na grande maioria dos casos

  Ex: http://localhost:3333/users?userId=1&name=Diego
  
  * Não deve ser usado para enviar dados sensíveis, porque está na URL e é fácil para interceptar


#### Route Parameters: 
  Identificação de recurso (Parâmetros não nomeados)
  
  Ex: DELETE http://localhost:3333/users/1
  
  * Não deve ser usado para enviar dados sensíveis, porque está na URL e é fácil para interceptar

#### Request Body:
  Utilizado na maioria das vezes para envio de informações de um formulário (HTTPs)

  * Muito mais difícil de descriptografa-los e intercepta-los.
