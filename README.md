# Minimal-Reddit-Clone
This repository contains a very minimalist version of a Reddit. This allows user to Post a new content and perform Create,Read,Update and Delete operation along with up-vote and down-votes any posted content
![UI of Minimal Reddit Clone](public/images/UI-Minimal-Reddit-Clone.PNG?raw=true "Minimal Reddit Clone")

Source is hosted on heroku at URL : [minimal-reddit-clone](https://fast-mountain-87221.herokuapp.com/)

# Build instruction:
#### Dependency:
npm module should be installed in your local system

Step 1: Clone the repository https://github.com/ashish3x3/minimal-reddit-clone.git

Step 2: Go to root of your downloaded repository in command-prompt or whatever terminal you prefer

Step 4: Run **jest test** to test if all test cases are passing

Step 4.1: It should similar to this image

![Test Build](public/images/Test-Cases-Passing-after-each-modification.PNG?raw=true "Test Build")

Step 5: In your terminal type **'npm start'** to start the node server

Step 6: If all goes good ,you will be directed to a URL: http://localhost:3000/. Port 3000 could be different depending if any other service is running there.

Step 7: Navigate around the app

Step 8: If you want to try and host this source on any other platform than localhost. Follow the steps below

Step 8.1: Go to terminal and run **'npm build'**. This command will give you a **'build file bundle.js'** for hosting over any other servers

# Build running on Heroku

Source is hosted on heroku at URL : [minimal-reddit-clone](https://fast-mountain-87221.herokuapp.com/)


![Heroku Build](public/images/test-for-build-passed.PNG?raw=true "Heroku Build")


![Heroku Build Trials](public/images/Heroku-Build-Trial.PNG?raw=true "Heroku Build Trials")

Features:

1. User can Post a Topic with (Title,Content)

2. User can edit the existing content

3. User can read others content

4. User can delete a topic

5. User can upvote a topic number of times(Similar to 'claps' of popular article sharing site [medium.com](https://medium.com) )

6. User can downvote a topic number of times

7. User can see the upvote/downvote counter of any topic

8. User cannot post a topic content of length greater than 256 character. Title has no such restrictions for time being
9. Interface provide 3 buttons to segregate topics like

9.1. **All Posts**  : which displays all topics currently in the memory

9.2. **Top 20 Posts** : which displays the top 20 topics sorted on number of upvotes in descending order

9.3. **My Posts** : (aspirational) Which displays all topics posted by the current user

# Technical Design:
1. Using React+Redux framework for predictable and uniform data flow and state management

2. All the components have been provided with comments wherever necessary or some important action has been performed

3. Design has clear segregation of presentation and data component

5. All the version of the code is available in the git at different branches.

6. Each branche act as single complete functionality. So plug and play option at different branches possible

7. Comprehensive test cases is provided for the components

8. For unit testing components and flow a combination of Jest+Enzyme framework is used



# Challenges faced:
1. Apps work locally but crashes on heroku because of webpack issue

2. webpack configuration issue

3. npm modules dependency conflicts and no proper documentation for resolving conflicts. Like few modules from test-rendered modules has been moved to 'react-dom/test-utils' and trying to import it will throw error even though documentation states to use it that way. So major time invested in understanding new npm dependencies and resolving it in this project

# Known issue:
1. Because of the click animation provided to the buttons which gets displayed when showing a topic, clicking at the top of those button will display animation of **'as clicked'** but it won't fire the event. Click in the center or bottom of the buttons. Trying to figure out the reason for this behavior in chrome. Working fine in Mozilla.

