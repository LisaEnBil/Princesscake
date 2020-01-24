let {$, sleep} = require('./funcs');
let googleLogin;
let minMail;
let pressNextButton;
let myPW;
let pressNextButtonPW;
let searchButton;
let theShawshankRedemption;
let addedToWatchlist;
let checkIfLoggedIn;
let pressAddToWatchList;
let watchListIcon;
let bumbiMovieInWatchList;
let howManyStars;
let theSearchBar;
let tryToLogIn;

module.exports = function () {

    this.Given(/^that I am not logged in \(account\)$/, async function () {
        tryToLogIn = await $('.imdb-header__signin-text > div:nth-child(1)')
        tryToLogIn.click()
        assert(tryToLogIn, "Now we are supposed to get to the login site")
        await sleep(2000)

    });

    this.When(/^hit the sign in button$/, async function () {
        await minMail.sendKeys('sebastian_svensson@hotmail.com')
        await sleep(3000)
        pressNextButton = await $('#identifierNext > span:nth-child(3)')
        pressNextButton.click()
        await sleep(1000)
    });

    this.When(/^choose sign in method google$/, async function () {
        googleLogin = await $('a.list-group-item:nth-child(4) > span:nth-child(2)')
        googleLogin.click()
    });

    this.Then(/^I click on add a movie should be added to the wishlist$/, async function () {
        pressAddToWatchList = await $('.ipc-icon--add')
        pressAddToWatchList.click()
        await sleep(1000)
        addedToWatchlist = await $('.uc-add-wl-button')
        assert(addedToWatchlist, "This movie was added to watchlist")
        await sleep(3000)
    });

    this.When(/^enter my Email$/, async function () {
        await sleep(2500)
        minMail = await $('#identifierId')
        minMail.click()
        await sleep(1000)
        assert(googleLogin, "Now we are at the google login place")
    });

    this.When(/^enter my password$/, async function () {
        await sleep(1000)
        myPW = await $('.I0VJ4d > div:nth-child(1) > input:nth-child(1)')
        myPW.click()
    });

    this.When(/^hit enter$/, async function () {
        await sleep(500)
        myPW.sendKeys('uc3w36oc')
        pressNextButtonPW = await $('#passwordNext > span:nth-child(3) > span:nth-child(1)')
        pressNextButtonPW.click('#passwordNext > span:nth-child(3) > span:nth-child(1)')
        assert(pressNextButtonPW, "You're now logged in")
    });

    this.When(/^we validate that we are logged in$/, async function () {
        await sleep(500)
        checkIfLoggedIn = await $('svg.ipc-icon:nth-child(2)')
        assert(checkIfLoggedIn, "Expected to be logged in right now")

    });

    this.When(/^find the movie "([^"]*)" movie$/, async function (movieTitle) {
        await sleep(500)
        theSearchBar = await $('#suggestion-search')
        theSearchBar.click('#suggestion-search')
        theSearchBar.sendKeys(movieTitle)
        await sleep(1000)
    });

    this.When(/^click to browse the movie specifics$/, async function () {
        searchButton = await $('#suggestion-search-button')
        searchButton.click('#suggestion-search-button')
        await sleep(2000)
        theShawshankRedemption = await $('tr.findResult:nth-child(1) > td:nth-child(2) > a:nth-child(1)')
        theShawshankRedemption.click('tr.findResult:nth-child(1) > td:nth-child(2) > a:nth-child(1)')
        assert(theShawshankRedemption, "Expected to be browsing movies right now")

    });
    this.When(/^press the watchlist icon$/, async function () {
        watchListIcon = await $('.sc-kpOJdX > a:nth-child(1) > div:nth-child(2)')
        watchListIcon.click('.sc-kpOJdX > a:nth-child(1) > div:nth-child(2)')
        await sleep(2000)
        assert(watchListIcon, "Pressed the watchlist Icon")
    });

    this.When(/^I see the movie "([^"]*)" is added$/, async function (movieTitle) {
        // grab the whole watch list
        let theWholeWatchList = await driver.findElement(By.css('.lister-widget'));
        // find a link in the watch list with text that matches the movie title
        let linkToClick = await theWholeWatchList.findElement(By.linkText(movieTitle));
        // click the link
        await linkToClick.click();

        // Strange workaround for not getting to the page on the first click sometimes
        // this is only needed if the first click doesn't work (might be a driver issue with Firefox)
        // and results in an error "stale element" otherwise (because we try to click something this is
        // not on the apge anymare - but we supress this error using try...catch)
        try { await linkToClick.click(); } catch (e) { }

        // wait for the movie presentation/overview to appear
        await driver.wait(until.elementLocated(By.css('#title-overview-widget')));
        // get the title bar text of the movie presentation 
        let titleBar = await driver.findElement(By.css('#title-overview-widget .titleBar'));
        let titleBarText = await titleBar.getText();
        // check that the movie title is part of the title bar text
        assert.include(titleBarText, movieTitle, 'Could not find the movie title "' + movieTitle + '" in the title bar of the movie presentation');
        await sleep(2000);
    });


    this.Then(/^i select one$/, async function () {
        bumbiMovieInWatchList = await $('.title_wrapper > h1:nth-child(1)')
        bumbiMovieInWatchList.click('.title_wrapper > h1:nth-child(1)')
        await sleep(1500)
        howManyStars = await $('.imdbRating')
        await sleep(2000)
        assert(howManyStars, "We are in!")
    });

}