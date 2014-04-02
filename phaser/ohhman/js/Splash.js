Splash = function (game) {
    this.game = game;
    this.groupSplashImage = 'assets/screenshots/splashTeam_600-800.png';
    //this.gameSplashImage = 'assets/spritesheets/splashGame_600-800.png';
};

Splash.prototype.preload = function() {
    game.load.image('splashTeam', this.groupSplashImage);
	//game.load.atlas('splashGame', this.gameSplashImage);
};

Splash.prototype.create = function() {
	var fundo = game.add.sprite(0, 0, 'splashTeam');
	fundo.alpha = 0;
	
	var fadein = game.add.tween(fundo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true);
	setTimeout(function() {
		var fadeout = game.add.tween(fundo).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true);
		fadeout.onComplete.add(function() {
			fundo.anchor.setTo(0.5,0.5);
			fundo.x = game.width/2;
			fundo.y = game.height/2;
			//fundo.loadTexture('splashGame');			
			var fadein = game.add.tween(fundo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true);
			setTimeout(function() {
				var fadeout = game.add.tween(fundo).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true);
				fadeout.onComplete.add(function(){
					game.state.start('menu', Menu);
				});
			}, 2500);
		});
	}, 3000);
};