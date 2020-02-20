import TetrisController from '../games/tetris/TetrisController';

class MenuModel {
    constructor() {
        console.log('MenuModel constructor');
        this.selectedGame = 0;
        this.selected = false;
        this.games = [
            {
                controller: TetrisController,
                icon: [
                    [true, false],
                    [true, false],
                    [true, true]
                ]
            }
        ];
    }

    getGame() {
        console.log('MenuModel getGame()');
        return this.games[this.selectedGame].controller;
    }

    getIcon() {
        return this.games[this.selectedGame].icon;
    }
}

export default MenuModel;
