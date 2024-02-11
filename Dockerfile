# Imagem base
FROM node:14

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar arquivos de dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Buildar a aplicação para produção
RUN npm run build

# Instalar um servidor HTTP simples para servir o conteúdo estático
RUN npm install -g serve

# Expõe a porta que o servidor usa
EXPOSE 5000

# Comando para iniciar o aplicativo
CMD ["serve", "-s", "build"]
