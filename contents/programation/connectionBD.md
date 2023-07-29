# Podman 

```bash
// Verifica todas as imagens disponíveis
podman image ls

// Verificar os container rodando no momento
podman container ps

// Entrando no bash do Container
podman exec -it <ID> bash

// Entrando no postgres
psql -U root

// Criando DATABASE
CREATE DATABASE <nome_do_banco>;

// Entrando no Database
\c <nome_db>
```

Para ver todos os DB: \l
Para ver todas as tabelas do DB: \dt
