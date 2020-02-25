class ControlHandler {
    constructor(eventHandler, model, collideHandler, block){
        this.eventHandler = eventHandler;
        this.collideHandler = collideHandler;
        this.model = model;
        this.block = block;

        this.eventHandler.on('moveLeft', (() => this.moveLeft()).bind(this));
        this.eventHandler.on('moveRight', (() => this.moveRight()).bind(this));
        this.eventHandler.on('action', (() => this.rotate()).bind(this));
        this.eventHandler.on('moveDown', (() => this.drop()).bind(this));
        this.eventHandler.on('pause', (() => this.pause()).bind(this));
        this.eventHandler.on('start', (() => this.exit()).bind(this));
    }

    moveLeft() {
        if(!this.collideHandler.isCollideLeft) {
            this.block.moveLeft();
        }
    }

    moveRight() {
        if(!this.collideHandler.isCollideRight) {
            this.block.moveRight();
        }
    }

    drop() {
        this.model.isDrop = true;
    }

    rotate() {
        if(this.collideHandler.isCanRotate) {
            this.block.rotate();
        }
    }

    pause() {
        this.model.isPause = !this.model.isPause;
    }

    exit() {
        this.model.isExit = true;
    }
}

export default ControlHandler;
