# devops-lv-cyprus

This repository contains all the test scripts and its associated folders and dependencies.

***Cypress** is a purely JavaScript-based front-end testing which is used for testing LetsVenture application. The **login page, founder sign up page, and investor sign up page** has been tested using Cypress.*

### Why Cypress is choosed ?
- Cypress is choosen because of its architectural design, where external web driver is not required. 
- Cypress runs all it's test scripts directly on browser selected. It takes snapshots as your tests run. 
- We can hover over each command in the Command Log to accurately see what happened at each step. 
- We can view videos of the execution of your entire tests when running from the Cypress Dashboard.

### Folder Structure

devops-lv-cypress

       ├── Docs 
       │   ├── implementation.md        # This file contains project implementation procedure 
       │   └── README.md                # This readme file contains information about Cypress and its installation procedure      
       ├── cypress       
       │   ├── fixtures       
       │   │   └── cred.json     
       │   │
       │   ├── integarations
       │   │   ├── founderSignUp
       │   │       └── functionalTestCases.js 
       │   │   ├── investorSignUp
       │   │       └── functionalTestCases.js 
       │   │   └── loginPage
       │   │       ├── 1functionalTestcases.js 
       │   │       ├── 2forgotPasswordFunctionality.js 
       │   │       ├── 3registerNowFunctionality.js 
       │   │       ├── 4otherTestcases.js 
       │   │       └── 6messagesToVerify.js
       │   │
       │   ├── plugins
       │   │   └── index.js
       │   ├── screenshots    
       │   ├── support   
       │   │   ├── commands.js
       │   │   └── index.js
       │   ├── videos    
       │   └── README.md    
       │      
       ├── README.md                    # This is current file you are looking into    
       │
       ├── cypress.json                 # It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying any of the following configuration options.   
       │
       ├── package-lock.json            # package-lock.json to keep track of exact dependency trees at any given time. It will ensure that all clients that download your project and attempt to install dependencies will get the exact same dependency tree.
       │       
       └── package.json                 # It contains human-readable metadata about the project as well as functional metadata like the package version number and a list of dependencies required by the application.      


