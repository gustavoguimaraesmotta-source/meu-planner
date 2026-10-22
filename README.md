# ✦ Meu Planner

Planner pessoal completo em **um único arquivo HTML**: compromissos, trabalho, estudos, tarefas, provas e projetos — tudo em um só lugar.

Sem cadastro, sem servidor, sem instalação. Cada pessoa que abre o planner tem **o seu próprio planejamento**, salvo apenas no navegador dela.

👉 **Use online:** https://gustavoguimaraesmotta-source.github.io/meu-planner/

---

## Funcionalidades

### 🗓️ Calendário em três visões
- **Meu dia** — linha do tempo por hora, com a linha do "agora", resumo do dia, próximo compromisso e progresso do dia.
- **Semana** — 7 colunas com horários, ideal para enxergar a rotina.
- **Mês** — visão geral com todos os compromissos, prazos e dias de estudo.
- Clique em qualquer horário vazio para criar um compromisso ali.

### 🕒 Compromissos
- Horário de início/fim ou **dia inteiro**.
- **Repetição**: todos os dias, dias úteis, toda semana (escolhendo os dias), todo mês — com data final opcional.
- Excluir só um dia de um compromisso que se repete, ou a série inteira.
- Local e observações.
- Marque cada compromisso como feito.

### ✅ Tarefas
- Tarefas com data, prioridade (alta, normal, baixa), categoria e observações.
- Filtros: Hoje (inclui atrasadas), Próximas, Sem data, Concluídas, Todas.
- Tarefas atrasadas aparecem em destaque no seu dia.
- Excluiu sem querer? Botão **Desfazer**.

### 🎯 Provas, projetos e entregas
- Cadastre o objetivo, a data e **quantos dias** quer dedicar.
- Escolha os dias clicando no calendário **ou** use **✨ Distribuir automaticamente** (todos os dias ou só dias úteis).
- Acompanhe o progresso com barra e anel de porcentagem, e a contagem regressiva até o prazo.

### 🏦 Bancos, contas e cartões
- Cadastre seus **bancos** e, dentro de cada um, o que você tem lá: **conta corrente, caixinha/poupança, investimento e cartão de crédito**.
- Cada conta tem **saldo**: soma os ganhos, subtrai os gastos e se ajusta com um clique se ficar diferente do banco.
- **Transferir** entre contas (ex.: guardar na caixinha, resgatar investimento) sem contar como gasto nem ganho.
- **Cartões de crédito** com limite e dia em que o limite renova: uma barra mostra quanto já foi usado no ciclo e zera na renovação.
- **Pagar fatura** escolhendo de qual conta saiu o dinheiro — sem contar os gastos duas vezes.
- Cartões **avulsos**, sem banco, só para acompanhar o limite.

### 💰 Gastos e ganhos
- Registre gastos e ganhos com valor, categoria, data e **de qual conta ou cartão** saiu.
- **Contas fixas** (aluguel, salário, assinaturas): cadastre uma vez e elas aparecem todo mês como previstas — dê o check quando pagar.
  - Escolha quando cai: **mesmo dia todo mês**, **Nº dia útil** (ex.: 5º dia útil), **último dia útil** ou **último dia do mês** — os dias úteis descontam fins de semana e feriados nacionais (inclusive Carnaval, Sexta-feira Santa e Corpus Christi).
  - **Confirmar sozinho no dia**: o valor entra ou sai do saldo automaticamente quando a data chega (ideal para salário e débito automático). Se atrasar, é só desmarcar naquele mês.
- **Compras parceladas**: informe o valor da parcela ou o total; cada parcela cai no mês certo e você vê quanto falta e quando termina.
- **Orçamento por categoria** com barra que fica vermelha quando passa do limite.
- Resumo do mês (ganhos, gastos, saldo e previsão), gastos por categoria e por cartão/conta, comparação com o mês anterior.
- Botão para **esconder os valores** quando alguém estiver olhando sua tela.

### 🤝 Dívidas
- **Eu devo** e **Me devem**, com pessoa, valor, descrição e vencimento.
- Pagamento parcial ("paguei uma parte") com histórico, e check para quitar.
- Ao quitar, opção de lançar o valor nas Finanças automaticamente.

### 🎁 Wishlist
- Lista do que você quer comprar, com preço, prioridade e link da loja, **dividida pelo mês** em que você pretende comprar (com o total de cada mês).
- Ao marcar como comprado, opção de lançar o gasto (inclusive parcelado).

