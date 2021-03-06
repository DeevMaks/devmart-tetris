import MenuModel from './MenuModel';
import { timeout } from '../helpers';

class MenuController {
    constructor(view, eventHandler) {
        this.view = view;
        this.eventHandler = eventHandler;
        this.model = new MenuModel;

        this.eventHandler.on('start', (() => this.model.selected = true).bind(this))
    }

    async start() {
        console.log('MenuController start()');
        this.view.field.draw(this.model.getIcon(), { x: 4, y: 8 }, { x: 6, y: 11 });
        while(!this.model.selected){
            await timeout(500);
        }
        this.view.field.clear();
        return this.model.getGame();
    }
}

export default MenuController;
