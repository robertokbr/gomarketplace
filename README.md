<h1 align="center">
 GoMarketPlace
</h1>

<h4 align="center">
A React-native marketplace made with react-native and Context-api
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/robertokbr/GoMarketPlace.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/robertokbr/GoMarketPlace.svg">

  <a href="https://www.codacy.com/app/robertokbr/GoMarketPlace?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=robertokbr/GoMarketPlace&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/robertokbr/GoMarketPlace.svg">
  <a href="https://github.com/robertokbr/GoMarketPlace/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/robertokbr/GoMarketPlace.svg">
  </a>

  <a href="https://github.com/robertokbr/GoMarketPlace/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/robertokbr/GoMarketPlace.svg">
  </a>
</p>

<p align="center">
 <img src="https://github.com/robertokbr/GoMarketPlace/blob/master/.Github/Carrinho.png" width="300px"/> <img src="https://github.com/robertokbr/GoMarketPlace/blob/master/.Github/Listagem.png" width="300px"/>
</p>


# 🚧 In progress

- [React-Native with Typescript](https://reactjs.org) - A JavaScript library for building user interfaces
- [react-router-dom]()
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs
- [Context-API]()
- [Styled-components]()
- [Eslint]()
- [Prettier]()
- [EditorConfig]()

## 🎈 Project Style

* EditorConfig
* Eslint -config-airbnb
* Prettier

## Application requires

- should be able to list the products: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua tela Dashboard, todos os produtos que são retornadas do Fake API. Essa listagem deve exibir o title e o price que deve ser formatado utilizando a função Intl.

- should be able to add a product to the cart: Para que esse teste passe, você deve permitir que seja possível adicionar produtos da sua Dashboard ao carrinho, utilizando o contexto de cart disponibilizado.

- should be able to list the products on the cart: Para que esse teste passe, você deve permitir que seja possível listar os produtos que estão salvos no contexto do seu carrinho na página Cart, nessa página exiba o nome do produto e o subtotal total de cada produto (price * quantity).

- should be able to calculate the cart total: Para que esse teste passe, tanto na página Dashboard, tanto na página Cart você deve exibir o valor total de todos os itens que estão no seu carrinho.


- should be able to show the total quantity of itens in the cart: Para que esse teste passe, tanto na página Dashboard, tanto na página Cart você deve exibir o número total de itens que estão no seu carrinho.

- should be able to increment product quantity on the cart: Para que esse teste passe, você deve permitir que seja possível incrementar a quantidade de um produto do seu carrinho, utilizando o contexto de cart disponibilizado.

- should be able to decrement product quantity on the cart: Para que esse teste passe, você deve permitir que seja possível decrementar a quantidade de um produto do seu carrinho, utilizando o contexto de cart disponibilizado.

- should be able to navigate to the cart: Para que esse teste passe, no seu componente FloatingCart na Dashboard, você deve permitir que ao clicar no botão de carrinho com o testID de navigate-to-cart-button, o usuário seja redirecionado para a página Cart.

- should be able to add products to the cart: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função addToCart adicione um novo item ao carrinho.

- should be able to increment quantity: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função increment incremente em 1 unidade a quantidade de um item que está armazenado no contexto.

- should be able to decrement quantity: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função decrement decremente em 1 unidade a quantidade de um item que está armazenado no contexto.

- should store products in AsyncStorage while adding, incrementing and decrementing: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho você deve permitir que todas as atualizações que você fizer no carrinho, sejam salvas no AsyncStorage. Por exemplo, ao adicionar um item ao carrinho, adicione-o também no AsyncStorage. Lembre de também atualizar o valor do AsyncStorage quando você incrementar ou decrementar a quantidade de um item.

- should load products from AsyncStorage: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que todos os produtos que foram adicionados sejam buscados do AsyncStorage.

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/robertokbr/GoMarketPlace

# Go into the repository
$ cd GoMarketPlace

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```
---


Roberto Junior :wave: [Join me on Linkedin!](https://www.linkedin.com/in/robertojrcdc/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
