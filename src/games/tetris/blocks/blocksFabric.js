import BaseBlock from './BaseBlock';

const blocksFabric = {
    createBlock(numberOfBlock = false) {
        const blocks = [
            () => new BaseBlock
        ];
        const random = () => 0;
        return numberOfBlock ? blocks[numberOfBlock]() : blocks[random()]();
    }
}

export default blocksFabric;
