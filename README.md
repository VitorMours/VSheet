# VSheets

Adicionar imagem de banner
<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img
      src="https://go-skill-icons.vercel.app/api/icons?i=dbeaver,docker,git,mysql,sequelize,vitest,express,javascript,react,daisyui,tailwindcss&theme=dark"
    />
  </a>
</p>

# Motivação
Por muito tempo, fui apaixonado por música, e como todo músico que busca se aperfeiçoar, e estudar obras mais clássicas e estabelecidas, vê a necessidade 
de gerenciar diversas partituras e isso é dificultoso principalmente pela grande quantidade de compositores, obras, quantidade de folhas por peça, e entre outros fatores.

Com isso, vi a possibilidade de criar um sistema web, que possui a capacidade de armazenar diversas partituras de forma organizada, eficiente, e com grande possibilidade 
de modificações presentes dentro da interface, facilitando o estudo dessas obras por meio de ferramenta.

# Tecnologias e Desenvolvimento

Dentro das tecnologias utilizadas, temos que foi usado o ***nodejs*** como runtime do back-end devido à sua facilidade 
de ser integrado com o front-end, por utilizar a mesma linguagem, que é javascript. Como ferramentas, decidi descolher 
algumas que são conhecidas dentro do mercado, e que são usadas em diversos projetos, como por exemplo:

- ***Sequelize:*** ORM para bancos de dados relacionais
- ***Git:*** Versionamento de Código
- ***Vitest:*** Framework de teste, usado desde testes unitários até testes de integração dentro de sistemas
- ***Express:*** Framework javascript muito conhecido dentro do backend
- ***React:*** Lib de desenvolvimento front-end criada pela facebook (atual Meta) 
- ***DaisyUI:*** Biblioteca de componentes que seguem o padrão de estilo usando o TailwindCSS por baixo
- ***TailwindCSS:*** Framework de Estilização que usa classes definidas com estilos pré-definidos
- ***Docker:*** Uso de containers na aplicação criando um ambiente estável e persistente em relação às configurações e comportamento 

Em relação às tecnologias, é visto como o uso do docker foi único e exclusivamente focado no fato de que será necessário o uso do mesmo para 
virtualizar as dependências e demandas técnicas de dentro do sistema, tendo em vista que o uso de dois bancos de dados diferentes, sendo eles
o SQLite e o MySQL, são usados pelo fator de que o primeiro não é necessitade de um servidor e de configurações persistentes ativas para que 
o mesmo possa ser utilizado dentro de ambiente de desenvolvimento. Com isso, mantém-se o uso do MySQL apenas em ambiente de produção, sendo 
possível a sua configuração por meio de variáveis de ambiente.





