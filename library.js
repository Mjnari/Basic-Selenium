var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://library-app.firebaseapp.com').then((el) => {
    console.log("success " + el);
});
driver.findElement(By.css('input'));
driver.findElement(By.css('.btn-lg')).getText().then((txt) =>{
    console.log("Text of the button is " + txt);
});
driver.findElements(By.css('nav li')).then((elements) =>{
    elements.map(function(el){
        el.getText().then((txt)=>{
            console.log("The text of the navbar element is " + txt);
        })
    });
});


driver.sleep(1000)
driver.quit();