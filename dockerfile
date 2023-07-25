# 使用官方的 Node.js 鏡像作為基礎
FROM node:20.2.0-bullseye-slim as build-stage
RUN apt update

RUN apt install -y curl
RUN apt install -y bash libpng-dev gcc g++ make

WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY package*.json ./

# 安裝相依套件
RUN npm install

COPY . .
RUN npm run generate

# 建構專案
# RUN npm run build
# 指定執行時的指令
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.output/public /usr/share/nginx/html
# VOLUME /Users/liqingbao/workspace_front/nginx 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]