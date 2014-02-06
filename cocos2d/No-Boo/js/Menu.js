var MenuLayer = cc.Layer.extend({
    init:function()
    {
        this._super();
        
        var tela = cc.Director.getInstance().getWinSizeInPixels();
        
        var fundo = cc.Sprite.create("assets/Telas/wireframe_splash_jogo.png");
        fundo.setPositionX(tela.width/2);
        fundo.setPositionY(tela.height/2);
        this.addChild(fundo);
        
        bt_Play = cc.Sprite.create("assets/Telas/botoes/play.png");
        bt_Play_Selecionado = cc.Sprite.create("assets/Telas/botoes/play_selecionado.png");
        bt_Creditos = cc.Sprite.create("assets/Telas/botoes/creditos.png");
        bt_Creditos_Selecionado = cc.Sprite.create("assets/Telas/botoes/creditos_selecionados.png");
        bt_Jogar = cc.Sprite.create("assets/Telas/botoes/jogar.png");
        bt_Jogar_Selecionado = cc.Sprite.create("assets/Telas/botoes/jogar_selecionado.png");
        
        
        var play = cc.MenuItemSprite.create(bt_Play,bt_Play_Selecionado,null,'onPlay',this);
        var creditos = cc.MenuItemSprite.create(bt_Creditos,bt_Creditos_Selecionado,null,'onCredito',this);
        creditos.setPosition(0,-60);
        var comoJogar = cc.MenuItemSprite.create(bt_Jogar,bt_Jogar_Selecionado,null,'onJogar',this);
        comoJogar.setPosition(0,-120);
        
        
        var menu = cc.Menu.create(play,creditos,comoJogar);
        menu.setPosition(300,300);
        this.addChild(menu);
        
        return this;	
	},onPlay:function(){
		//cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2,new JogoScene()))
	},onCredito:function(){
		//cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2,new JogoScene()))
	},onJogar:function(){
		//cc.Director.getInstance().replaceScene(cc.TranstionFade.create(1.2,new configuracoes()))
	}
});

var Menu = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layerMenu = new MenuLayer();
        layerMenu.init();
        this.addChild(layerMenu);
    }
});