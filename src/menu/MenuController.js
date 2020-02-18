import MenuModel from './MenuModel';
import { timeout } from '../helpers';

class MenuController {
    constructor() {
        console.log('MenuController constructor');
        this.model = new MenuModel;
    }

    async start() {
        console.log('MenuController start()');
        await timeout(10000);
        return this.model.getGame(0);
    }
}

export default MenuController;
