# Vortex Code Challenge 2025.2 - Interface do Sistema de Indicação (Frontend)

![Badge de Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)

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

-   [ ] **Página de Cadastro:** Formulário para criação de conta.
-   [ ] **Validação de Formulário:** Validação em tempo real para e-mail e senha (mínimo 8 caracteres, com letras e números).
-   [ ] **Página de Login:** Para autenticação do usuário.
-   [ ] **Página de Perfil:** Exibe nome, pontuação e link de indicação com botão para copiar.
-   [ ] **SPA sem Recarregamento:** A navegação entre as telas é feita dinamicamente com JavaScript, sem recarregar a página.
-   [ ] **Responsividade:** A interface é totalmente responsiva, adaptando-se a desktops e dispositivos móveis.

## 🚀 Tecnologias Utilizadas

| Módulo     | Tecnologias                                                                                                                                                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) |                                                                                                                                   |

## 🤔 Justificativa das Escolhas

A seleção de cada tecnologia foi pensada para atender aos requisitos do desafio e demonstrar conhecimento em ferramentas modernas e eficientes.

### Frontend (HTML, CSS e JavaScript Puros)

A decisão de utilizar a "Santíssima Trindade" do desenvolvimento web sem frameworks foi uma resposta direta ao desafio proposto, que proíbe o uso de frameworks de CSS. Esta abordagem me permitiu focar nos fundamentos do desenvolvimento front-end, demonstrando proficiência em manipulação do DOM, estilização com CSS puro (incluindo a criação de uma interface responsiva "na mão") e a construção de uma lógica de SPA (Single Page Application) com JavaScript vanilla.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a interface em seu ambiente local.

### Pré-requisitos

-   Um navegador web moderno (Chrome, Firefox, etc.).
-   O [backend do projeto]([URL_DO_SEU_REPOSITORIO_BACKEND]) deve estar rodando para que as funcionalidades de cadastro e login funcionem.

### Execução

```bash
# 1. Clone este repositório
git clone [URL_DO_SEU_REPOSITORIO_FRONTEND]

# 2. Navegue até o diretório
cd [NOME_DA_PASTA_DO_PROJETO]
```

**Para visualizar a página, você pode:**

1.  **Usar a extensão "Live Server"** no Visual Studio Code (recomendado).
2.  Abra o arquivo `index.html` em seu navegador. A aplicação estará disponível em `http://localhost:8000` (ou outra porta indicada pelo servidor).

## 🤝 Colaboração com IA

Conforme incentivado pelo edital, utilizei ferramentas de Inteligência Artificial como um parceiro de desenvolvimento. A principal IA utilizada foi o **Gemini (Google)**, que atuou como "mentor de código" e "consultor de UX". A colaboração focou em: estruturar a lógica da SPA com JavaScript puro, debater ideias de design minimalista e responsivo, criar templates (como este README) e otimizar a comunicação entre o frontend e a API.

## 👨‍💻 Autor

Desenvolvido por **João Pedro Lima**.
