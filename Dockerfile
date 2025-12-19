# 1. 사용할 컴퓨터 환경 선택 (Node 18버전)
FROM node:18

# 2. 서버 코드가 들어갈 폴더 만들기
WORKDIR /app

# 3. 설정 파일 복사 및 패키지 설치
COPY package.json ./
RUN npm install

# 4. 나머지 모든 코드 복사
COPY . .

# 5. 서버 포트 8000번 열기
EXPOSE 8000

# 6. 서버 실행 명령어
CMD ["node", "index.js"]
