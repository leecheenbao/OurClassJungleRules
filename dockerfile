# 使用 Node.js 作為基本映像
FROM node:20.2.0-bullseye-slim as build-stage
RUN apt update

RUN apt install -y curl
RUN apt install -y bash libpng-dev gcc g++ make

WORKDIR /app

# 複製 package.json 與 package-lock.json 到容器中
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製 Vue.js 專案檔案到容器中
COPY . .

# 建構專案
RUN npm run build

# 指定執行時的指令
FROM nginx:stable-alpine as production-stage

# 複製 Vue.js 專案的建構結果到 Nginx 的目錄中
# COPY --from=build-stage /app/.output/public /etc/nginx/html
COPY --from=build-stage /app/.nuxt/dist /etc/nginx/html

# 設定 Nginx 的配置檔
COPY conf.d /etc/nginx/conf.d

# 暴露 Nginx 的 port
EXPOSE 80

# 開始 Nginx 伺服器
CMD ["nginx", "-g", "daemon off;"]