# Cypress

Cypress is a next generation front end testing tool built for the modern web. We address the key pain point’s developers and QA engineers face when testing modern applications.
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.
This enables you to write faster, easier and more reliable tests.

Cypress enables you to write all types of tests:
```
•	End-to-end tests
•	Integration tests
•	Unit tests
```
Cypress can test anything that runs in a browser.

## Installing Cypress
System requirements:

**Operating system**

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:
```
•	macOS 10.9 and above (64-bit only)
•	Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
•	Windows 7 and above (64-bit only)
```
**Node.js**
If you're using npm to install Cypress, we support:
```
•	Node.js 12 or 14 and above
```
**IDE for writing test scripts**
```
Visual Studio Code (Recommended)
```
*Hope you meet all the above mentioned requirements.*

**Now, coming to installation process,**

*There are two ways to you can use or install Cypress,*
```
1.One is getting through Node.js
2.Direct download from Cypress website.
```

**Note** – *The most common and recommended way is installing Cypress using node.js. If you don’t have node.js in your machine then you can download it by clicking this link - https://nodejs.org/en/download/*

***Installing Cypress through Node.js***

-	After downloading Node.js, you can check the node version by typing following command in your command prompt.

>**node --version**

OR

>**node -v**

![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/1.png)
 

-	Download and install Visual Studio Code in your machine. (you can download from this link - https://code.visualstudio.com/download)

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

 

***Writing test scripts and execution***

-	Write the test script and click on save and run “npx cypress open” command in terminal and Cypress GUI will appear as shown.
 
![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/8.png)
 
-	Now click on “new.js” file shown in Cypress GUI.
-	After clicking “new.js” file a new window will open and the test script will run on default ‘Electron’ browser.
 
![This is an image](https://github.com/kirandeshmukhmath11/first_test/blob/main/9.png)
	
-	You can close this window once the tests are finished.

-	To view the failed test case screenshot and videos, you need to login to the cypress dashboard by clicking on login button and in Cypress GUI and filling the details asked.

-	Once your cypress account is created you can view the failed test cases screenshots and videos of the same in screenshot and video folder which will be automatically created in your local project directory after Cypress account creation.

*Let us know about GitHub now !*

# GitHub

## What is GitHub ?

GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. We can say it is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. You will see some GitHub essentials like repositories, branches, commits, and pull requests below:

- Create and use a repository
- Start and manage a new branch
- Make changes to a file and push them to GitHub as commits
- Open and merge a pull request

## Creating a repository

A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. Often, repositories include a README file, a file with information about your project. README files are written in the plain text Markdown language. 
GitHub lets you add a README file at the same time you create your new repository.

- For creating repository, in the upper-right corner of any page, use the  drop-down menu, and select New repository.

![image](https://user-images.githubusercontent.com/105641357/189834039-03f858b3-548b-47f0-af97-55c040eb758c.png)

- In the Repository name box, enter hello-world.

- In the Description box, write a short description.

- Select Add a README file.

- Select whether your repository will be Public or Private.

- Click Create repository.

![image](https://user-images.githubusercontent.com/105641357/189834607-015204b1-ca70-4684-8572-d8e3299c7829.png)


## Creating a branch

Branching lets you have different versions of a repository at one time.

By default, your repository has one branch named main that is considered to be the definitive branch. You can create additional branches off of main in your repository.

You can use branches to have different versions of a project at one time. This is helpful when you want to add new features to a project without changing the main source of code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later in this guide. You can use branches to experiment and make edits before committing them to main.

This diagram shows:

- The main branch
- A new branch called feature
- The journey that feature takes before it's merged into main
branching diagram

![image](https://user-images.githubusercontent.com/105641357/189835333-7cd70900-89a9-4465-ad13-9e51b1e0006b.png)


### Create a branch

- Click the Code tab of your hello-world repository.
- Click the drop down at the top of the file list that says main.

![image](https://user-images.githubusercontent.com/105641357/189835708-f3aa8151-6c61-4609-b45f-48f32dc2d550.png)

- Type a branch name, readme-edits, into the text box.
- Click Create branch: readme-edits from main.

![image](https://user-images.githubusercontent.com/105641357/189835825-c6f9ecd0-be6a-482a-8336-5db459784a65.png)

***Now you have two branches, main and readme-edits. Right now, they look exactly the same. Next you'll add changes to the new branch.***

## Making and committing changes

When you created a new branch in the previous step, GitHub brought you to the code page for your new readme-edits branch, which is a copy of main.

You can make and save changes to the files in your repository. On GitHub, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

- Under the readme-edits branch you created, click the README.md file.

- Click  to edit the file.

- In the editor, write a bit about yourself. Try using different Markdown elements.

- In the Commit changes box, write a commit message that describes your changes.

- Click Commit changes.

![image](https://user-images.githubusercontent.com/105641357/189836525-114879e9-9493-45ef-982e-c09ad71c6ba4.png)

*These changes will be made only to the README file on your readme-edits branch, so now this branch contains content that's different from main.*

## Opening a pull request

Now that you have changes in a branch off of main, you can open a pull request.

Pull requests are the heart of collaboration on GitHub. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

By using GitHub's @mention feature in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the GitHub flow before working on larger projects.

- Click the Pull requests tab of your hello-world repository.

- Click New pull request

- In the Example Comparisons box, select the branch you made, readme-edits, to compare with main (the original).

- Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

![image](https://user-images.githubusercontent.com/105641357/189836939-54dc1d1c-c3d5-4742-9ea6-022197d9421b.png)


- Click Create pull request.

- Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.

- Optionally, to the right of your title and description, click the  next to Reviewers. Assignees, Labels, Projects, or Milestone to add any of these options to your pull request. You do not need to add any yet, but these options offer different ways to collaborate using pull requests.

- Click Create pull request.


## Merging your pull request

In this final step, you will merge your readme-edits branch into the main branch. After you merge your pull request, the changes on your readme-edits branch will be incorporated into main.

Sometimes, a pull request may introduce changes to code that conflict with the existing code on main. If there are any conflicts, GitHub will alert you about the conflicting code and prevent merging until the conflicts are resolved. You can make a commit that resolves the conflicts or use comments in the pull request to discuss the conflicts with your team members.

In this walk-through, you should not have any conflicts, so you are ready to merge your branch into the main branch.

- Click Merge pull request to merge the changes into main.


![image](https://user-images.githubusercontent.com/105641357/189837426-79f43702-314b-4240-b82e-7d83525a88ae.png)


- Click Confirm merge. You will receive a message that the request was successfully merged and the request was closed.

- Click Delete branch. Now that your pull request is merged and your changes are on main, you can safely delete the readme-edits branch. If you want to make more changes to your project, you can always create a new branch and repeat this process.





# CI/CD Pipeline

## What is CI/CD pipeline ?

CI/CD falls under DevOps (the joining of development and operations) and combines the practices of continuous integration and continuous delivery. CI/CD automates much or all of the manual human intervention traditionally needed to get new code from a commit into production such as build, test, and deploy, as well as infrastructure provisioning. With a CI/CD pipeline, developers can make changes to code that are then automatically tested and pushed out for delivery and deployment.


## CI/CD using GitHub Actions ?

*The introduction of native CI/CD to GitHub in 2019 via GitHub Actions, it’s easier than ever to bring CI/CD directly into your workflow right from your repository.*

**Step 1: Create or choose a repository, and pick a project**

*This might sound pretty basic, but the first step to building a CI pipeline with GitHub Actions is creating or choosing a repository on GitHub. You can either use an existing project code base, fork a project you like on GitHub, or start from scratch.*

Choose this repository shown below.

![image](https://user-images.githubusercontent.com/105641357/189843006-5c69b7cb-72fa-4041-bdcf-cd9d1e4351be.png)

**Step 2: Open GitHub Actions in your repository to start building your CI/CD workflow**

To begin building your CI/CD pipeline, open the GitHub Actions tab in your repository’s top navigation bar.

![image](https://user-images.githubusercontent.com/105641357/189844066-822a329d-cf26-4949-9f3d-2e7b9a3347f0.png)


You should see a list of CI/CD and workflow automation templates that match the technology your project uses 

![image](https://user-images.githubusercontent.com/105641357/189844220-ee4e384c-9f60-4e05-98f9-9e7e7aa51a72.png)

- *You can select a workflow which is suites your project or you can create your own workflo by clicking on '**set up a workflow yourself**'*

- *And write workflow using yamldata-serialization language and save it with .yml extension*.

![image](https://user-images.githubusercontent.com/105641357/189845950-fa572afb-c35c-41a1-a974-a03bd9a19f7e.png)


- *And click on **Start Commit***

- *orkflow will start as shown below*

![image](https://user-images.githubusercontent.com/105641357/189847057-646a021e-4ae0-43c7-b312-4d8703e8409f.png)

- *Once after the workflow completes the test case outputs will be displayed in the same window*

![image](https://user-images.githubusercontent.com/105641357/189848333-7a394fdb-f909-4350-a4b7-3c6aea8f1c33.png)


***The results can also be stored as test reports using GitHub pages as shown in below screenshot ***


![image](https://user-images.githubusercontent.com/105641357/189849039-f474d162-001b-4a79-8778-7d69d09525bf.png)

Test reports in GitHub Pages Link - https://annvin7197.github.io/cypress-automation/







