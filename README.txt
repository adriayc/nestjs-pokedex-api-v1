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
        + Mongo
            $ yarn add @nestjs/mongoose mongoose
        + Class-Validator y Class-transformer (Validación)
            $ yarn add class-validator class-transformer
        + Axios
            $ yarn add axios
        + Dotenv (Environment variable config)
            $ yarn add @nestjs/config

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
        + Crear un module
            $ nest g mo common
        + Crear un pipe (sin archivos de test y no genera una carpeta)
            $ nest g pi common/pipes/parseMongoId --no-spec --flat
        + Crear un resource (SEED - Populate DB sin archivos de test)
            $ nest g res seed --no-spec
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
                            {
                                "no": 1,
                                "name": "Bulbasaur"
                            }
                - Find All Pokemon
                    > GET: http://localhost:30000/api/v2/pokemon                            Click "Send"
                    > GET: http://localhost:30000/api/v2/pokemon?limit=10&offset=10         Click "Send"
                - Find One Pokemon
                    > GET: http://localhost:30000/api/v2/pokemon/{{term - ID|no|name}}      Click "Send"
                - Update Pokemon
                    > PATCH: http://localhost:30000/api/v2/pokemon/{{term - ID|no|name}}    Click "Send"
                        > Body > Row | JSON
                            {
                                "name": "Bulbasaur update"
                            }
                - Delete Pokemon
                    > DELETE: http://localhost:30000/api/v2/pokemon/{{id}}                  Click "Send"
            * SEED (Click '...' > Add folder > Name: "SEED")
                - Populate DB (Solo DEV)
                    > POST: http://localhost:30000/api/v2/seed                              Click "Send"
                        > Body > Row | JSON
                            { }

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")
        + Convertir JSON as Code
            > Copiar el "response" de Postman | Bruno | Apidog
            > Crear un archivo (Ej: interface)
            > CTRL + SHIFT + P > Search: ..."Paste JSON as Code" > Top Level Name: PokeResponse