class Field {
    constructor() {
        this.$field = document.querySelector('#field');
        this.initField();
    }

    initField() {
        for(let i = 0; i < 20; i++) {
            for(let j = 0; j < 10; j++){
                const $pixel = document.createElement('div');

                $pixel.classList.add('pixel');
                $pixel.setAttribute('data-coord', `${j};${i}`);

                this.$field.append($pixel);
            }
        }
    }

    draw(field, start = { x: 0, y: 0 }, end = { x: 10, y: 20 }){
        for(let i = start.y; i < end.y; i++) {
            for(let j = start.x; j < end.x; j++){
                const $pixel = this.$field.querySelector(`[data-coord="${j};${i}"]`);
                if(field[i - start.y][j - start.x]) {
                    $pixel.classList.add('active')
                } else {
                    $pixel.classList.remove('active');
                }
            }
        }
    }
}

export default Field;
