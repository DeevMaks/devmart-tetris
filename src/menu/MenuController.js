import MenuModel from './MenuModel';
import { timeout } from '../helpers';
import EventHandler from '../EventHandler';

class MenuController {
    constructor(view) {
        this.view = view;
        this.eventHandler = new EventHandler;
        this.model = new MenuModel;

        this.eventHandler.on('start', (() => this.model.selected = true).bind(this))
    }

    async start() {
        console.log('MenuController start()');
        this.view.field.draw(this.model.getIcon(), { x: 4, y: 8 }, { x: 6, y: 11 });
        while(!this.model.selected){
            await timeout(500);
        }
        return this.model.getGame();
    }
}

export default MenuController;
