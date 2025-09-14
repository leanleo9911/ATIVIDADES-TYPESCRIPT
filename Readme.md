# ATIVIDADES TYPESCRIPT

Este projeto contém diversos exercícios e exemplos em TypeScript, organizados em várias pastas. Siga as instruções abaixo para rodar os códigos em outro computador.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior recomendada)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)

## Instalação dos pacotes necessários

Você pode instalar o TypeScript globalmente ou usar o arquivo `package.json` já presente na raiz do projeto para instalar todas as dependências de uma vez.

### 1. Instale as dependências do projeto

Abra o terminal na pasta raiz do projeto e execute:

```
npm install
```

Isso irá instalar:
- typescript
- ts-node
- @types/node

Se preferir instalar o TypeScript globalmente, use:
```
npm install -g typescript
```

### 2. Compile os arquivos TypeScript

Cada pasta já possui um arquivo `tsconfig.json` configurado. Para compilar todos os arquivos .ts da pasta desejada, navegue até a pasta e execute:

```
npx tsc
```

Os arquivos JavaScript compilados serão gerados na pasta `dist` (ou na raiz, dependendo do tsconfig).

### 3. Execute os arquivos compilados

Para rodar um arquivo compilado, use:

```
node dist/NOME_DO_ARQUIVO.js
```

Exemplo:
```
node dist/Exercicio1.js
```

### 4. (Opcional) Execute arquivos TypeScript diretamente

Se instalou o `ts-node`, pode rodar arquivos .ts sem compilar:

```
npx ts-node src/Exercicio1.ts
```

ou

```
npx ts-node Exercicio1.ts
```
