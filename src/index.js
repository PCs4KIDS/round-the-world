require('pixi');
require('p2');
var Phaser = require('phaser');
var PhaserInput = require('phaser-input');


module.exports.createGameInDiv = createGameInDiv;

function createGameInDiv(divId) {
  var game = new Phaser.Game('100', '100', Phaser.CANVAS, divId);
  Phaser.Device.whenReady(function () {
    game.plugins.add(PhaserInput.Plugin);
  });

  game.getScaledWidth = function(widthToScale){
    return widthToScale * (this.width/1600);
  };

  game.getScaledHeight = function(heightToScale){
    return heightToScale * (this.height/1200);
  };

  game.global = {
    score: 0,              //for keeping score in the different modes and displaying on game over
    highscore: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
    continentIndex: 0,     //for keeping track of the continent chosen by player
    modeIndex: 0,           //for keeping track of the mode chosen by player
    modeButton: ["btCapital", "btFlag", "btPopulation", "btCurrency"],   //to pick the right restart button to display
    fullArray: [["dz", "ao", "bj", "bw", "bf", "bi", "cm", "cv", "cf", "td", "km", "cg", "cd", "ci", "dj", "eg", "gq", "er", "et", "ga", "gm", "gh", "gn", "gw", "ke", "ls", "lr", "ly", "mg", "mw", "ml", "mr", "mu", "yt", "ma", "mz", "na", "ne", "ng", "re", "rw", "sh", "st", "sn", "sc", "sl", "so", "za", "ss", "sd", "sz", "tz", "tg", "tn", "ug", "eh", "zm", "zw"], ['ai', 'ag', 'ar', 'aw', 'bs', 'bb', 'bz', 'bm', 'bo', 'bq', 'br', 'ca', 'ky', 'cl', 'co', 'cr', 'cu', 'cw', 'dm', 'do', 'ec', 'sv', 'fk', 'gf', 'gl', 'gd', 'gp', 'gt', 'gy', 'ht', 'hn', 'jm', 'mq', 'mx', 'ms', 'ni', 'pa', 'py', 'pe', 'pr', 'bl', 'kn', 'lc', 'mf', 'pm', 'vc', 'sx', 'sr', 'tt', 'tc', 'us', 'uy', 've', 'vg', 'vi'], ["af", "am", "az", "bh", "bd", "bt", "bn", "kh", "cn", "cy", "ge", "hk", "in", "id", "ir", "iq", "il", "jp", "jo", "kz", "kp", "kr", "kw", "kg", "la", "lb", "mo", "my", "mv", "mn", "mm", "np", "om", "pk", "ps", "ph", "qa", "sa", "sg", "lk", "sy", "tw", "tj", "th", "tl", "tr", "tm", "ae", "uz", "vn", "ye"], ['as', 'au', 'ck', 'fj', 'pf', 'gu', 'ki', 'mh', 'fm', 'nr', 'nc', 'nz', 'nu', 'nf', 'mp', 'pw', 'pg', 'pn', 'ws', 'sb', 'tk', 'to', 'tv', 'vu', 'wf'], ["ax", "al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk", "ee", "fo", "fi", "fr", "de", "gi", "gr", "gg", "va", "hu", "is", "ie", "im", "it", "je", "lv", "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro", "ru", "sm", "rs", "sk", "si", "es", "sj", "se", "ch", "ua", "gb"]]                   //Each array in the full array stores codes for the countries in a continent in the manner [Africa, Americas, Asia, Australia, Europe], and is used to get questions (countries) and answers (flags, cities) from the countires json file
  }

  var capitalState = require('./capitalState.js');
  var populationState = require('./populationState.js');
  var currencyState = require('./currencyState.js');
  var flagState = require('./flagState.js');
  var gameOver = require('./gameOver.js');
  var winState = require('./winState.js');
  var menuState = require('./menuState.js');
  var preloadState = require('./preloadState.js');
  var learnState = require('./learnState.js');
  var bootState = require('./bootState.js');

  game.state.add('capitalState', capitalState);
  game.state.add('populationState', populationState);
  game.state.add('currencyState', currencyState);
  game.state.add('flagState', flagState);
  game.state.add('gameOver', gameOver);
  game.state.add('winState', winState);
  game.state.add('menuState', menuState);
  game.state.add('preloadState', preloadState);
  game.state.add('learnState', learnState);
  game.state.add('bootState', bootState);
  game.state.start('bootState');

}
