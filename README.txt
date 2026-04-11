POKEDEX API (NestJS, MongoDB and Docker)

* Inicializamos la app
    - Creamos la app
        $ nest new pokedex-api
            > ? Which package manager would you ❤️  to use? yarn
        $ yarn install
        $ cd pokedex-api
        $ yar run start | yarn start        // Ejecutar la app
        $ yarn start:dev                    // Ejecutar la app (watch mode)

        Ejecutar en DEV
        $ yarn install
        $ docker compose up -d              // Levantar mongoDB
        $ yarn start:dev
    
    - Agregar dependencias
        + Server Static (archivos estaticos)
            $ yarn add @nestjs/serve-static
    
    - Eliminar dependencias
        + Prettier
            $ yarn remove prettier  (optional!)
        + ESlint-Config-Prettier y ESlint-plugin-Prettier (optional!)
            $ yarn remove eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un resource (recurso completo sin archivos de test)
            $ nest g res pokemon --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y

    - Docker
        + Run docker compose
            $ docker compose up -d

    - TablePlus
        + Conectar a mongoDB (Click "+" | New Connection)
            > Name: Nest Pokedex API
            > URL: mongodb://localhost:27017/nest-pokedex
            Click "Test" > "Save" > "Connect"
    
    - Postman
        + Create Workspace (Click "Create Workspace" > Blank workspace | Click "Next" > Name: Ax2CDev | Click "Create")
        + Create Collection (Click "+ | Create new collection" > Blank collection > Name: pokedex-api)
        + HTTP requests
            * Static Content (Front-End)
                > GET: http://localhost:30000/                              Click "Send"
            * Pokemon (Click '...' > Add folder > Name: "Pokemon")
                - Create Pokemon
                    > POST: http://localhost:30000/api/v2/pokemon                           Click "Send"
                        > Body > Row | JSON
                            { }
                - Find All Pokemon
                    > GET: http://localhost:30000/api/v2/pokemon                            Click "Send"
                - Find One Pokemon
                    > GET: http://localhost:30000/api/v2/pokemon/1                          Click "Send"
                - Update Pokemon
                    > PATCH: http://localhost:30000/api/v2/pokemon/1                        Click "Send"
                        > Body > Row | JSON
                            { }
                - Delete Pokemon
                    > DELETE: http://localhost:30000/api/v2/pokemon/1                       Click "Send"

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")