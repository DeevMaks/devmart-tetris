class BaseBlock {
    constructor(coord, pos) {
        this.canonicalCoord = coord || { x: 4, y: -1 };
        this.currentPosition = pos || 0;

        this.calcFunctions = [
            coord => [
                {x: coord.x, y: coord.y}
            ],
            coord => [
                {x: coord.x, y: coord.y}
            ],
            coord => [
                {x: coord.x, y: coord.y}
            ],
            coord => [
                {x: coord.x, y: coord.y}
            ],
        ];
    }

    rotate(back = false) {
        this.currentPosition < 3 ? this.currentPosition++ : this.currentPosition = 0;
        console.log(this.currentPosition);
    }

    move(x, y) {
        this.canonicalCoord.x += x;
        this.canonicalCoord.y += y;
    }

    moveLeft() {
        this.canonicalCoord.x--;
    }

    moveRight() {
        this.canonicalCoord.x++;
    }

    stepDown() {
        this.canonicalCoord.y++;
    }

    getPosition(pos = false){
        let coordinations = [];
        if(pos) {
            coordinations = this.calcFunctions[pos](this.canonicalCoord);
        } else {
            coordinations = this.calcFunctions[this.currentPosition](this.canonicalCoord);
        }
        return coordinations.filter(coord => coord.y >= 0);
    }

    getRotatePosition(){
        const position = this.currentPosition < 3 ? this.currentPosition + 1 : 0;
        return this.getPosition(position);
    }
}

export default BaseBlock;
