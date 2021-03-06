# Memory Game

## Introduction

Welcome to my second project. This website is a Memory game based on Mancheter United players, past and present.

You can view the website [here](https://abdullahjr0.github.io/MS2/)

![AmIresponsive](https://user-images.githubusercontent.com/79915855/130340262-4d7111e1-8e57-4daf-b630-0c14f47aff9c.jpg)




# Table of contents
1. [UX](#ux) <a name="UX"></a>
    * 1.1. [Goals](#goals)
    * 1.2. [Design](#design)
    * 1.3. [Wireframes](#wireframes)
2. [Features](#features)
3. [Technologies used](#technologies-used)
4. [Testing](#testing)
5. [Bugs Discovered](#bugs-discovered)
5. [Deployment Cycle](#deployment-cycle)
6. [Deployment](#deployment)
7. [End Product](#end-product)
8. [Credits](#credits)

<a name="ux"></a>
# 1. UX

As a Manchester United fan, I wanted to create a simple yet fun to play memory game using fan favourite Club legends and present players.

It has been made responsive for all devices, meaning it can be used everywhere even on the go. If they are indoors on a PC or outside on their phones they can enjoy this easy to play brain training game.



### Project Goals

The goal of this website is to provide a fun simple and immersive memory game. To allow enjoyment whilst strenghtening the mind.
<a name="goals"></a>

## 1.1. Goals:
* __Visitor goals__
    * As a first time visitor, I want to immediately understand what the game is about.
    * As a first time visitor, I want to be able to easily navigate and interact with the game.
    * As a first time visitor, I want to be able to understand how the game is played.
    * As a first time visitor, I want to be able to play on different tiers, to avoid repition.
    * As a first time visitor, I want to be able to see how much time I have left.
    * As a first time visitor, I want to be able to see how many times I have flipped the card.
    * As a first time visitor, I want to be able to follow social media handles to recieve updates and view other games.



* __Developer Goals__
    * As a developer, I want the cards to be able to reshuffle on command.
    * As a developer, I want the cards to be shuffled at the end of every game.
    * As a developer, I want the user to see a "Champions" pop up when successfully completing the game.
    * As a developer, I want the user to be able to see how much time is left.
    * As a developer, I want the user to know how many flips they have taken.

* __User expectations__
 
    * The website content should be clear and provide unambiguous information.
    * It should immediately be evident to the user what the game is offering.
    * User interface is easy to navigate.
    * Have the ability to follow the game on social media.
    * Responsive design across all devices.
    * The website should allow for a satisfied UX.

<a name="design"></a>

## 1.2. Design 


### __Typography__
* The font that is used is the 

### __Images__
* All images are high-quality resolution from Google images. 
* The images depend on what the user is viewing on the screen. If the user is at the main menu a Stadium is shown, if the user has lost the game the dressing room is shown etc.
This is to allow the immersive feeling for the user.


### __Colours Scheme__
* The four main Colours that are used are Red, White, Yellow and black. These are consistent colours with the Manchester United branding.

<a name="wireframes"></a>

## 1.3. Wireframes 
* Desktop and Mobile Wireframes - [View](https://github.com/abdullahjr0/MS2/blob/master/wireframes.md)


<a name="features"></a>

# 2.  Features
[Go to the top](#UX) <a name="UX"></a>

### Main Page

* Appropriate high-quality background image that allow the user to feel immersion whilst playing.
* Three buttons, include kick off, about and help button in the traditional Manchester colors, red and white.
* Bold white title text to display the purpose of the game and to allow contrast with background for aesthetic purpose
* Social media icons have been placed on the top right of the. These icons include Instagram, Facebook and Twitter. Once clicked they open up a new tab supporting user behaviour and usability.

####  About Pop-up

* Includes a brief description about the page to allow the user to understand the motivation behind the game and to also visit other potential games by MUFC
* Background changes to in game MUFC to allow immersion.
* okay button takes user back to home page easy navigation.

#### Help Pop-up
* Instructions on how to play including minute images of in game buttons.
* Background changes to MUFC dressing room to allow immersion.
* back button takes user to home page. easy navigation

####  Tiers
* This Pop up includes three different tiers, amateur, semi pro and professional
* Different tiers allows the user to have some autonomy over difficulty
* Tiers avoid repition 
* Buttons take user to own specific pages with different times
* back to main menu button allows for easy navigation


####  Social Media handles

* Social media links placed on top right of page
* allows user to visit social media handles and follow page
<a name="technologies-used"></a>

#  3. Technologies used 
[Go to the top](#UX) <a name="UX"></a>
* HTML5
    * The project uses HyperText Markup Language.
* CSS3
    * The project uses Cascading Style Sheets.
* JavaScript
    * The project uses JavaScript.
* [Balsamiq](https://balsamiq.com/)
    * Used to create the wireframes during the initial design process.
* [Github](https://github.com/)
    * Used to store project's code and files after being pushed from Git.
* [Google Fonts](https://fonts.google.com/specimen/Poppins?query=pop)
    * Google fonts were used to import the "Poppins" font into style.css which is used on all pages.
*  Google Chrome
    * The project uses Chrome to inspect the source code and uses lighthouse to test Performance, Best Practices, Accessibility and SEO.
<a name="testing"></a>

# 4. Testing
[Go to the top](#UX) <a name="UX"></a>

Testing information can be found [here](https://github.com/abdullahjr0/MS2/blob/master/testing.md)

<a name="bugs-discovered"></a>

# 5. Bugs Discovered
[Go to the top](#UX) <a name="UX"></a>

* Initially the buttons on the home page did not take me to the specific tiered game. This was fixed by assigning it to the correct index page
* The in-game was not responsive on mobile. This was fixed using CSS.
* The image code had parse error, this was fixed by renaming each image. 
* The timer was incorrect for Amateur game, this was fixed by changing the JS code.
* The tiered game had the incorrect time limit for its designated tier, this was fixed by reassigning it to correct js code.

<a name="deployment-cycle"></a>

# 6. Deployment Cycle
[Go to the top](#UX) <a name="UX"></a>

There were a few elements that were changed, repositioned or added from my original wireframes as they were more appropriate for the user i.e social media handles.

#### Future Implements
* add more cards for the different tiers,
* add more time for each card matched.
* minus time for every wrong card matched.
<a name="deployment"></a>

# 7. Deployment
[Go to the top](#UX) <a name="UX"></a>

1. Log into GitHub
2. Find repositories and choose your project
3. Find "Settings" amongst the menu items
4. Scroll down to GitHub pages section
5. Under the "Source" heading, click Branch and select master branch from the drop-down menu
6. When selecting the master branch, the page will refresh automatically and will be live and deployed
7. Go back to the pages section in settings and the link will appear there

__Run project locally and clone the project using Gitpod:__

1. Create a Github account
2. Use the chrome browser and install the Gitpod extensions for Chrome
3. Restart your browser and Login to Github
4. Go to project Github repository
5. Click on the green Gitpod button and this will allow a new Gitpod workspace that will be created from the code 
6. You can now work locally



<a name="end-product"></a>

# 8. End Product
[Go to the top](#UX) <a name="UX"></a>

Please view below snapshots of the end product.

__Main Page__
![MAIN-PAGE](https://user-images.githubusercontent.com/79915855/130340806-fa2a49ae-3ab2-4fb9-8d0c-f0169b3a8527.jpg)

__Choose tierp__
![choosetier](https://user-images.githubusercontent.com/79915855/130340845-53602eba-8f51-4223-b37c-45da91da91f7.jpg)


__Help Pop-up__
![htp](https://user-images.githubusercontent.com/79915855/130340848-ced7f385-876b-4ad3-b7fc-4e2b5dd25ac5.jpg)


__About Pop-up__
![about2](https://user-images.githubusercontent.com/79915855/130340847-0925d90a-8be1-4b07-b726-1fd4b6170a64.jpg)

__The Game__
![the-game](https://user-images.githubusercontent.com/79915855/130340859-1274045b-3433-439d-8e9e-aca70deca437.jpg)
![thegame2](https://user-images.githubusercontent.com/79915855/130340902-bc31f7c8-4f84-4673-929e-4a4247351872.jpg)
![thegame3](https://user-images.githubusercontent.com/79915855/130340903-4624863b-783a-4005-9088-cb2dcc026199.jpg)




# 9. Credits
[Go to the top](#UX) <a name="UX"></a>

* __Content__

* Read me file content was taking from my previous personal MS1 e.g the deoplyoment cycle content.

* __Images__

* Taken from google images or pixabay