### 📅 Tudo conectado
- Vencimentos de contas fixas e dívidas aparecem no calendário e no seu dia, com check direto de lá.
- A busca encontra compromissos, tarefas, metas, lançamentos, dívidas e itens da wishlist.

### 📓 Como foi o dia
- Anotações livres por dia (situações, ideias, lembretes) e registro de humor.

### 🎨 Personalização
- Categorias editáveis (nome e cor) — mostre ou oculte cada uma com um clique.
- Tema claro, escuro ou automático.
- Semana começando no domingo ou na segunda.
- Horário de início e fim da linha do tempo.

### 💾 Seus dados
- **Mesmo planner no celular e no PC**: entre com Google e os dados ficam sincronizados por uma pasta privada do seu Google Drive (opcional). Se você mexer nos dois aparelhos sem sincronizar, o planner **junta as alterações automaticamente**, item por item.
- **Instale como app**: ícone próprio na tela inicial, tela cheia e **funciona sem internet**. No celular, use o botão "📲 Instalar como app" (ou o menu do navegador → "Adicionar à tela inicial").
- Salvamento automático no navegador.
- **Backup** (.json) para guardar ou levar para outro computador/celular.
- **Exportar .ics** para importar no Google Agenda, Outlook ou Apple Calendário.
- Imprimir a visão atual.
- Importa backups da versão anterior (V5) automaticamente.

### ⌨️ Atalhos
| Tecla | Ação |
|---|---|
| `N` | Novo compromisso |
| `T` | Nova tarefa |
| `H` | Ir para hoje |
| `D` / `S` / `M` | Visão dia / semana / mês |
| `←` / `→` | Dia/semana/mês anterior ou próximo |
| `/` | Buscar |

Funciona no computador e no celular (menu lateral vira gaveta, com barra de navegação embaixo).

---

## Como usar

**Opção 1 — online:** abra o link do GitHub Pages.
**Opção 2 — offline:** baixe o arquivo `index.html` e abra no navegador (Chrome, Edge, Firefox ou Safari).

Na primeira vez, você pode começar do zero ou carregar **exemplos** para ver como tudo funciona (dá para apagar depois em *Configurações → Apagar todos os dados*).

## Privacidade

Os dados ficam no `localStorage` do navegador de quem está usando. **Opcionalmente**, a pessoa pode clicar em **Entrar com Google**: aí o planner também guarda os dados numa **pasta oculta e privada do Google Drive dela** (permissão `drive.appdata`), e o mesmo planner aparece no celular e no PC. O planner não enxerga nenhum outro arquivo do Drive, e o dono do site não tem acesso a nada. Sem login:

- Duas pessoas usando o mesmo link **não veem os dados uma da outra**.
- Limpar os dados do navegador apaga o planejamento — **faça backups** de vez em quando.
- Para usar em outro aparelho, salve um backup e restaure no outro.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `meu-planner`).
2. Envie os arquivos deste projeto:
   ```bash
   git init
   git add .
   git commit -m "Meu Planner"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/meu-planner.git
   git push -u origin main
   ```
3. No repositório, vá em **Settings → Pages**, em *Source* escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Em um ou dois minutos o planner estará em `https://SEU-USUARIO.github.io/meu-planner/`. É só mandar esse link para quem quiser usar.

### Sincronização no seu próprio site

Se você copiar este projeto para o seu GitHub, a sincronização com o Google Drive só funciona com um **ID do cliente OAuth seu**:

1. Em [console.cloud.google.com](https://console.cloud.google.com), crie um projeto e ative a **Google Drive API**.
2. Em **Google Auth Platform**, configure o app (público **Externo**), adicione os escopos `drive.appdata`, `openid`, `userinfo.email` e `userinfo.profile` e publique o app.
3. Em **Clientes**, crie um cliente **Aplicativo da Web** com a origem JavaScript do seu site (ex.: `https://seu-usuario.github.io`).
4. Cole o ID do cliente em `GOOGLE_CLIENT_ID`, no começo do `<script>` do `index.html`.

Sem ID, o planner funciona normalmente, só no navegador.

## Tecnologia

HTML, CSS e JavaScript puros — nenhuma biblioteca, nenhum build. Para modificar, edite o `index.html`.

O `sw.js` (service worker) deixa o app abrir sem internet. **A cada publicação, mude o valor de `VERSION` no `sw.js`**: assim quem estiver com o app aberto recebe o aviso "Nova versão disponível".

## Licença

[MIT](LICENSE)
