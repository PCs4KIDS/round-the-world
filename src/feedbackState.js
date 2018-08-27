module.exports = {

  create: function () {

    this.clickSound = this.game.add.audio('click');

    this.backBt = this.game.add.sprite(0, 10, 'btBack');
    this.backBt.inputEnabled = true;
    this.backBt.events.onInputDown.add(this.home, this);

    this.feedbacktxt = this.game.add.bitmapText(this.game.world.centerX, 300, 'myfont', 'Feedback', 80);
    this.feedbacktxt.anchor.set(0.5);

    var style = { font: "bold 50px Arial", fill: "#212121", boundsAlignH: "center", boundsAlignV: "middle" };


    var ratingtxt = this.game.add.text(0, 420, 'Rate this game on a scale of 1 to 10', style);
    var rating = this.game.add.inputField(0, 500, {
      font: '50px Arial',
      fill: '#212121',
      fillAlpha: 0,
      backgroundColor: "#ffffff",
      fontWeight: 'bold',
      type: PhaserInput.InputType.numeric,
      width: 100,
      max: 1,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: '',
      textAlign: 'left',
      zoom: true,
      placeHolder: "0"
    });
    rating.anchor.set(0.5);

    var liketxt = this.game.add.text(0, 600, 'Which aspects of the game do you like?', style);
    var like = this.game.add.inputField(0, 680, {
      font: '50px Arial',
      fill: '#212121',
      fillAlpha: 0,
      fontWeight: 'bold',
      type: PhaserInput.InputType.numeric,
      width: 500,
      max: 500,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: '',
      textAlign: 'left',
      zoom: true,
      placeHolder: "I like.."
    });
    like.anchor.set(0.5);

    var bettertxt = this.game.add.text(0, 800, 'Which aspects of the game can we make better?', style);
    var better = this.game.add.inputField(0, 880, {
      font: '50px Arial',
      fill: '#212121',
      fillAlpha: 0,
      fontWeight: 'bold',
      type: PhaserInput.InputType.numeric,
      width: 500,
      max: 500,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: '',
      textAlign: 'left',
      zoom: true,
      placeHolder: "I like.."
    });
    better.anchor.set(0.5);

    var submitBtn = this.game.add.sprite(this.game.world.centerX, 1000, 'btFlag');
    var submit = this.game.add.bitmapText(this.game.world.centerX, 1000, 'myfont', 'Submit', 50);

    submitBtn.inputEnabled = true;
    submitBtn.input.useHandCursor = true;
    submitBtn.events.onInputDown.add(function () {

      login.destroy();
      user.destroy();
      password.destroy();
      age.destroy();
      submit.destroy();
    });



    PhaserInput.onKeyboardOpen.add(function () {
      console.error("keyboard open", PhaserInput.KeyboardOpen)
    });
    PhaserInput.onKeyboardClose.add(function () {
      console.error("keyboard close", PhaserInput.KeyboardOpen)
    });

  },


  home: function () {
    this.clickSound.play();
    this.game.state.start('gameOver');
  }
};
