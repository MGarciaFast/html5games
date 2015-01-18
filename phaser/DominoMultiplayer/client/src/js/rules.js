/*global Config, States, Events*/

/* This object contains the function which defines all transitions in the state machine */

var Rules = function (actions) {
    "use strict";
    this.actions = actions;
};
Rules.prototype = {
    initStateMachine: function (stateMachine) {
        "use strict";
        stateMachine.addTransition(States.FIRST, Events.INIT, States.LOGIN, [this.actions.registerInputCapture.bind(this.actions), this.actions.showLoginPage.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.LOGIN_BUTTON_CLICK, States.LOGIN, [this.actions.validateLogin.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.ENTER_PRESSED, States.LOGIN, [this.actions.validateLogin.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.ERROR_CONNECTION, States.LOGIN, [this.actions.showLoginErrorConnection.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.LOGIN_REFUSED, States.LOGIN, [this.actions.showLoginInvalid.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.LOGIN_CONFIRMED, States.LOGIN, [this.actions.requestServerAddress.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.IP_RECEIVED, States.LOGIN, [this.actions.connectToSever.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.CONNECTION_ESTABLISHED, States.LOGIN, [this.actions.sendLoginToServer.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.SERVER_ACK_LOGIN, States.LOGIN, [this.actions.requestRoomsInfo.bind(this.actions)]);
        stateMachine.addTransition(States.LOGIN, Events.ROOMS_INFO_RECEIVED, States.ROOMS, [this.actions.populateRoomsPage.bind(this.actions), this.actions.showRoomsPage.bind(this.actions)]);
        stateMachine.addTransition(States.ROOMS, Events.ROOM_CLICKED, States.ROOMS, [this.actions.requestEnterRoom.bind(this.actions)]);
        stateMachine.addTransition(States.ROOMS, Events.SERVER_ALLOW_ENTER_ROOM, States.WAIT_PLAYERS, [this.actions.showWaitMorePlayersPage.bind(this.actions)]);
        stateMachine.addTransition(States.ROOMS, Events.LOGOUT_CLICKED, States.LOGIN, [this.actions.disconnect.bind(this.actions), this.actions.showLoginPage.bind(this.actions)]);
        stateMachine.addTransition(States.ROOMS, Events.ROOMS_INFO_RECEIVED, States.ROOMS, [this.actions.populateRoomsPage.bind(this.actions)]);
        stateMachine.addTransition(States.WAIT_PLAYERS, Events.BACK_CLICKED, States.WAIT_PLAYERS, [this.actions.requestExitRoom.bind(this.actions)]);
        stateMachine.addTransition(States.WAIT_PLAYERS, Events.SERVER_ACK_EXIT_ROOM, States.ROOMS, [this.actions.showRoomsPage.bind(this.actions)]);
        stateMachine.addTransition(States.WAIT_PLAYERS, Events.ROOMS_INFO_RECEIVED, States.WAIT_PLAYERS, [this.actions.updatePlayers.bind(this.actions)]);
    }
};