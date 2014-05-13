var ControlHero = function (game, hero) {
    "use strict";
    this.game = game;
    this.hero = hero;
    this.buttonHit = new ButtonHit(game, hero);
    this.buttonLeft = new ButtonLeft(game, hero);
    this.buttonRight = new ButtonRight(game, hero);
    this.buttonUp = new ButtonUp(game, hero);
} 

ControlHero.prototype = {
    preload: function () {
        "use strict";
        this.buttonHit.preload();
        this.buttonLeft.preload();
        this.buttonRight.preload();
        this.buttonUp.preload();
    },
    create: function () {
        "use strict";
        this.buttonHit.create();
        this.buttonLeft.create();
        this.buttonRight.create();
        this.buttonUp.create();
    }, 
    update: function () {
        "use strict";
        this.buttonHit.update();
        var inputLeft = this.buttonLeft.update();
        var inputRight = this.buttonRight.update();
        var inputUp = this.buttonUp.update();
        if(inputLeft === false && inputRight === false && inputUp === false){
            this.stop();
        }
    },
    stop: function () {
        if (this.hero.sprite.key === 'hero-normal') {
		   this.hero.sprite.animations.stop();
		   this.hero.sprite.frame = Config.hero.frame.normal.stopped;
        }
    }
} 