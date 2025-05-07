# 📊 Script Metabase → Google Sheets

Este projeto contém uma função `Prueba()` escrita em Google Apps Script, que:

- Faz login na API do Metabase
- Executa uma query específica (ID `5615`)
- Recebe os dados em formato JSON
- Limpa a aba `Prueba` de uma Google Sheet
- Escreve os dados formatados na planilha com ordem de colunas definida

---

## 📂 Arquivo principal

- [`Prueba.gs`](./Prueba.gs): contém o script completo que pode ser usado dentro do editor do Google Apps Script.

---

## 🧰 Como usar

1. Acesse [https://script.google.com](https://script.google.com)
2. Crie um novo projeto
3. Copie o conteúdo do `Prueba.gs` para o editor
4. Ajuste os seguintes dados:
   - `metabaseUsername` / `metabasePassword`
   - `queryId` com o ID da sua query no Metabase
   - `spreadsheetId` e `sheetName` da sua planilha
5. Clique em ▶️ **Executar**

---

## 🔐 Observações de segurança

- Nunca exponha senhas ou tokens diretamente em repositórios públicos.
- O ideal é ler credenciais via variáveis de ambiente ou `PropertiesService` no Apps Script.

---

## 📎 Exemplo visual (opcional)

```javascript
var spreadsheetId = 'SEU_ID_AQUI';
var sheetName = 'Prueba';