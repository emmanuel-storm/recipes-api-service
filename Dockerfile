FROM ubuntu:latest
LABEL authors="emmanuel"

ENTRYPOINT ["top", "-b"]

# Utiliser une image de base Node.js pour ton API
FROM node:18

# Créer le répertoire de travail de l'application
WORKDIR /usr/src/app

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port que ton API écoute (par exemple 4000)
EXPOSE 4000

# Commande pour démarrer l'API
CMD ["npm", "start"]
