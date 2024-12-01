# Implementation

## LetsVenture Web Application UI Testing using Cypress

The UI testing of the web application was carried out using Cypress a web automation tool and a CI/CD pipeline was created in GitHub for nightly execution of entire test cases. 

LetsVenture login page, founder sign up page, and investor sign up page has been tested using Cypress.

- Login Page > The login page/Sign In page is where the user is able to log in and enter user's home page. The login page contains LetsVenture logo, two input fields (Registered email and password), sign in button, forgot password button, Register now button, sign in button and other information like company details, disclaimer and social links at the footer of the page. The user is required to enter registered email address and password in order to login. If the user forgot his/her password the user can click on forgot password button which will lead to forgot password page. If the user is new to the application, he/she can click on Register now button to register as investor/founder. 

- Founder Sign-up Page > The founder sign up page is where the user/founder is required to register their startup company and its details. This page has two stages (Personal details and Startup details). The Personal details contain input fields like  name, email, LinkedIn profile link, phone number referrer, two radio buttons, and continue button. The Startup detail's part contains input fields for entering company details. 

- Investor Sign-up Page > The investor sign-up page is where the user/investor is required to enter their information for registering as an investor.  This page has three stages (Personal details, investment profile, and personal your profile). Once the personal details stage is filled then the user is required to click on continue button and an OTP is generated and shared with the user's number. User should enter the valid OTP number in the required field and once user phone number is verified the website will take user to next stage (Investment profile). 

## Implementation

Lets first install the tool for carrying out the test i.e., Cypress


-	Create a folder for Cypress project in any of your local drive(C, D, E, or F)  and name it as your wish (ex: Folder name – Cypress1)

-	Go to your folder and create another folder and name it as you wish (ex: project1).

-	Now open you folder (project1) using Visual Studio Code.

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/2.png)
 
-	Now open the terminal in Visual Studio Code by clicking on terminal button.
 
![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/3.png)

-	As you can see in the above screenshot the file is empty, now to add dependencies type (>**npm init –y**) in the terminal.

-	After tying ‘**npm init –y**’ command the ‘**package.json**’ file will be created.

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/4.png)
 

-	Now for installing Cypress type (>**npm install cypress**) in command prompt.

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/5.png)
 
-	Now to by typing (>**npx cypress open**), the project structure will be created and a GUI of cypress will be displayed containing our project files as shown below:

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/6.png)

-	The test cases should be written in **integration folder** i.e., Project1/Cypress/Integration/(create your own file like new.js) as shown in below figure.

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/7.png)


***Test cases are written in TESTPAD ( a web-app for writing and running test plans )***

![image](https://user-images.githubusercontent.com/105641357/190244789-87cd16e8-a91b-447d-8dd2-2dfbb246abca.png)


![image](https://user-images.githubusercontent.com/105641357/190244710-3d84956f-6728-4a63-9136-c67ce018dafd.png)


- After writting test cases in TESTPAD, we have to execute the test cases now

- Lets open Cypress for automating these test cases and create folders for each pages (ex: login page) we are testing in **integration** folder as shown below:

![image](https://user-images.githubusercontent.com/105641357/190224018-34b4985b-723e-497a-a199-34cc058cc2d6.png)

- Create a .js file for writing test scripts.

![image](https://user-images.githubusercontent.com/105641357/190224207-c1bad3ce-238f-4f6b-a575-42485f289813.png)


- Test script of respective test case is seperated by a line and the test case description is written inside test script function as shown in below picture:

![image](https://user-images.githubusercontent.com/105641357/190225118-b7cba18a-6737-4785-8f2b-790f427d65e8.png)


***For writing test cases and identifying components of web page, you can make use of Cypress selector which is available in cypress test runner as shown in below GIF***

![gif]( https://docs.cypress.io/_nuxt/img/open-selector-playground.8c1d6be.gif)

- After writing all the test scripts, we have to run the test script in test runner to see results. (type *npx cypress open* / *npx cypress run* for headless execution)

![image](https://user-images.githubusercontent.com/105641357/190232712-9958bfd9-982e-409d-8c71-2a4e6812a931.png)

- Choose the test script to run and a new window (test runner) will open and run our test scripts.

*Below is an sample test run to show how tests run in Cypress*

![gif](https://testdriven.io/static/images/gifs/blog/angular-cypress/all-tests.gif)


- Once the tests are finished, the result of the test scripts will be displayed on the left hand side of the screen as shown below:

![Screenshot (562)](https://user-images.githubusercontent.com/105641357/190233608-37baa46d-858c-4494-b32e-ab5525eceafb.png)


- You can later mark down the status of the test case in the TESTPAD.

***For uploading the code to GiHub and creating CI/CD pipeline please go to this link conating README.md file - https://github.com/digidrills/devops-lv-cyprus/tree/main/Docs***


