/* The possible events that trigger actions and state changes in the finite state machine */

var Events = Object.freeze({
    INIT: "Events.INIT",
    LOGIN_BUTTON_CLICK: "Events.LOGIN_BUTTON_CLICK",
    LOGIN_CONFIRMED: "Events.LOGIN_CONFIRMED",
    LOGIN_REFUSED: "Events.LOGIN_REFUSED",
    ERROR_CONNECTION: "Events.ERROR_CONNECTION",
    ENTER_PRESSED: "Events.ENTER_PRESSED",
    IP_RECEIVED: "Events.IP_RECEIVED",
    CONNECTION_ESTABLISHED: "Events.CONNECTION_ESTABLISHED",
    SERVER_ACK_LOGIN: "Events.SERVER_ACK_LOGIN",
    ROOMS_INFO_RECEIVED: "Events.ROOMS_INFO_RECEIVED",
    ROOM_CLICKED: "Events.ROOM_CLICKED",
    SERVER_ALLOW_ENTER_ROOM: "Events.ALLOW_ENTER_ROOM",
    BACK_CLICKED: "Events.BACK_CLICKED",
    SERVER_ACK_EXIT_ROOM: "Events.SERVER_ACK_EXIT_ROOM",
    LOGOUT_CLICKED: "Events.LOGOUT_CLICKED",
    RECONNECTION: "Events.RECONNECTION",
    READY_FOR_GAME: "Events.READY_FOR_GAME",
    UNREADY_FOR_GAME: "Events.UNREADY_FOR_GAME"
});