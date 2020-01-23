Feature: IMDB-search

As a movie-buff 
I'd like to search for movies


Scenario Outline: Search for a movie
Given that I am on the IMDB website
When I enter the <movie_name> a search field
And I click the search button
Then I find the corresponding <movie_name> in the search results

Examples:
| movie_name    | 
| "Antz"        |
| "A bug's life"|