import Menu from './menu/MenuController';
import View from './view/View';

class MainController {
    constructor() {
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
        const game = new gameController(this.view);
        await game.start();
    }

    async startMenu() {
        console.log('MainController startMenu')
        const menu = new Menu(this.view);
        return await menu.start();
    }
}

export default MainController;
