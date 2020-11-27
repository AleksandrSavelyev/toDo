class Wiev {
    constructor() {
        this._bodyTask = null;
        this._entryText = null;
        this._addTask = null;

        this.init();
    }

    init = () => {
        this._bodyTask = document.createElement('li');
        this._entryText = document.getElementsById('inputText');
        this._addTask = document.getElementById('add');
        this._addTask.addEventListener('click', this.createTask)

    };

    getValue = () => {
        const val = this._entryText.value

        return val;
    };

    createTask = () => {
        
    };

    cleareValue = () => {};
}