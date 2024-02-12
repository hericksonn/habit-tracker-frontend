# Fase de Build
FROM node:20 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de definição de pacote e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Constrói a aplicação Next.js
RUN npm run build

# Fase de Execução
FROM node:20

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos necessários da etapa de build
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expõe a porta que a aplicação Next.js utiliza
EXPOSE 3000

# Comando para executar a aplicação
CMD ["npm", "start"]
