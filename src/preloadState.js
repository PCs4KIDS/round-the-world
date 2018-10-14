module.exports = {
  //load all flgas, bitmap text, buttons
  preload: function () {
    this.bg = this.game.add.bitmapText(this.world.centerX, this.game.getScaledHeight(400), 'myfont', "Round the World", this.game.getScaledHeight(150));
    this.bg.anchor.setTo(0.5);

    this.globe = this.game.add.sprite(this.world.centerX, this.game.getScaledHeight(700), 'globe');
    this.globe.height = this.game.getScaledHeight(this.globe.height)
    this.globe.width = this.game.getScaledWidth(this.globe.width);
    this.globe.anchor.setTo(0.5);

    this.loadBar = this.game.add.sprite(this.world.centerX, this.game.getScaledHeight(950), 'loadingBar');
    this.loadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.loadBar);
    this.loadBar.height = this.game.getScaledHeight(this.loadBar.height)
    this.loadBar.width = this.game.getScaledWidth(this.loadBar.width);

    var flagsContext = require.context('../assets/round-the-world/flags', false, /.png$/);
    flagsContext.keys().forEach(key => {
      const lowerCase = key.split('/')[1].replace('.png', '');
      const name = lowerCase.toUpperCase();
      this.game.load.image(name, 'assets/round-the-world/flags/' + name + '.png');
    })

    this.game.load.image('leftArrow', 'assets/round-the-world/images/leftArrow.png');
    this.game.load.image('rightArrow', 'assets/round-the-world/images/rightArrow.png');
    this.game.load.spritesheet('option', 'assets/round-the-world/images/options.png', 404, 304, 3);
    this.game.load.image('btFlag', 'assets/round-the-world/images/bt2.png');
    this.game.load.image('btBack', 'assets/round-the-world/images/back.png');
    this.game.load.image('btHome', 'assets/round-the-world/images/options.png');
    this.game.load.bitmapFont('myguifont', 'assets/round-the-world/fonts/guifont.png', 'assets/round-the-world/fonts/guifont.fnt');
    this.game.load.spritesheet('lives', 'assets/round-the-world/images/lives.png', 324, 68, 5);
    this.game.load.text('infoAF', 'assets/round-the-world/data/countries.json ');


    const audioContext = require.context('../assets/round-the-world/audio', false, /.ogg$/);

    audioContext.keys().forEach(key => {
      const name = key.replace('./', '').replace('.ogg', '');
      this.game.load.audio(name, 'assets/round-the-world/audio/' + name + '.ogg');
    })
  },

  create: function () {
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        console.log('' + i + '' + j);
        console.log(localStorage.getItem('' + i + '' + j));
        if (localStorage.getItem('' + i + '' + j) == null) { }
        else {
          this.game.global.highscore[i][j] = localStorage.getItem('' + i + '' + j);
        }
      }
      this.state.start('menuState');


    }
  }
}
