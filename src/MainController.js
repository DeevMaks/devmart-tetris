import Menu from './menu/MenuController';
import View from './view/View';
import EventHandler from './EventHandler';

class MainController {
    constructor() {
        this.eventHandler = new EventHandler;
        this.view = new View;
        this.start();
    }

    async start() {
        console.log('MainController start()');
        while(true) {
            let game = await this.startMenu();
            await this.startGame(game);
        }
    }

    async startGame(gameController) {
        console.log('MainController startGame');
        const game = new gameController(this.view, this.eventHandler);
        await game.start();
    }

    async startMenu() {
        console.log('MainController startMenu')
        const menu = new Menu(this.view, this.eventHandler);
        return await menu.start();
    }
}

export default MainController;
