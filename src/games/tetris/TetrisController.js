import TetrisModel from './TetrisModel';
import { timeout } from '../../helpers';
import EventHandler from '../../EventHandler';

class TetrisController {
    constructor(eventHandler) {
        console.log('TetrisController constructor');
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
