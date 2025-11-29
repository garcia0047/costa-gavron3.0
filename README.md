# Costa Gavron Creative

Repositório do projeto front-end estático React/TypeScript.

- Repositório remoto (privado): https://github.com/geancosta420-bit/costa-gavron-criativo2

Este repositório contém tudo que é necessário para rodar o projeto localmente.

## Rodar localmente

**Pré-requisitos:** `Node.js` (versão LTS recomendada) e `npm`.

1. Instale dependências:
   `npm install`
2. (Opcional) Se o projeto usar variáveis de ambiente, crie um arquivo `.env.local` com as chaves necessárias.
3. Rode em modo de desenvolvimento:
   `npm run dev`

## Build para produção

Gerar arquivos de produção:
```
npm run build
```

## Hospedagem no Vercel

O projeto está configurado para deploy automático no Vercel:

**Deploy automático via Git:**
- Conecte o repositório GitHub ao Vercel
- Cada push na branch `main` faz deploy automático
- `vercel.json` já está configurado com as rotas corretas

**Deploy manual via CLI:**
1. Instale a CLI do Vercel (uma vez):
```
npm install -g vercel
```
2. Faça login:
```
vercel login
```
3. Deploy:
```
vercel --prod
```

Notas:
- Este projeto usa `HashRouter`, então funciona bem em hosting estático
- Build output: `dist/`
- Variáveis de ambiente: configure no painel do Vercel em Settings → Environment Variables

## Variáveis de ambiente

Crie `.env.local` na raiz (não comite) com:
```
VITE_EMAILJS_PUBLIC_KEY=seu_public_key
VITE_EMAILJS_SERVICE_ID=service_XXXX
VITE_EMAILJS_TEMPLATE_ID=template_XXXX
# Opcional
GEMINI_API_KEY=...
```

O app lê via `import.meta.env.*` em `App.tsx`. As chaves anteriores hardcoded foram migradas para env.

## Notas de segurança

## Contato
Abra uma issue no repositório privado ou entre em contato diretamente para alterações adicionais.
