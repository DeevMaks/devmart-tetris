import TetrisModel from './TetrisModel';
import { timeout } from '../../helpers';
import EventHandler from '../../EventHandler';

class TetrisController {
    constructor(view) {
        this.view = view;
        this.eventHandler = new EventHandler;
        this.model = new TetrisModel;
    }

    async start() {
        console.log('TetrisController start()');
        await timeout(10000);
        return true;
    }
}

export default TetrisController;
