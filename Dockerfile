# 使用 Node.js 官方映像作為基礎
FROM node:14

# 設定工作目錄
WORKDIR /

# 複製 package.json 和 package-lock.json 到工作目錄
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製整個機器人代碼到工作目錄
COPY . .

# 定義運行指令
CMD ["node", "/src/index.js"]