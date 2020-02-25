class BaseBlock {
    constructor(coord, pos) {
        this.canonicalCoord = coord || { x: 4, y: -1 };
        this.currentPosition = pos || 0;
    }

    rotate(back = false) {
        this.currentPosition < 4 ? this.currentPosition++ : 0;
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

    getPosition(){
        if(this.canonicalCoord.y < 0) return [];
        return [ this.canonicalCoord ];
    }

    getRotatePosition(){
       return this.getPosition(this.currentPosition + 1);
    }
}

export default BaseBlock;
