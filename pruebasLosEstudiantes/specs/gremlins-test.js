
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
  function getRandomSeed() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }

  function stop(horde, callback) {
    horde.stop();
    callback();
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
      window.gremlins.strategies.distribution().distribution([0.6, 0.3, 0.1])
    );
  }
  
  function getGremlinsHorde(seed) {
    console.log('This execution was generated with the following seed: ' + seed);
    var customLogger = {
      log: function(msg) {
        console.log('LOG: ' + msg);
      },
      info: function(msg) {
        console.log('INFO: ' + msg);
      },
      warn: function(msg) {
        console.log('WARN: ' + msg);
      },
      error: function(msg) {
        console.log('ERROR: ' + msg);
      }
    };

    var horde = window.gremlins.createHorde();
    setGremlinsAndMogwais(horde);
    setStrategy(horde);
    horde.seed(seed);
    horde.logger(customLogger);
    return horde;
  }

  var seed = getRandomSeed();

  horde = getGremlinsHorde(seed);
  
  window.onbeforeunload = stop;
  setTimeout(stop, ttl, horde, callback);
  horde.unleash();
}

describe('Monkey testing with gremlins ', function() {
  it('it should not raise any error', function() {
    browser.url('/');
    browser.click('button=Cerrar');

    browser.timeouts('script', 60000);
    browser.executeAsync(loadScript);

    browser.timeouts('script', 100000);
    browser.executeAsync(unleashGremlins, 2000);
  });
});

afterAll(function() {
  var fs = require('fs');
  var stream = fs.createWriteStream('./reports/report' + new Date().getTime() + '.txt', { flags : 'w' });
  browser.log('browser').value.forEach(function(log) {
    stream.write(log.message + '\t' + log.source + '\n');
  });
});
