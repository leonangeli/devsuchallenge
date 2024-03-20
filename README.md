<h1 align="center" id="title">Saucedemo UI & Petstore Swagger API Cypress tests</h1>

<p id="description">This repository contains automated tests for Saucedemo UI and Petstore Swagger sample server implementing Cypress.</p>

<h2>🧐 Features</h2>

Here're some of the project's best features:

- Faker library to automate random data in order to replicate real-like user interaction.
- Mochawesome reporter for enhenced html reports.
- Prettier opinionated code formatter.
- GitHub actions.
- Best practices implementation.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/leonangeli/devsuchallenge.git
```

<p>2. Install dependencies</p>

```
npm install
```

<h2>🤓 How to run:</h2>

You can run the tests in different ways:

<p>Cypress runner</p>
Excecute the command and follow the intuitive UI:

```
npx cypress open
```

<p>Headless browser:</p>

```
npx cypress run
```

<p>Custom scripts with mochawesome reports</p>

Petstore api test:

```
npm run petstoreapi-report
```

Sauce login test:

```
npm run loginsauce-report
```

Sauce buy test:

```
npm run buysauce-report
```

<p>GitHub Actions</p>

Additionally, I configured my tests to be able to run on the CI/CD GitHub Actions. In order to do this, go to the "Actions" tab within the repository link, there you will be able to see how every change pushed to the repository execute the defined workflows based on specified events or schedules.
There you will be able to monitor the status and results of this executions plus run them as you please.

<h2>💻 Built with</h2>

Technologies used in the project:

- Cypress
- JavaScript

<h2>👨🏼‍💻 Solution by Agustin Leonangeli </h2>
