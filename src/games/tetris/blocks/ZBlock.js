import BaseBlock from './BaseBlock';

class ZBlock extends BaseBlock {
    constructor(coord, pos) {
        super(coord, pos);
    }

    getPosition(pos = false){
        const calcFunctions = [
            coord => [
                {x: coord.x - 1, y: coord.y},
                {x: coord.x, y: coord.y},
                {x: coord.x, y: coord.y - 1},
                {x: coord.x + 1, y: coord.y - 1},
            ],
            coord => [
                {x: coord.x, y: coord.y - 1},
                {x: coord.x, y: coord.y},
                {x: coord.x + 1, y: coord.y},
                {x: coord.x + 1, y: coord.y + 1},
            ],
            coord => [
                {x: coord.x - 1, y: coord.y},
                {x: coord.x, y: coord.y},
                {x: coord.x, y: coord.y - 1},
                {x: coord.x + 1, y: coord.y - 1},
            ],
            coord => [
                {x: coord.x, y: coord.y - 1},
                {x: coord.x, y: coord.y},
                {x: coord.x + 1, y: coord.y},
                {x: coord.x + 1, y: coord.y + 1},
            ],
        ];
        let coordinations = [];
        if(pos) {
            coordinations = calcFunctions[pos](this.canonicalCoord);
        } else {
            coordinations = calcFunctions[this.currentPosition](this.canonicalCoord);
        }
        return coordinations.filter(coord => coord.y >= 0);
    }

    getRotatePosition(){
       const position = this.currentPosition < 3 ? this.currentPosition + 1 : 0;
       return this.getPosition(position);
    }
}

export default ZBlock;
