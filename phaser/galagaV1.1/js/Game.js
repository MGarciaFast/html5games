var Game = function(game){
    this.game = game;
    //this.scores = 0;
    this.ship = null;
    this.stars = null;
    this.enemy1 = null;
    //this.backgroundGame;
    //this.asteroid = null;
	//this.groupAsteroids = null;
	//this.livesHud = null;
	//this.loseMSG = null;
	//this.ufo = null;
	//this.score = null;
	//this.scoreText = null;
	//this.nextAddUfo = 0;
	//this.addUfoTime = 10000;
	//this.velAsteroids = null;
};

Game.prototype.preload = function(){
	game.load.image('backgroundGame','assets/screenshots/tile_480-1200.png');
	
};

Game.prototype.create = function () {
	
	this.background1 = this.game.add.sprite(0, 0, 'backgroundGame');
    this.background2 = this.game.add.sprite(0, -600, 'backgroundGame');
	//this.backgroundGame = game.add.tileSprite(0,0,480,600,'backgroundGame'); //game.add.sprite(0, 0, 'backgroundGame');
	//this.backgroundGame.name = 'backgroundGame';
	this.enemy1 = new Enemy(this,'enemy1','en1_1_15-14.png','an_enemy1',2);
    this.ship = new Ship(this);
    
    this.stars = game.add.group();
    this.stars.enableBody = true;
    this.stars.physicsBodyType = Phaser.Physics.ARCADE;
    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var star = this.stars.create(0 + x * 48, y * 50, 'star');
            star.name = 'star' + x.toString() + y.toString();
            star.checkWorldBounds = true;
            star.events.onOutOfBounds.add(starOut, this);
            star.body.velocity.y = 100 + Math.random() * 200;
        }
    }

   
	

};

function starOut(star) {
    
    star.reset(star.x, -32);
    //  And give it a new random velocity
    star.body.velocity.y = 50 + Math.random() * 200;
}


Game.prototype.update = function () {
	  
	//this.backgroundGame.y +=1;
    this.ship.update();

  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
	  this.ship.move("left");
  }	  	
  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
	  this.ship.move("right");
  }	  	
  else if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
	  console.log("fire");
	  this.ship.fire();
  }
  
  this.moveBackground(this.background1);
  this.moveBackground(this.background2);

		                  
};

Game.prototype.initAsteroids = function(){

};

Game.prototype.outOfBounds = function (object) {


};

Game.prototype.punctuate = function (points) {
//    this.score += points;
//    this.scoreText.setText( this.score );
};

Game.prototype.gameOver = function () {
//    game.score = this.score;
//    game.add.text(this.game.width/2 - 100, this.game.height/2, "Game Over", {
//        font: "40px Vector Battle", fill: "#ffffff", align: "center"
//    });
//    setTimeout(function () { this.game.state.start('HighScoreInput', HighScoreInput) } , 3000 );
};

Game.prototype.moveBackground = function(background){
	    if (background.y > 600) {
	      background.y = -600;
	      background.y += 1;
	    } else {}
	      background.y +=1;
	  
}