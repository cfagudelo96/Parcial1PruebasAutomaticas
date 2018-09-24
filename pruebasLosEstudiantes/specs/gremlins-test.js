var fs = require('fs');

function loadScript(callback) {
  var s = document.createElement('script');
  s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
  if (s.addEventListener) {
    s.addEventListener('load', callback, false);
  } else if (s.readyState) {
    s.onreadystatechange = callback;
  }
  document.body.appendChild(s);
}

function unleashGremlins(ttl, callback) {
  function stop() {
    horde.stop();
    callback();
  }

  function getRandomSeed() {
    return Math.random() * (9999 - 1000) + 1000;
  }
  
  function getClickerGremlin() {
    var clickerGremlin = window.gremlins.species.clicker();
    clickerGremlin.canClick(function(element) {
      var validElement = element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'IMG';
      return element.offsetParent !== null && validElement;
    });
    return clickerGremlin;
  }
  
  function getFormFillerGremlin() {
    var formFillerGremlin = window.gremlins.species.formFiller();
    formFillerGremlin.canFillElement(function(element) {
      return element.offsetParent !== null && !element.disabled;
    });
    return formFillerGremlin;
  }
  
  function setGremlinsAndMogwais(horde) {
    horde.gremlin(getClickerGremlin())
      .gremlin(getFormFillerGremlin())
      .gremlin(window.gremlins.species.scroller())
      .mogwai(window.gremlins.mogwais.alert())
      .mogwai(window.gremlins.mogwais.fps());
  }
  
  function setStrategy(horde) {
    horde.strategy(
      window.gremlins.strategies.distribution().distribution([0.45, 0.45, 0.1])
    );
  }
  
  function getGremlinsHorde() {
    var horde = window.gremlins.createHorde()
    setGremlinsAndMogwais(horde);
    setStrategy(horde);
    horde.seed(getRandomSeed());
    return horde;
  }
  
  horde = getGremlinsHorde();
  
  horde.after(callback);
  window.onbeforeunload = stop;
  setTimeout(stop, ttl);
  horde.unleash();
}

describe('Monkey testing with gremlins ', function() {
  it('it should not raise any error', function() {
    browser.url('/');
    browser.click('button=Cerrar');

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(loadScript);

    browser.timeoutsAsyncScript(100000);
    browser.executeAsync(unleashGremlins, 10000);
  });

  afterAll(function() {
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNNTRAAAAAAAAAAAAAAA");
    browser.log('browser').value.forEach(function(log) {
      browser.logger.info(log.message.split(' ')[2]);
    });
  });
});

