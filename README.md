# Microfrontend com Vite e Module Federation

Este projeto é uma aplicação de microfrontend utilizando Vite e Module Federation, composta por quatro módulos principais:

## Estrutura do Projeto

- **app-shell (porta 3000)**: Módulo principal com login, navegação e dashboard
- **cargo (porta 4174)**: Módulo de gerenciamento de cargos
- **desligamento (porta 4173)**: Módulo de processo de desligamento
- **classes (porta 4175)**: Módulo de gestão de classes salariais

## Implementações Principais

- Sistema de login com autenticação simulada
- Navegação lateral entre módulos
- Compartilhamento de estado usando Zustand
- Interface moderna com cores (#2c3e50, #34495e)
- Dashboard com métricas e cards
- Módulo de Classes com visualização de classes salariais em cards

## Configurações Técnicas

- Module Federation para compartilhamento de componentes
- Configuração de portas específicas para cada módulo
- Exposição do useGlobalStore pelo app-shell
- Importação do estado global pelos módulos filhos
- CORS configurado para comunicação entre módulos

## Módulo de Classes

- Criação do projeto usando Vite
- Configuração do Module Federation
- Implementação do componente ClassesApp
- Integração com o menu lateral
- Visualização de classes salariais (A, B, C, D) com níveis e salários base

## Credenciais e Acesso

- Login aceita qualquer email/senha não vazios
- Usuário identificado como "João Silva"
- Perfil configurado como administrador

## Como Executar

Para executar o projeto, siga os passos abaixo para cada módulo:

1. Instale as dependências:
```bash
cd [nome-do-modulo]
npm install
```

2. Execute o módulo em modo de desenvolvimento:
```bash
npm run dev
```

Ou para build e preview:
```bash
npm run rebuild-preview
```

## Portas dos Serviços

- App Shell: http://localhost:3000
- Módulo de Cargos: http://localhost:4174
- Módulo de Desligamento: http://localhost:4173
- Módulo de Classes: http://localhost:4175 