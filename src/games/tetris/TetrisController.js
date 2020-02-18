import TetrisModel from './TetrisModel';
import { timeout } from '../../helpers';

class TetrisController {
    constructor() {
        console.log('TetrisController constructor');
        this.model = new TetrisModel;
    }

    async start() {
        console.log('TetrisController start()');
        await timeout(10000);
        return true;
    }
}

export default TetrisController;
