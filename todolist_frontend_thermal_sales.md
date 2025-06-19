# ✅ Thermal Sales - Front-End ToDo List

> 📌 Framework: React + Tailwind CSS  
> 🧠 Propósito: Criar interface web para visualizar e interagir com o sistema Thermal Sales, incluindo análise de zonas de calor (heatmap), dashboards de métricas, login, e gerenciamento de sessões.

---

## 🚧 Estrutura Inicial do Projeto

- [ ] Configurar ambiente React com Tailwind
- [ ] Criar estrutura de pastas padrão: `/pages`, `/components`, `/services`, `/hooks`, `/assets`, `/contexts`

---

## 🗺️ Roteamento e Navegação

- [ ] Instalar e configurar React Router
- [ ] Criar rotas públicas e privadas
- [ ] Criar middleware de autenticação de rota
- [ ] Implementar estrutura de layout principal com Header, Sidebar e conteúdo dinâmico

---

## 🔐 Tela de Login

- [ ] Criar página de login com campos de e-mail e senha
- [ ] Implementar requisição de login via API (`/api/login`)
- [ ] Armazenar token JWT localmente (ex: localStorage)
- [ ] Redirecionar para `/dashboard` após login bem-sucedido
- [ ] Criar tratamento de erro (login inválido, expirado, etc.)

---

## 📊 Dashboard Principal

- [ ] Criar página `/dashboard`
- [ ] Exibir KPIs principais:
  - [ ] Total de visitantes
  - [ ] Tempo médio por zona
  - [ ] Taxa de conversão por zona
- [ ] Criar cards de estatísticas usando Tailwind
- [ ] Adicionar gráficos com biblioteca (ex: Chart.js, Recharts)

---

## 🔥 Heatmap

- [ ] Criar página `/heatmap`
- [ ] Implementar componente de mapa da loja
- [ ] Renderizar zonas com gradientes coloridos (quente → frio)
- [ ] Capturar dados da API (`/api/heatmap`)
- [ ] Permitir filtragem por:
  - [ ] Período (data/hora)
  - [ ] Região/zona
- [ ] Suporte a múltiplos layouts de loja (ex: loja A, loja B)
- [ ] Adicionar tooltip ao passar o mouse nas zonas

---

## 🕵️ Histórico e Playback

- [ ] Criar página `/replay`
- [ ] Adicionar controle de timeline para reprodução de movimento
- [ ] Mostrar trajetória de clientes ao longo do tempo
- [ ] Suporte a pausa, avanço rápido, voltar

---

## 📂 Gestão de Layouts da Loja

- [ ] Criar página `/layouts`
- [ ] Listar todos os layouts cadastrados
- [ ] Permitir upload de novo layout (imagem/planta da loja)
- [ ] Associar zonas com coordenadas (com ferramenta de marcação)
- [ ] Permitir edição de zonas e nomes

---

## 👤 Gestão de Usuários (Admin)

- [ ] Criar página `/usuarios`
- [ ] Listar usuários cadastrados
- [ ] Criar, editar e remover usuários
- [ ] Definir tipo de usuário (admin, comum)
- [ ] Exibir status (ativo/inativo)

---

## ⚙️ Configurações

- [ ] Criar página `/configuracoes`
- [ ] Troca de senha
- [ ] Preferências de idioma (português/inglês)
- [ ] Tema escuro/claro
- [ ] WebSocket toggle

---

## 🛠️ Integração com Backend

- [ ] Criar serviço `/services/api.js` usando Axios
- [ ] Criar hooks personalizados para consumo de endpoints
- [ ] Validar token em cada requisição
- [ ] Atualizar token expirado automaticamente (refresh)

---

## 🧪 Testes

- [ ] Instalar e configurar Jest + React Testing Library
- [ ] Criar testes unitários para componentes principais
- [ ] Criar testes de integração (mock da API)

---

## 🧼 UI/UX e Acessibilidade

- [ ] Adotar design responsivo
- [ ] Navegação por teclado (tabindex)
- [ ] Contraste de cores acessível
- [ ] Carregamento com `skeletons` ou spinners
- [ ] Feedback visual para ações (toast de sucesso/erro)

---

## 🧩 Extras e Futuro

- [ ] Internacionalização com i18n
- [ ] PWA: tornar app instalável
- [ ] Exportação de relatórios (PDF/CSV)
- [ ] Integração com sistema de alarme em tempo real

---

## 📌 Observações

- Todas requisições devem conter token JWT no cabeçalho
- Usar loading global durante chamadas assíncronas longas
- Priorizar modularização e reuso de componentes

