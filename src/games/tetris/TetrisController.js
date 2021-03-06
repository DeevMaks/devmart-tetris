import TetrisModel from './TetrisModel';
import { timeout, arrayClone } from '../../helpers';
import blocksFabric from './blocks/blocksFabric';
import CollideHandler from './CollideHandler';
import ControlHandler from './ControlHandler';

class TetrisController {
    constructor(view, eventHandler) {
        this.view = view;
        this.eventHandler = eventHandler;
        this.model = new TetrisModel;
        this.currentBlock = blocksFabric.createBlock();
        this.nextBlock = blocksFabric.createBlock();
        this.collideHandler = new CollideHandler(this.model, this.currentBlock);
        this.controlHandler = new ControlHandler(this.eventHandler, this.model, this.collideHandler, this.currentBlock);
    }

    async start() {
        console.log('TetrisController start()');
        while(!this.model.isLoose) {
            await this.round();
            this.removeLines();
            if(this.model.isExit) {
                return;
            }
        }
        this.view.field.clear();
        return true;
    }

    async round() {
        this.model.isDrop = false;
        while(!this.collideHandler.isCollideDown) {
            await this.step();
            if(this.model.isPause) {
                await this.pause();
            }
            if(this.model.isExit) {
                return;
            }
        }
        this.model.addPixels(this.currentBlock.getPosition());
        this.changeBlock();
    }

    async step() {
        this.currentBlock.stepDown();
        await timeout(this.getDelay());
        this.view.field.draw(this.getFrame());
    }

    async pause() {
        while(this.model.isPause) {
            await timeout(500);
        }
    }

    getFrame() {
        const field = arrayClone(this.model.field);
        const block = this.currentBlock.getPosition();

        block.forEach(({x, y}) => field[y][x] = true);

        return field;
    }

    getDelay() {
        if(this.model.isDrop) return 0;
        return 600 - (this.model.score / 100);
    }

    changeBlock() {
        this.currentBlock = this.nextBlock;
        this.nextBlock = blocksFabric.createBlock();
        this.collideHandler.block = this.currentBlock;
        this.controlHandler.block = this.currentBlock;
    }

    removeLines() {
        let removedLines = 0
        for(let i = 0; i < 20; i++) {
            if(this.model.isLineFull(i)) {
                removedLines++
                this.model.field.splice(i, 1);
                this.model.field.unshift(this.model.initRow());
            }
        }
        this.setScore(removedLines);
    }

    setScore(lines) {
        let score = 0;
        if(lines === 1) {
            score = 100;
        } else if(lines === 2) {
            score = 300;
        } else if(lines === 3) {
            score = 700;
        } else if(lines === 4) {
            score = 1500;
        }

        this.model.score += score;
    }

}

export default TetrisController;
