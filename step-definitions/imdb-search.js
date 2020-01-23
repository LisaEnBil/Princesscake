let {$, sleep} = require('./funcs');

let normalSleep = 1000;

module.exports = function() {

  this.Given(/^that I am on the IMDB website$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(normalSleep);
    let logo = await $('#home_img_holder');
    assert(logo, "Expected the IMDB logo");
  });

  this.When(/^I enter "([^"]*)" in a search field$/, async function (actorsName) {

    let searchField = await $('#suggestion-search');
    await searchField.sendKeys(actorsName);
    await sleep(normalSleep);
  });

  this.When(/^I click the search button$/, async function () {

    let searchButton = await $('#suggestion-search-button');
    await searchButton.click();
    await sleep(normalSleep);

  });

  this.Then(/^I find the corresponding "([^"]*)" in the search results$/, async function (searchString) {
   

    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
   
    let result = await $('.findResult');
    assert(result, 'Could not find any results');
    let firstResult = result[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, searchString, 'Could not find the phrase ' + searchString + ' in the first search result.');
    await sleep(normalSleep);

  });


  this.When(/^I press down button$/, async function () {
    let searchField = await $('#suggestion-search');
    await searchField.sendKeys(selenium.Key.ARROW_DOWN);
    await sleep(normalSleep);
  });

  this.When(/^I press enter$/, async function () {
    let pressEnter = await $('#suggestion-search');
    pressEnter.sendKeys(selenium.Key.ENTER)
    await sleep(normalSleep * 5);

  });

  this.Then(/^I find the corresponding "([^"]*)" in the search results section "([^"]*)"$/, async function (searchString, searchSection) {

    // first wait for search results
    await driver.wait(until.elementLocated(By.css('.findSection')));

    // loop through eact find section
    let allTextInSection;
    let findSections = await driver.findElements(By.css('.findSection'));
    for (let section of findSections) {
      let headline = await section.findElement(By.css('h3'));
      let headlineText = await headline.getText();
      if (headlineText === searchSection) {
        allTextInSection = await section.getText();
      }
    }

    assert.include(allTextInSection, searchString, 'Can not find the text ' + searchString + ' in  the search result section ' + searchSection);
  });

  this.Then(/^I get a presentation of the actor that contains the text "([^"]*)"$/, async function (partOfPresentation) {
    await driver.wait(until.elementLocated(By.css('#name-overview-widget')));
    let presentation = await driver.findElement(By.css('#name-overview-widget'));
    let presentationText = await presentation.getText();
    assert.include(presentationText, partOfPresentation, 'Could not find the text "' + partOfPresentation + '" in the presentation.');
  })
}