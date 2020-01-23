Feature: IMDB-search


          
  Scenario Outline: Search for a movie with <movie_name> and released <year>.
   Given that I am on the IMDB website
   When I enter <movie_name>  and <year> in a search field
   And I click the search button
   Then I find the corresponding  <movie_name>  and <year>  in the search results
 
   Examples:
   | movie_name             | year  |
   |  "National Lampoon's vacation "     |”1983”  |
   | " Vacation"        | ”2015” |
  
 
