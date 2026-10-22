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

### 📓 Como foi o dia
- Anotações livres por dia (situações, ideias, lembretes) e registro de humor.

### 🎨 Personalização
- Categorias editáveis (nome e cor) — mostre ou oculte cada uma com um clique.
- Tema claro, escuro ou automático.
- Semana começando no domingo ou na segunda.
- Horário de início e fim da linha do tempo.

### 💾 Seus dados
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

Nada é enviado para nenhum servidor. Os dados ficam no `localStorage` do navegador de quem está usando. Por isso:

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

## Tecnologia

HTML, CSS e JavaScript puros — nenhuma biblioteca, nenhum build. Para modificar, edite o `index.html`.

## Licença

[MIT](LICENSE)
