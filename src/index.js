
class View {
    constructor() {
        this._addTask = null;
        this._bodyTask = null;
        this._entryText = null;

        this.init();
    }

    init = () => {
        this._addTask = document.getElementById('add');
        this._bodyTask = document.querySelector('ul');
        this._entryText = document.getElementById('inputText');
        this._addTask.addEventListener('click', this.createTask)
        this._bodyTask.addEventListener('click',this.checkedTask)
    };

    getValue = () => this._entryText.value;

    createTask = () => {
        const txt = this.getValue();

        if (txt.length > 0) {
            this.createTaskElement(txt);
        } else {
            alert('пустое значение');
        }   
        
        this.closeTask();
        this.cleareValue();
    };

    cleareValue = () => {
        this._entryText.value = '';
    };

    closeTask = () => {
        const close = document.querySelectorAll('.close');
        
            close.forEach(closeButton => {
                closeButton.onclick = function () {
                    this.parentElement.remove();
                }
            });
        }

    addCloseBut = () => {
        const span = document.createElement("SPAN");
        const closeBut = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(closeBut);

        return span;
    }

    checkedTask = (ev) => {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }

    createTaskElement = (txt) => {
        const li = document.createElement('li');
        li.appendChild(this.addCloseBut());
        const liTxt = document.createTextNode(txt);
        li.appendChild(liTxt);
        this._bodyTask.appendChild(li);
    }
}

new View();
