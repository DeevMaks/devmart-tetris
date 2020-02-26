import BaseBlock from './BaseBlock';

class IBlock extends BaseBlock {
    constructor(coord, pos) {
        super(coord, pos);

        this.calcFunctions = [
            coord => [
                {x: coord.x - 2, y: coord.y},
                {x: coord.x - 1, y: coord.y},
                {x: coord.x, y: coord.y},
                {x: coord.x + 1, y: coord.y},
            ],
            coord => [
                {x: coord.x, y: coord.y - 2},
                {x: coord.x, y: coord.y - 1},
                {x: coord.x, y: coord.y},
                {x: coord.x, y: coord.y + 1},
            ],
            coord => [
                {x: coord.x - 2, y: coord.y},
                {x: coord.x - 1, y: coord.y},
                {x: coord.x, y: coord.y},
                {x: coord.x + 1, y: coord.y},
            ],
            coord => [
                {x: coord.x, y: coord.y - 2},
                {x: coord.x, y: coord.y - 1},
                {x: coord.x, y: coord.y},
                {x: coord.x, y: coord.y + 1},
            ],
        ];
    }

}

export default IBlock;
