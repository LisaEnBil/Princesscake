Feature: Login IMDB
 
 
Scenario: ”Look at create new account”
Given that I am on the IMDB website
And i do not have an existing account
When I click sign in
Then Sign in list and create a new account pops up
 
 
Scenario Outline: ”I want to check for all <Sign in> alternatives”
Given that I am on the IMDB website
And i do not have an existing account
When I click sign in 
Then <SignIn> list and create a new account pops up
 
Examples:
|SignIn|
|with IMDB account|
|with Amazon |
|with facebook|

