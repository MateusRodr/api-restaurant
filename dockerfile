FROM node:20.11.1

WORKDIR /app

COPY . .  
RUN npm install

RUN npx prisma generate --schema=./src/prisma/schema.prisma

EXPOSE 3010
CMD ["npm", "run", "dev"]
