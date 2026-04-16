FROM node:24-alpine3.23

# Set working directory
RUN mkdir -p /var/www/pokedex
WORKDIR /var/wwww/pokedex

# Copiar el directorio y su contenido
COPY . ./var/www/pokedex
COPY package.json tsconfig.json tsconfig.build.json /var/wwww/pokedex/
RUN yarn install --prod
RUN yarn build

# Dar permiso para ejectuar la aplicación
RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /var/www/pokedex
USER pokeuser

# Limpiar el caché
RUN yarn cache clean --force

EXPOSE 3000

CMD ["yarn", "start"]