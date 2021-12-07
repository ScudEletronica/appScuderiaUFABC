# App Scuderia UFABC

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Instalação do aplicativo](#Instalação-do-aplicativo)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Edição](#edi%C3%A7%C3%A3o)
- [Firebase](#firebase) 
  - [Comunicação](#comunica%C3%A7%C3%A3o)
  - [Estrutura dos dados](#estrutura-dos-dados)
- [Funções do aplicativo](#fun%C3%A7%C3%B5es-do-aplicativo)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa o desenvolvimento de um aplicativo android que será utilizado pelos membros da Scuderia UFABC, o qual conta com funções como o estado do laboratório e da oficina, dados da telemetria do carro e informações sobre a equipe.

### Feito Com

Abaixo segue o que foi utilizado na criação deste aplicativo:
- [Google Firebase](https://firebase.google.com/) - O firebase é um banco de dados gratuito que permite o armazenamentos de dados do aplicativo para a comunicação do framework com o usuário; 
- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native.
<!-- - [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS; -->
<!-- - [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes; -->

<!-- GETTING STARTED -->

## Começando

### Instalação do aplicativo

Web: https://play.google.com/apps/testing/com.scuderia.ufabc 

PlayStore: https://play.google.com/store/apps/details?id=com.scuderia.ufabc


### Pré-requisitos

Antes de seguirmos para as configurações e uso do código, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://react-native.rocketseat.dev/)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```
appScuderia
├── functions/
│   └── index.js
├── src/
│   ├── assets/
│   ├── components/
│   │   └── component/
│   │       ├── index.js
│   │       └── styles.js
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── pages/
│   │   └── Page/
│   │       ├── index.js
│   │       └── styles.js
│   ├── routes/
│   │   ├── AppStack.js
│   │   └── Drawer.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── themes/
│   │   │    ├── dark.js
│   │   │    └── light.js
│   │   └── global.js
│   ├── utils/
│   │   ├── get.js
│   │   └── store.js
│   ├── global.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).


---

### Edição

Nesta seção haverão instruções caso você queira editar o aplicativo, explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **functions** - Diretório de configuração das funções do firebase.
  - **index.js** - Arquivo que contém a logica das funções.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação;
  
  - **components** -  Diretório com os componentes, partes de código independentes e reutilizáveis.
    
    - **index.js** - Arquivo com toda a lógica da componente;
    
    - **styles.js** - Arquivo com todos os estilos do componente.

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;
  
  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Page** - Diretório de exemplo de uma página cujo nome é **Page**, por padrão foi adotado usar sempre como nome do diretório o nome da página, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;
      
      - **styles.js** - Arquivo com todos os estilos da página.

  - **routes** - Diretório com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblioteca React Navigation;
      
      - **AppStack.js** - Arquivo de configuração de rotas no estilo pilha.
      
      - **Drawer.js** - Arquivo de configuração da barra lateral.

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **styles** - Diretório com estilos usados por várias páginas, como por exemplo, diferentes temas.
      
      - **themes** - Diretório com configurações dos temas, como cores e imagens. 
          
          - **dark.js** - Arquivo com configurações do tema escuro.
          
          - **light.js** - Arquivo com configurações do tema claro.
      
      - **global.js** - Arquivo com estilos usados em várias páginas.
  
  - **utils** - Diretório com funções muito usadas.
    
    - **get.js** - Arquivo que contem funções que resgatam dados da memoria do aparelho.

    - **store.js** - Arquivo que contem funções que salvam dados na memoria do aparelho.
  
  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

## Firebase

### Comunicação

A comunicação com a firebase é feita através da biblioteca React Native Firebase. Para entender o funcionamento acesse o link: 
https://rnfirebase.io/

---

### Estrutura dos dados

```
appscuderia
├── Keys
│   ├── labBlue
│   ├── labRed
│   └── workshop
├── Messages
│   └── message
│       ├── content
│       ├── date
│       ├── id
│       └── title
├── Meters
│   └── meter
│       ├── aprox
│       ├── max
│       ├── min
│       ├── name
│       ├── page
│       ├── tag
│       └── value
├── NewUsers
│   └── newUser
│       ├── coordinator
│       ├── email
│       ├── field
│       ├── id
│       ├── name
│       ├── ra
│       └── user
├── Profile
│   └── user
│       ├── coordinator
│       ├── field
│       ├── id
│       ├── name
│       ├── ra
│       └── user
└── Status
    ├── Lab
    ├── Workshop
    ├── labRequest
    └── workshopRequest

```

- **Keys** - Contém os dados de localização das chaves. 
  
  - **labBlue** - Chave azul do laboratório.
  
  - **labRed** - Chave vermelha do laboratório.
  
  - **workshop** - Chave da oficina.

- **Messages** - Contém os recados do app.

  - **message** - Exemplo de mensagem, geralmente será usado um valor aleatório para identificação.

    - **content** - Conteúdo da mensagem.
    
    - **date** - Data que a mensagem foi criada.
    
    - **id** - Valor aleatório que identifica a mensagem.
    
    - **content** - Titulo da mensagem.

- **Meters** - Sensores e medidores do carro.

  - **meter** - Exemplo de medidor. Será identificado por uma abreviação de seu nome.

    - **aprox** - Quantidade de casas decimais minimas para aproximação.
   
    - **max** - Valor máximo desejado, acima desse valor é necessário atenção.
   
    - **min** - Valor minímo desejado, abaixo desse valor é necessário atenção.

    - **name** - Nome completo do medidor.

    - **page** - Local onde será apresentado.

    - **tag** - Identificador do medidor, normalmente uma abreviação de seu nome.
   
    - **value** - Valor do medidor.

- **NewUsers** - Novos usuários esperando por avaliação dos coordenadores para poderem acessar o app.
  
  - **newUser** - Exemplo de novo usuário, será identificado por um valor aleatório.

    - **coordinator** - Se é ou não coordenador.

    - **email** - Email do novo usuário.

    - **field** - Área de atuação na equipe.

    - **id** - Identificador, normalmente um valor 
    aleatório.

    - **name** - Nome do novo usuário.

    - **ra** - RA do novo usuário.

    - **user** - Nome de usuário.

- **Profile** - Perfis de Usuários do app.
  
  - **user** - Exemplo de perfil de usuário, será identificado pelo nome de usuário.

    - **coordinator** - Se é ou não coordenador.

    - **field** - Área de atuação na equipe.

    - **id** - Identificador, normalmente um valor 
    aleatório.

    - **name** - Nome do usuário.

    - **ra** - RA do usuário.

    - **user** - Nome de usuário.

- **Status** - Situação da oficina e laboratório.

  - **Lab** - Situação do laboratório, aberto ou fechado.
  
  - **Oficina** - Situação da oficina, aberta ou fechada.
  
  - **LabRequest** - Indica se foi solicitado a abertura do laboratório.
  
  - **LabRequest** - Indica se foi solicitado a abertura da oficina.

## Funções do aplicativo

* **Sobre a Scuderia e redes sociais**: Dados da Scuderia assim como links das redes sociais da equipe.
    * Sobre a Scuderia: `scr/pages/About` 
* **Recados**: Função para o gerenciamento da comunicação entre os coordenadores e os membros pelo app a partir de notificações
    * Visualização de uma mensagem específica: `scr/pages/Message`
    * Visualização de todas as mensagens: `scr/pages/Messages` e `src/pages/Main` 
    * Criação de uma nova mensagem: `scr/pages/NewMessage` 
* **Status da Oficina e Laboratório** : Função que retorna ao usuário o status da oficina e do laboratório da Scuderia. O status pode ser alterado pelo app pelos coordenadores.
    * Status da oficina para os usuários: `src/pages/Main` 
    * Alteração do status ou solicitação de mudança: `src/pages/LabAndWorkshop`
* **Localização das chaves da oficina e laboratório**: Sistema para localizar com que membro se encontra as chaves do laboratório e da oficina.
    * Status das chaves para os usuários: `src/pages/Main` 
    * Alteração do status das chaves: `src/pages/LabAndWorkshop`
* **Telemetria**: Visualização em tempo real dos parâmetros recebidos pela telemetria do carro.
    * Status da telemetria: `src/pages/Telemetry` 
* **Requisições de compra**: Sistema de requisição de compra de material interno para a equipe. Todos os membros podem realizar requisições e os coordenadores as revisam a requisição, podendo aprová-la ou não.
    * Requisições do usuário: `scr/pages/MyRequirements`
    * Nova Requisição de compra: `scr/pages/NewRequirement`
    * Revisão de requisição: `scr/pages/Review`
* **Notificações**: Avisos para os membros quando a oficina e lab abrem e fecham, quando há um novo recado. Além de avisos de quando há uma nova requisição ou uma solicitação de abertura do lab ou oficina:
    * Apresentação de notificações: `src/index.js`
    * Configurar notifications desejadas: `scr/pages/Notifications`
    * Configurar requisições desejadas de lab e oficina: `scr/pages/LabandWorkshop`
    * Funcionamento das Notificações na Firebase: `functions/index.js`
* **Configurações**: Configuração que o usuário pode fazer pelo aplicativo.
    * Sistema para configurar as notificações: `scr/pages/Notification`
    * Sistema de configuração do perfil do usuário: `scr/pages/Profile`
    * Sistema de login: `scr/pages/Login`
    * Sistema de cadastro de novos usuários: `scr/pages/NewUsers`
* **Links internos e senhas**: Página contendo todos os links internos da equipe.
    * Lista de links: `scr/pages/Information`