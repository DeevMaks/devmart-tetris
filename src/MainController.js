import Menu from './menu/MenuController';

class MainController {
    constructor() {
        console.log('MainController constructor()');
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
        const game = new gameController();
        await game.start();
    }

    async startMenu() {
        console.log('MainController startMenu')
        const menu = new Menu;
        return await menu.start();
    }
}

export default MainController;
