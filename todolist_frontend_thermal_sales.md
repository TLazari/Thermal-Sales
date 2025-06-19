# 📋 To-Do List de Implementação Front-end — *Thermal Sales*

## 🗂️ Estrutura atual

A pasta `frontend/` contém apenas um esqueleto do projeto com **React + Tailwind**, composto por uma única página com `App.jsx` exibindo um título simples. Não há integração com o backend no momento.

---

## ✅ Etapas de Implementação Detalhadas

### 1. Implementar estrutura de páginas e rotas

📌 **Objetivo:** Criar a navegação entre as telas principais da aplicação.

-**Tarefas:**
- [x] Instalar `react-router-dom`
- [x] Criar rotas para:
  - `/login`
  - `/dashboard`
  - `/` (página inicial ou redirecionamento)
- [x] Criar esboço das páginas:
  - `LoginPage.jsx`
  - `DashboardPage.jsx`
  - `NotFound.jsx`
- [x] Implementar `Router` principal em `App.jsx`

🛠️ **Iniciar tarefa:** `Adicionar roteamento e layout básico`

---

### 2. Criar layout padrão e componentes base

📌 **Objetivo:** Estabelecer uma estrutura visual reutilizável.

**Tarefas:**
- [x] Criar componente `Layout.jsx` com:
  - Header com navegação
  - Área central de conteúdo
  - Rodapé (se necessário)
- [x] Criar componentes reutilizáveis:
  - `Navbar.jsx`
  - `Sidebar.jsx` (opcional)
  - `Card.jsx`, `Button.jsx`, etc.

🛠️ **Iniciar tarefa:** `Adicionar roteamento e layout básico`

---

### 3. Integrar com o backend (FastAPI)

📌 **Objetivo:** Estabelecer comunicação entre front e back.

**Tarefas:**
- [ ] Criar arquivo `api.js` ou `services/api.js`
- [ ] Configurar `axios` ou `fetch`
- [ ] Criar chamada GET para `/api/health` e exibir resposta no dashboard
- [ ] Preparar base para outras chamadas futuras

🛠️ **Iniciar tarefa:** `Conectar front-end ao backend`

---

### 4. Aplicar estilos com Tailwind CSS

📌 **Objetivo:** Melhorar a estética e responsividade.

**Tarefas:**
- [ ] Garantir configuração correta do Tailwind
- [ ] Criar classes utilitárias para responsividade (mobile-first)
- [ ] Criar layout base utilizando grid/flex

🛠️ **Iniciar tarefa:** `Protótipo de visualização de heatmap`

---

### 5. Iniciar protótipo do Heatmap

📌 **Objetivo:** Iniciar visualização dos dados térmicos.

**Tarefas:**
- [ ] Pesquisar e escolher biblioteca:
  - `heatmap.js`
  - `leaflet.js` + plugins
- [ ] Integrar biblioteca com React (ex: via useEffect)
- [ ] Criar componente `HeatmapViewer.jsx`
- [ ] Carregar dados simulados para testes

🛠️ **Iniciar tarefa:** `Protótipo de visualização de heatmap`

---

### 6. Configurar testes e integração contínua (CI)

📌 **Objetivo:** Garantir qualidade e confiabilidade.

**Tarefas:**
- [ ] Instalar `Jest` e/ou `React Testing Library`
- [ ] Criar testes para:
  - Componentes (ex: botão, layout)
  - Rotas
  - Requisições à API (mockadas)
- [ ] Criar workflow em `.github/workflows/frontend-tests.yml`
- [ ] Executar testes em cada `push` ou `pull request`

🛠️ **Iniciar tarefa:** `Incluir testes para o front-end`

---

## 🔄 Próximos passos

Com essas tarefas concluídas, o front-end estará preparado para evoluir rumo a um **dashboard funcional de análise de calor**, facilitando a integração com o backend FastAPI e permitindo análise visual eficiente de zonas quentes e frias da loja.
