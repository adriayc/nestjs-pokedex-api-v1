POKEDEX API (NestJS, MongoDB and Docker)

* Inicializamos la app
    - Creamos la app
        $ nest new pokedex-api
            > ? Which package manager would you ❤️  to use? yarn
        $ yarn install
        $ cd pokedex-api
        $ yar run start | yarn start        // Ejecutar la app
        $ yarn start:dev                    // Ejecutar la app (watch mode)
    
    - Agregar dependencias
        + Server Static (archivos estaticos)
            $ yarn add @nestjs/serve-static
    
    - Eliminar dependencias
        + Prettier
            $ yarn remove prettier  (optional!)
        + ESlint-Config-Prettier y ESlint-plugin-Prettier (optional!)
            $ yarn remove eslint-config-prettier eslint-plugin-prettier
    
    - Postman
        + Create Workspace (Click "Create Workspace" > Blank workspace | Click "Next" > Name: Ax2CDev | Click "Create")
        + Create Collection (Click "+ | Create new collection" > Blank collection > Name: pokedex-api)
        + HTTP requests
            > GET:                       Click "Send"

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")