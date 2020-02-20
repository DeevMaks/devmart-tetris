import eventMixin from './mixins/eventMixin'

class EventHandler {
    constructor() {
        document.addEventListener('keydown', this.keyboardPressed.bind(this));

        document.querySelector('#left-btn').addEventListener('click', this.leftBtnPressed.bind(this));
        document.querySelector('#right-btn').addEventListener('click', this.rightBtnPressed.bind(this));
        document.querySelector('#top-btn').addEventListener('click', this.upBtnPressed.bind(this));
        document.querySelector('#bottom-btn').addEventListener('click', this.downBtnPressed.bind(this));
        document.querySelector('#enter-btn').addEventListener('click', this.actionBtnPressed.bind(this));
        document.querySelector('#start-btn').addEventListener('click', this.startBtnPressed.bind(this));
        document.querySelector('#pause-btn').addEventListener('click', this.pauseBtnPressed.bind(this));
    }

    keyboardPressed(event) {
        if(event.code === 'ArrowLeft') {
            this.leftBtnPressed()
        }
        if(event.code === 'ArrowRight') {
            this.rightBtnPressed()
        }
        if(event.code === 'ArrowUp') {
            this.upBtnPressed()
        }
        if(event.code === 'ArrowDown') {
            this.downBtnPressed()
        }
        if(event.code === 'Space') {
            this.actionBtnPressed()
        }
        if(event.code === 'Escape') {
            this.pauseBtnPressed()
        }
        if(event.code === 'Enter') {
            this.startBtnPressed()
        }
    }

    leftBtnPressed() {
        console.log('event: ', 'moveLeft');
        this.emit('moveLeft');
    }

    rightBtnPressed() {
        console.log('event: ', 'moveRight');
        this.emit('moveRight');
    }

    upBtnPressed() {
        console.log('event: ', 'moveUp');
        this.emit('moveUp');
    }

    downBtnPressed() {
        console.log('event: ', 'moveDown');
        this.emit('moveDown')
    }

    actionBtnPressed() {
        console.log('event: ', 'action');
        this.emit('action')
    }

    pauseBtnPressed() {
        console.log('event: ', 'pause');
        this.emit('pause')
    }

    startBtnPressed() {
        console.log('event: ', 'start');
        this.emit('start')
    }
}

Object.assign(EventHandler.prototype, eventMixin);

export default EventHandler;
