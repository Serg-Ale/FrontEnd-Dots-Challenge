# Teste Técnico - Desenvolvedor Front-end Jr: Aplicação de Inserção de Círculos

Este repositório contém a minha solução para um teste técnico de Desenvolvedor Front-end Jr. O teste tem como objetivo demonstrar minhas habilidades com o desenvolvimento de uma aplicação web utilizando **React**, implementando funcionalidades de interação com cliques e controle de histórico.

## Desafio

O desafio consiste em criar uma aplicação em **React** onde o usuário possa clicar na tela para adicionar círculos, e contar com as funcionalidades de **Desfazer (Undo)** e **Refazer (Redo)** para controlar a inserção dos círculos.

## Funcionalidades

1. **Inserção de Círculos**:
   - Ao clicar em qualquer área da tela, um círculo é inserido na posição exata do clique.
2. **Desfazer (Undo)**:
   - Um botão de "Desfazer" que remove o último círculo adicionado.
   - O botão deve ficar desativado caso não haja círculos na tela.
3. **Refazer (Redo)**:
   - Um botão de "Refazer" que restaura o último círculo removido pelo botão "Desfazer".
   - O botão deve ficar desativado caso não haja ações a refazer.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta para bundling e desenvolvimento.
- **Hooks do React**: Utilizados para gerenciamento de estado.

## Instruções para Rodar o Projeto

> Certifique-se de ter o **Node.js** e **npm** instalados em sua máquina.

1. Clone o repositório:

   ```bash
   git clone https://github.com/Serg-Ale/FrontEnd-Dots-Challenge.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd FrontEnd-Dots-Challenge
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação em seu navegador no endereço: [http://localhost:5173](http://localhost:5173)

## Como Contribuir

Se desejar melhorar este projeto ou corrigir algo, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma branch para sua feature/correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adicionei uma nova feature'
   ```
4. Envie para o seu repositório:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request** no repositório original.

## Autor

Feito com ❤️ por [Sérgio Alexandre](https://github.com/Serg-Ale). Entre em contato!
