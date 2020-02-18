import TetrisController from '../games/tetris/TetrisController';

class MenuModel {
    constructor() {
        console.log('MenuModel constructor');
        this.games = [
            TetrisController
        ];
    }

    getGame(number) {
        console.log('MenuModel getGame()');
        return this.games[number];
    }
}

export default MenuModel;
