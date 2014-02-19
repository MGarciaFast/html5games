//Vari�veis de JOGO
var screen = null;

//Vari�veis de CONTROLE
var LG = {KEYS: []}; //Verifica se existe alguma tecla pressionada ou n�o

//Vari�veis da NAVE
var shipSprite;
var angularVelocity = 3;
var velocityX = 3;
var velocityY = 3;

var angle = 0;


var SpaceShipLayer = cc.Layer.extend({
	spriteFrameCache: cc.SpriteFrameCache.getInstance(),
	
    init:function()
    {
		//Habilita o teclado/touch como controle
		if ('keyboard' in sys.capabilities)
	    	this.setKeyboardEnabled(true);
		else if('touches' in sys.capabilities)
	        this.setTouchEnabled(true);
	    
		//Pega o tamanho da tela
	    screen = cc.Director.getInstance().getWinSize();
	    //Cria o Layer do jogo
		this.layerGame = cc.LayerColor.create(new cc.Color4B(0, 0, 0, 255), 800, 480);    
	    
        //Coloca GameSpriteSheet na mem�ria
        this.spriteFrameCache.addSpriteFrames("res/spritesheets/GameSpriteSheet.plist", "res/spritesheets/GameSpriteSheet.png");
        
        //Coloca a nave no centro da tela
        shipSprite = cc.Sprite.createWithSpriteFrameName("ship_22-34.png");
        shipSprite.setPosition(new cc.Point(screen.width/2, screen.height/2));
        this.layerGame.setPosition(new cc.Point(0.0,0.0));
        this.layerGame.addChild(shipSprite);
        
        
//COLOCAR PARA O ARQUIVO ASTEROIDS.JS
        for(i=0; i<7; i++){
			var asteroidSprite = cc.Sprite.createWithSpriteFrameName("asteroid2_118-118.png");
			var randomDir = Math.random()*2*Math.PI;
			
			asteroidSprite.xSpeed = velocityX*Math.cos(randomDir);
			asteroidSprite.ySpeed = velocityY*Math.sin(randomDir);
			this.layerGame.addChild(asteroidSprite);
			
			asteroidSprite.setPosition(new cc.Point(Math.random()*500, Math.random()*500));
			
			asteroidSprite.schedule(function(){
     			this.setPosition(new cc.Point(this.getPosition().x + this.xSpeed, this.getPosition().y + this.ySpeed));
     			if(this.getPosition().x > screen.width){
					this.setPosition(new cc.Point(this.getPosition().x - screen.width,this.getPosition().y));
				}
				if(this.getPosition().x < 0){
					this.setPosition(new cc.Point(this.getPosition().x + screen.width,this.getPosition().y));
				}
				if(this.getPosition().y > screen.width){
					this.setPosition(new cc.Point(this.getPosition().x ,this.getPosition().y - screen.width));
				}
				if(this.getPosition().y < 0){
					this.setPosition(new cc.Point(this.getPosition().x ,this.getPosition().y + screen.width));
				}
			});
		}
//AT� AQUI        
        
        
        this.addChild(this.layerGame);
        this.scheduleUpdate();
        return true;
    },

    update:function(dt) {
    	//Rotaciona a nave
    	if (Math.abs(angle) >= 360)
    		angle = 0;
    	
    	//Se a tecla pressionada for "right", gira pra direita
    	if (LG.KEYS[cc.KEY.right]) {
    		angle += angularVelocity;
    		shipSprite.setRotation(angle);
    	}
    	//Se a tecla pressionada for "left", gira pra esquerda
    	if (LG.KEYS[cc.KEY.left]) {
    		angle -= angularVelocity;
    		shipSprite.setRotation(angle);
    	}
    	
    	//Move a nave para frente (de acordo com o sentido que ela se encontra)
    	if (LG.KEYS[cc.KEY.up]) {
    		var atualPosition = shipSprite.getPosition();
    		
    		if ((angle < 0 && angle >= -180) || (angle < 360 && angle >= 180)) {
    			atualPosition.x -= velocityX;
    			if ((angle < 90 && angle >= -90) || (angle < -270 && angle >= 90) || (Math.abs(angle) > 270))
    				atualPosition.y += velocityY;
    			else atualPosition.y -= velocityY;
    		} else {
    			atualPosition.x += velocityX;
    			if ((angle < 90 && angle >= -90) || (angle < -270 && angle >= 90) || (Math.abs(angle) > 270))
    				atualPosition.y += velocityY;
    			else atualPosition.y -= velocityY;
    		}
            shipSprite.setPosition(atualPosition);
    	}
    	
    	//Teletransporta a nave
    	if (LG.KEYS[cc.KEY.down]) {
    		
    	}
    	
    	
    },

    
    onKeyDown: function (e) {
        LG.KEYS[e] = true;
    },

    onKeyUp: function (e) {
        LG.KEYS[e] = false;
    }
});

var SpaceShipScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new SpaceShipLayer();
        layer.init();
        this.addChild(layer);
    }
});