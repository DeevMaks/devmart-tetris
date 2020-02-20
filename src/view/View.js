import Field from './Field';
import Sidebar from './Sidebar';

class View {
    constructor(){
        this.field = new Field;
        this.sidebar = new Sidebar;
    }
}

export default View;
