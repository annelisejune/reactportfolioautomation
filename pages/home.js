const By = require('selenium-webdriver').By;

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.locators = {
      sizeSmall: By.xpath("//div[contains(@data-testid, 'dd-opt-0')]/select[1]/option[2]"),
    };
    this.navbar = {
      women: By.xpath("//a[contains(@data-testid, 'list-item-women')]"),
      // navTitle: title => By.xpath("//a[contains(@data-testid, 'list-item-"+ title +"')]"),
    };
  }

  open() {
    this.driver.get(process.env.URL);
  };

}

module.exports = HomePage;

