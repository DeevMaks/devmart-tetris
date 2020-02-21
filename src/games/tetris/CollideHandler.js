class CollideHandler {
    constructor(model, block) {
        this.model = model;
        this.block = block;
        this.borderX = 10;
        this.borderY = 20;
    }

    get isCollideLeft() {
        const blockPosition = this.block.getPosition();
        return blockPosition.reduce((acc, {x, y}) => {
            const left = x - 1;
            if(left < 0) return true;
            return acc || this.model.field[y][left];
        }, false);
    }

    get isCollideRight() {
        const blockPosition = this.block.getPosition();
        return blockPosition.reduce((acc, {x, y}) => {
            const right = x + 1;
            if(right >= this.borderX) return true;
            return acc || this.model.field[y][right];
        }, false);
    }

    get isCollideDown() {
        const blockPosition = this.block.getPosition();
        return blockPosition.reduce((acc, {x, y}) => {
            const bottom = y + 1;
            if(bottom >= this.borderY) return true;
            return acc || this.model.field[bottom][x];
        }, false);
    }

    get isCanRotate() {
        const blockPosition = this.block.getRotatePosition();
        return !blockPosition.reduce((acc, {x, y}) => {
            if((x <= 0) || (x >= this.borderX)) return true;
            return acc || this.model.field[y][x];
        }, false)
    }
}

export default CollideHandler;
