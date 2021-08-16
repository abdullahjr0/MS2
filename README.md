# Memory Game

## Introduction

Welcome to my second project. This website is a Memory game based on Mancheter United players, past and present.

You can view the website [here](https://abdullahjr0.github.io/MS1/)

![Am-I-responsive](https://user-images.githubusercontent.com/79915855/120698231-abbf7a80-c4a6-11eb-8c8f-eacb635817c8.jpg)




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

*   Every page has a logo on the top left which is apparent to the user which website they are browsing. The logo can be clicked to easily navigate back to the home page. 
On the top right, there is a nav bar that allows for efficient navigation through the website, they maintain a hover effect which increase UX. The current page being browsed is also highlighted in a dark grey so the user understands which page they are viewing. 
* Appropriate high-quality hero images that allow the user to instantly understand what the website is portraying. 
* Cover text allows contrast and increases aesthetics allowing satisfied UX, also demonstrates page they are on. 
* Social media icons have been placed on the bottom of the pages inside the footer. These icons include Instagram, Facebook, Youtube and Twitter. Once clicked they open up a new tab supporting user behaviour and usability.

####  About Pop-up

* Below the hero image is a summary that engages the user with anecdotal language and providing brief information about services available.
* Three buttons are placed below the summary paragraph which allows the user to easily navigate to the Services page where it offers more information about each service, providing functionality and usability.

#### Help Pop-up
*  A summary about AJR Fitness.
*  Improving UX with a testimonials section of three different happy customers and their stories and an added picture.

####  Tiers

* This page can be reached through the Navbar or from the service buttons shown on the landing page.
* Provides three different service options and a brief description to fit the picture.
* The images allow a flipping animation which provides information of times available as referenced in home page as well as adding visual to UI and improving UX.
* Book now button which upon click navigates the user to the contact page allowing quick and efficient UX. Also includes hover effect where text colour changes to improve aesthetics.

####  Social Media handles

* A contact form to allow users to contact AJRF if they have an enquiry.
* Single column layout in intuitive order to allow efficient UX.
* Dropdown section under 'Subject' to allow users to specify their message.
* Hover effect applied on the form to allow the user to understand which part of the form they are completing.
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

Testing information can be found [here](https://github.com/abdullahjr0/MS1/blob/master/testing.md)

<a name="bugs-discovered"></a>

# 5. Bugs Discovered
[Go to the top](#UX) <a name="UX"></a>

* Initially the buttons on the home page did not take me directly to the specific headings on the Service page. This was fixed by putting each service heading in a div and assigning it an id. And the buttons on the home page wrapped in an anchor tag with a href and the assigned id. This improved UX.
* On the contact page, when hovering over individual boxes they would disappear. This was fixed by making the box red when I hovered over it. Avoiding confusion and satisfied UX
* On the services page, the times are at the back of the images, this is important information and instead should be placed beside the image, in turn, being swapped with the piece of text. 
* The images on the services page have a flip card animation. After the effect takes place the image size is distorted, changing its width and height. This was left unchanged due to lack of time.
* There is a spacing issue on the services page which has been left unchanged due to lack of time.

<a name="deployment-cycle"></a>

# 6. Deployment Cycle
[Go to the top](#UX) <a name="UX"></a>

There were a few elements that were changed, repositioned or added from my original wireframes as they were more appropriate for the user.

#### All pages
* I added a Youtube link as I had provided a youtube video on the landing page. Allows the user to do further research on what the website is about.

#### Landing page
* The original wireframe was missing something which would engage users. I embedded a youtube video to allow the user to feel enticed and reduce the attention from the text. The video is appropriate and fits the page perfectly.

#### Contact page
* The original wireframes did not include any location or instant contact for the user, which could lead to confusion and hassle. To avoid this I embedded google maps with a pinpoint which provided users with the location and the map allows them to see any local POI's.
* A phone number is placed at the bottom of the map if the user is interested in instant communication.
* Contact content remained the same but I added a hover animation over each box to avoid user confusion when filling out and also make it visually pleasing.

#### Future Implements
* Create a weekly newsletter where users can sign up to, to view any news or updates about the website.
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

__About Us Pop-up__


__Help Pop-up__

__The Game__




# 9. Credits
[Go to the top](#UX) <a name="UX"></a>

* __Content__

* Read me file content was taking from my previous personal MS1 e.g the deoplyoment cycle content.