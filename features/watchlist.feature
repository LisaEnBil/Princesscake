Feature: As a user of the IMDB website i want to add and sort movies in my wishlist.


    Background:
        Given that I am on the IMDB website

    Scenario: ”I want to add”
        And that I am not logged in (account)
        When I click sign in
        And choose sign in methond google
        And enter my Email
        And hit the sign in button
        And enter my password
        And hit enter
        And we validate that we are logged in
        And find the movie "nyckeln till frihet" movie
        And click to browse the movie specifics
        Then I click on add a movie should be added to the wishlist


    Scenario Outline: "What movies do I have in my watchlist?"
        And that I am not logged in (account)
        When I click sign in
        And choose sign in methond google
        And enter my Email
        And hit the sign in button
        And enter my password
        And hit enter
        And we validate that we are logged in
        And press the watchlist icon
        And I see the movie <movies> is added
        Then i select one

        Examples:
            | movies                        |
            | The Shawshank Redemption      |
            | Adventures of the Gummi Bears |
            | Donald Duck Goin' Quackers    |
            | The Jungle Book               |

