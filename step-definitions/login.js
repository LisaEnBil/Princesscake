let {$, sleep} = require('./funcs');
let searchField;
let signInButton;
let signInListImdb;
let signInListAmazon;
let signInListFacebook;
let signInListGoogle;
let pressSignInButton;


//some settings, can be declared in the functions
module.exports = function () {

    this.Given(/^i do not have an existing account$/, async function () {
        await sleep (2500);
        signInButton = await $('.imdb-header__signin-text > div:nth-child(1)')
        assert(signInButton, "Expected sign in to be here")
    });


    this.When(/^I click sign in$/, async function () {
        pressSignInButton = await $('.imdb-header__signin-text > div:nth-child(1)')
        pressSignInButton.click()
        await sleep(2500);
    });

    this.Then(/^Sign in list and create a new account pops up$/, async function () {
        await sleep(1000);
        let signInList = await $('#signin-options > div > div:nth-child(2)', '#signin-options > div > div:nth-child(4) > a')
        await sleep(1000);
        assert(signInList, "Expected signInList to be here")
    });

    this.Then(/^with IMDB account list and create a new account pops up$/, async function () {
        signInListImdb = await $('div.list-group:nth-child(2) > a:nth-child(1) > span:nth-child(2)')
        await sleep(2000)
        assert(signInListImdb, "Expected sign in with IMDB account to be here")
    });

    this.Then(/^with Amazon list and create a new account pops up$/, async function () {
        signInListAmazon = await $('a.list-group-item:nth-child(2) > span:nth-child(2)')
        await sleep(2000)
        assert(signInListAmazon, "Expected sign in with Amazon account to be here")
    });

    this.Then(/^with facebook list and create a new account pops up$/, async function () {
        signInListFacebook = await $('a.list-group-item:nth-child(3) > span:nth-child(2)')
        await sleep(2000)
        assert(signInListFacebook, "Expected sign in with Facebook account to be here")
    });

    this.Then(/^Sign in with google list and create a new account pops up$/, async function () {
        signInListGoogle = await $('a.list-group-item:nth-child(4) > span:nth-child(2)')
        await sleep(2000)
        assert(signInListGoogle, "Expected sign in with google account to be here")
    });

}


  
   
