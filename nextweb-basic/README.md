nextweb-basic
=============

## Getting Started

```bash
# 建立工程
npx create-next-app@13.4 nextweb-basic
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
Creating a new Next.js app in /private/tmp/nextweb-basic.

Using npm.

Success! Created nextweb-basic at /private/tmp/nextweb-basic

# 运行调试
cd nextweb-basic
npm run dev
# or
npm run build
npm start
```

## Docker

```bash
docker build -t komavideo/nextweb-basic:1.0 .
docker image ls
docker run --name nextweb-basic -d -p 3000:3000 komavideo/nextweb-basic:1.0
curl http://localhost:3000
```
