Feature: IMDB-search
  
  
   Scenario Outline: Search for a movie using <actors_name>
      Given that I am on the IMDB website
      When I enter <actors_name> in a search field
      And I click the search button
      Then I find the corresponding <actors_name> in the search results

      Examples:
         | actors_name   |
         | "Chevy Chase" |
         | "Neil Breen"  |

   Scenario Outline: Search for a movie using <actor_name> with down button and enter key
      Given that I am on the IMDB website
      When I enter <actor_name> in a search field
      And I press down button
      And I press enter
      Then I get a presentation of the actor that contains the text <part_of_presentation>

      Examples:
         | actor_name      | part_of_presentation                                               |
         | "Colin Firth"   | "Colin Andrew Firth was born into an academic family in Grayshott" |
         | "Josh Hartnett" | "Joshua Daniel Hartnett was born in Saint Paul, Minnesota"         |

   Scenario Outline: Search for a movie with <movie_name> and released <year>.
      Given that I am on the IMDB website
      When I enter <movie_name>  and <year> in a search field
      And I click the search button
      Then I find the corresponding  <movie_name>  and <year>  in the search results

      Examples:
         | movie_name                     | year     |
         | "National Lampoon's Vacation " | ”1983” |
         | " Vacation"                    | ”2015” |


   Scenario Outline:  Search for a movie or actor with the help of <search_filter>
      Given that I am on the IMDB website
      When I click on search filter button
      And I find different search filters to choose from
      And I click on <search_filters>
      Then I can find an empty search field with corresponding search filter.

      Examples:
         | search_filters |
         | All            |
         | Titles         |
          | TV Episodes |
         | Celebs      |
         | Companies   |
         | Keywords    |


