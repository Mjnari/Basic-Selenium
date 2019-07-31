var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com');

driver.findElement(By.css('input')).sendKeys('user@email.com');
driver.findElement(By.css('.btn-lg')).click();
driver.wait(until.elementLocated(By.css('.alert-success')), 5000)
driver.findElement(By.css('.alert-success')).getText().then((txt)=>{
    console.log('Alert success text is ' + txt);
})