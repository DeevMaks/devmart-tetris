import { randomInteger } from '../../../helpers';
import BaseBlock from './BaseBlock';
import TBlock from './TBlock';
import JBlock from './JBlock';
import LBlock from './LBlock';
import ZBlock from './ZBlock';
import SBlock from './SBlock';
import IBlock from './IBlock';
import OBlock from './OBlock';

const blocksFabric = {
   createBlock(numberOfBlock = false) {
        const blocks = [
            (crd, pos) => new TBlock(crd, pos),
            (crd, pos) => new JBlock(crd, pos),
            (crd, pos) => new LBlock(crd, pos),
            (crd, pos) => new ZBlock(crd, pos),
            (crd, pos) => new SBlock(crd, pos),
            (crd, pos) => new IBlock(crd, pos),
            (crd, pos) => new OBlock(crd, pos),
        ];
        numberOfBlock = numberOfBlock ? numberOfBlock : randomInteger(0, 6);
        const startCoord = { x: randomInteger(3, 7), y: -2 };
        const startPos = randomInteger(0, 3);
        return blocks[numberOfBlock](startCoord, startPos)
    }
}

export default blocksFabric;
