# Vortex Code Challenge 2025.2 - Interface do Sistema de Indicação (Frontend)

![Badge do Desafio](https://img.shields.io/badge/Desafio-Laborat%C3%B3rio%20Vortex-blue?style=for-the-badge)
![Badge de Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🤔 Justificativa das Escolhas](#-justificativa-das-escolhas)
- [⚙️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [🤝 Colaboração com IA](#-colaboração-com-ia)
- [👨‍💻 Autor](#-autor)

## 📖 Sobre o Projeto

Este repositório contém o **frontend** do Sistema de Indicação (Referral System), desenvolvido como parte do desafio técnico do processo seletivo de estágio para o **Laboratório Vortex**.

A aplicação é uma **SPA (Single Page Application)** construída com HTML, CSS e JavaScript puros. Ela fornece a interface para que os usuários se cadastrem, façam login e visualizem seu perfil, onde podem copiar seu link de indicação exclusivo e acompanhar sua pontuação.

## ✨ Funcionalidades

-   [x] **Página de Cadastro:** Formulário para criação de conta com nome, e-mail e senha.
-   [x] **Validação de Formulário:** Validação no front-end para formato de e-mail e força da senha (mínimo 8 caracteres, com letras e números).
-   [x] **Página de Login:** Para autenticação do usuário.
-   [x] **Página de Perfil:** Exibe nome, pontuação e link de indicação com botão para copiar.
-   [x] **SPA sem Recarregamento:** A navegação entre as telas é feita dinamicamente com JavaScript.
-   [x] **Responsividade:** A interface é totalmente responsiva, adaptando-se a desktops e dispositivos móveis.

## 🚀 Tecnologias Utilizadas

| Módulo     | Tecnologias                                                                                                                                                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) |

## 🤔 Justificativa das Escolhas

A decisão de utilizar **HTML, CSS e JavaScript puros** foi uma resposta direta ao desafio proposto, que proibia o uso de frameworks de UI/CSS como Bootstrap ou Tailwind. Dessa forma, eu pude demonstrar minhas competências como a estilização da interface por CSS puro, a partir da criação de componentes `cards`, aplicação da responsividade para dispositivos móveis usando `grid` e `flexbox` e a construção de uma Single Page Application pela manipulação do DOM, com javascript modular.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a interface em seu ambiente local.

### Pré-requisitos

-   Um navegador web moderno (Chrome, Firefox, etc.).
-   O [backend do projeto](https://github.com/vortex-code-challenge-2025-2/referral-system-backend) deve estar rodando para que as funcionalidades atuem.
-   Uma extensão de servidor local para VS Code, como o **Live Server**.

### Execução

1.  Clone este repositório:
    ```bash
    git clone https://github.com/vortex-code-challenge-2025-2/referral-system-frontend.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd referral-system-frontend
    ```
3.  Abra o projeto no Visual Studio Code.
4.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5.  A aplicação será aberta no seu navegador padrão.

## 🤝 Colaboração com IA

Conforme incentivado pelo edital, utilizei o **Gemini 2.5 pro(Google)** como uma ferramenta de colaboração e mentoria ao longo do desenvolvimento deste projeto. A interação ocorreu nas seguintes áreas:

-   **Code Review:** revisão do código constante, identificando bugs (como a inconsistência de nomes de campos e a validação de formulários) e sugerindo as melhores práticas para corrigi-los.
-   **Interface:** discutimos a respeito da paleta de cores que a aplicação iria ser construída. A partir disso, determinei os tons pensados como variáveis globais no css.
-   **Construção do `README.md`:** A área em questão é autoexplicativa. O modelo me auxiliou na construção de um README.md harmônico e ao mesmo tempo bem explicativo.

## 👨‍💻 Autor

Desenvolvido por **João Pedro Lima**.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/)
