# Sistema de Cadastro de Inovação Digital 

Sistema foi feita com as seguintes tecnologia:

- Front End : React, Semantic UI React, Javascript
- Back End: Mock Api, Javascript, CRUD/Redux, Axios
  

## Descrição

No sistema é possivel realizar cadastro para pontos de coletas e pontos de parametros, leitura e filtros de lista de cadastro e atualização de dados cadastrados.


## Requisitos

- Visual Code
- Terminal
- Node e npm
- GIT
- Conta no [mockApi](https://mockapi.io/)
- Criar uma api fake, segue um exemplo nesse [tutorial](https://shre.ink/tutorialApi)

  
## Instalação

- Escolhe o diretorio de uma pasta no seu computador

- Baixar o projeto no github 

~~~~javascript
git clone https://github.com/biancac-andrade/biancac-react-system-register.git
~~~~


## Execução

- Diretório do projeto clonado
- Baixa as dependencias do projeto

~~~~javascript
npm install
~~~~

- Incluir suas credenciais do URL e nome da rota no mockApi no arquivo de todas as chamada de axios existente de cada tela necessária, como exemplo abaixo: 
~~~~javascript
axios
      .post(`https://XXXXXXX.mockapi.io/XXXXX`, {
        firstName,
        nameCoordinateX,
        nameCoordinateY,
        checkbox,
      })
~~~~

- executa o projeto 
  ~~~javascript
  npm start
  ~~~



  ### Observação:  Ao navegar no menu do sistema, aperta enter dentro da barra de endereço ou atualizar a página para rota carregar.



## Estruturas de pasta

```shell

├── src
│   ├── components
│   │   ├── create.js
        ├── createPArameter.js
        ├── critery.js
        ├── listAll.js
        ├── read.js
        ├── readParameter.js
        ├── updatejs
        ├── updateParameter.js  
        
│   ├── components
│   │  ├── NavBar.css
│      ├── NavBar.jsx
│      ├── SideBarData.js
├── App.css
├── App.js
├── index.css
├── index.js
├── reportWebVitals.js
├── .gitignore
├── package-lock.json 
└── package.json
└── README.md
```



### Melhorias

- Testes unitários e integração
- Gravar o valor corretamente da data da coleta
- Listar uma tabela unificando em cada ponto em seus parametros cadastrados
- fluidez de navegação

#### Dias Trabalhados
- Aproxidamente 3 dias



