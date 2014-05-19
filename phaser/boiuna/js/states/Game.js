/*global State, Level, Life, Tilemap, Platforms, Hero, ControlHero, Grass, Fire, SmallDragon, Dragon, Princess*/

State.Game = function (game) {
	"use strict";
	this.game = game;
	this.level = new Level(game);
	this.tilemap = new Tilemap(game);
	this.platforms = new Platforms(game, this.tilemap);
	this.hero = new Hero(game, this.tilemap, this.platforms);
	this.controlHero = new ControlHero(game, this.hero);
	this.life = new Life(game, this.hero);
	this.smallDragon = new SmallDragon(game, this.hero, this.platforms);
	this.fire = new Fire(game, this.hero, this.smallDragon);
	this.princess = new Princess(game, this.tilemap);
	this.grass = new Grass(game, this.tilemap);
	this.dragon = new Dragon(game, this.tilemap, this.hero, this.princess);
};
State.Game.prototype = {
	preload: function () {
		"use strict";
		this.level.preload();
		this.tilemap.preload();
		this.platforms.preload();
		this.hero.preload();
		this.controlHero.preload();
		this.life.preload();
		this.fire.preload();
		this.smallDragon.preload();
		this.princess.preload();
		this.grass.preload();
		this.dragon.preload();
	},
	create: function () {
		"use strict";
		this.level.create();
		this.tilemap.create();
		this.platforms.create();
		this.hero.create();
		this.controlHero.create();
		this.life.create();
		this.fire.create();
		this.smallDragon.create();
		this.princess.create();
		this.grass.create();
		this.dragon.create();
	},
	update: function () {
		"use strict";
		this.level.update();
		this.hero.update();
		this.controlHero.update();
		this.life.update();
		this.fire.update();
		this.smallDragon.update();
		this.dragon.update();
		this.princess.update();
	}
};