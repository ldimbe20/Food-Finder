APPLICATION OVERVIEW:
Everything is at a click of a button so why not be able to access your friend and family members food allergies that way as well? 
With Forbidden Food Finder you can create profiles that store allergy information to be viewed when needed.

PRIMARY FEATURES:
The user can register and login with an email and a password.
The user can create a friend/family members food profile.
The user can manually assign a food to a profile.
The user can assign a food severity level to a profile and get information on food severity levels on the severity levels tab.
The user can delete a profile on a page.

TARGET AUDIENCE:
The target audience is anyone who who needs to keep track of multiple people with food allergies. This would be ideal for teachers, camp counselors, and parents who may prep food for large groups of people.

GETTING STARTED:

Installation

Clone this repository and change to the workspace directory in the terminal.

git clone git@github.com:ldimbe20/Food-Finder.git
-cd into food-finder
Launch the application
npm install
npm start


-Access the data
https://github.com/ldimbe20/Food-Finder-Api

json-server -w database.json -p 8088

Clone this repository
cd into the directory
Install the necessary packages:
npm install
npm i --save react react-dom react-router-dom reactstrap
npm i --save bootstrap
npm install json-server
mkdir api and touch database.json to create the database
Copy and paste sample api below into the database
https://github.com/ldimbe20/Food-Finder-Api
Run json-server -w database.json -p 8088 from the api directory
In a separate terminal, run npm start from the repository directory
After registering for the app, a user can navigate to (a) The Name Form to create a friend or family members profile. (b) Navigate to AllergyForm to assign that friend or family member an allergy, the severity of that allergy, the treatment of that allergy. From here you will be directed to a list of profiles that list food restrictions. (C) From the profile component you will have the ability to delete a profile. (D) The user can also navigate to the Severity Level tab for a breath description of food severities and who is affected by each of them.






