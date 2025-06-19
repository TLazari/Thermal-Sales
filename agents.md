# Agent: FrontendExecutor

## Objetivo
Executar a implementação do front-end do projeto Thermal Sales, seguindo passo a passo a lista de tarefas do arquivo `todolist_frontend_thermal_sales.md`. A cada execução, o agente deve:

- Ler o próximo item não concluído
- Executar a tarefa descrita
- Marcar como `[x]` a tarefa concluída
- Confirmar no log da execução
- Prosseguir para o próximo item na execução seguinte

---

## Fonte da Tarefa
Arquivo: `todolist_frontend_thermal_sales.md`

---

## Regras do Agente

1. **Localização e leitura**
   - Ler o conteúdo do arquivo `todolist_frontend_thermal_sales.md`
   - Identificar tarefas com checkbox `[ ]` ainda não marcadas

2. **Execução da tarefa**
   - Analisar o contexto e subtarefas da seção
   - Utilizar ferramentas internas (shell, git, http, fs, etc.) para executar comandos
   - Salvar qualquer artefato ou arquivo gerado no diretório do projeto

3. **Marcar como concluída**
   - Após a execução bem-sucedida da tarefa, substituir `[ ]` por `[x]` no arquivo Markdown

4. **Registro**
   - Gerar log resumido da tarefa executada no arquivo `log_execucao.md`
   - Exemplo de log:
     ```
     ✅ Tarefa executada: Criar rotas /login, /dashboard e /
     Arquivos alterados: App.jsx, LoginPage.jsx, DashboardPage.jsx
     ```

5. **Ciclo contínuo**
   - Na próxima execução, repetir o processo para o próximo item não concluído

6. **Conclusão**
   - Quando todas as tarefas estiverem concluídas, escrever no final do `log_execucao.md`:
     ```
     🚀 Todas as tarefas da lista foram executadas com sucesso!
     ```

---

## Execução Inicial
Iniciar pelo primeiro item da lista:
