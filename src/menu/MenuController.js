import MenuModel from './MenuModel';
import { timeout } from '../helpers';
import EventHandler from '../EventHandler';

class MenuController {
    constructor(eventHandler) {
        console.log('MenuController constructor');
        this.eventHandler = new EventHandler;
        this.model = new MenuModel;
    }

    async start() {
        console.log('MenuController start()');
        await timeout(10000);
        return this.model.getGame(0);
    }
}

export default MenuController;
