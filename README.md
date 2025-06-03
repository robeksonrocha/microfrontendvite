# Microfrontend com Vite e Module Federation

Este projeto é uma implementação de microfrontend utilizando Vite e Module Federation, consistindo em três módulos:

- **App Shell**: Aplicação principal que gerencia a navegação e o estado global
- **Cargo**: Módulo para gerenciamento de cargos
- **Desligamento**: Módulo para processo de desligamento

## Tecnologias Utilizadas

- React
- Vite
- Module Federation
- Zustand (Gerenciamento de Estado)

## Estrutura do Projeto

```
microfrontend-vite/
├── app-shell/         # Aplicação principal
├── cargo/            # Módulo de cargos
└── desligamento/     # Módulo de desligamento
```

## Portas Utilizadas

- App Shell: 3000
- Cargo: 4174
- Desligamento: 4173

## Como Executar

1. Instale as dependências em cada módulo:

```bash
cd app-shell && npm install
cd ../cargo && npm install
cd ../desligamento && npm install
```

2. Execute o build e inicie cada módulo:

```bash
# Em terminais separados
cd app-shell && npm run rebuild-preview
cd cargo && npm run rebuild-preview
cd desligamento && npm run rebuild-preview
```

3. Acesse a aplicação em `http://localhost:3000`

## Desenvolvimento

Para desenvolvimento, você pode usar o modo de desenvolvimento do Vite:

```bash
# Em terminais separados
cd app-shell && npm run dev
cd cargo && npm run dev
cd desligamento && npm run dev
```

## Funcionalidades

- Navegação entre módulos via sidebar
- Compartilhamento de estado usando Zustand
- Interface moderna com transições suaves
- Feedback visual do módulo ativo 