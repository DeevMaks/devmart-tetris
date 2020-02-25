class TetrisModel {
    constructor() {
        this.score = 0;
        this.isDrop = false;
        this.isPause = false;
        this.isExit = false;
        this.field = this.initField();
    }

    initField() {
        let field = [];
        for(let i = 0; i < 20; i++) {
            field[i] = this.initRow();
        }
        return field;
    }

    initRow() {
        let row = []
        for(let j = 0; j < 10; j++){
            row[j] = false;
        }
        return row;
    }

    addPixels(pixels){
        pixels.forEach(({x, y}) => this.field[y][x] = true);
    }

    isLineFull(line) {
       return this.field[line].reduce((acc, pixel) => pixel && acc, true);
    }

    get isLoose() {
        return this.field[0].reduce((acc, pixel) => acc || pixel, false);
    }

}

export default TetrisModel;
