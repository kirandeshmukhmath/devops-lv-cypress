## The folder and its usage:

**fixtures** - Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in JSON format.

**intergration** -  Integration folder includes all the test files. The test files may be written as .js, .jsx, .coffee and .cjsx. Usually the preferred extension is .js and the test file name format is test-name.spec.js.

**plugins** – This folder includes index.js file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress.

**screenshots** – Cypress comes with the ability to take screenshots, whether you are running via cypress open or cypress run, even in CI. To take a manual screenshot you can use the cy.screenshot() command. Additionally, Cypress will automatically capture screenshots when a failure happens during cypress run.

**support** – This folder contains index.js and commands.js files. This index.js file is run before every single spec file. The support folder is a great place to put reusable behavior such as custom commands or global overrides that you want to be applied and available to all your spec files.

**videos** – Cypress records a video for each spec file when running tests during cypress run. Videos are not automatically recorded during cypress open. Videos are stored in the videos folder which is set to cypress/videos by default.

***cypress.json*** – It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying any of the following configuration options.
