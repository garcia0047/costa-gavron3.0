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

## Hospedagem no Firebase

Passos para publicar no Firebase Hosting:

1. Instale a CLI do Firebase (uma vez):
```
npm install -g firebase-tools
```
2. Faça login na sua conta Google:
```
firebase login
```
3. Configure o projeto (substitua `costa-gavron-creative` pelo ID real, se necessário):
```
firebase use costa-gavron-creative
```
4. Gere o build de produção:
```
npm run build
```
5. Publique:
```
firebase deploy --only hosting
```

Notas:
- Este projeto usa `HashRouter`, então funciona bem em hosting estático; mantemos `rewrites` para `index.html` por segurança.
- O deploy serve arquivos da pasta `dist/` conforme `firebase.json`.
- Cache: HTML sem cache; assets (`js`, `css`, imagens) com cache longo e `immutable`.

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
