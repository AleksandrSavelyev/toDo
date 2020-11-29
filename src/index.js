class Wiev {
    constructor() {
        this._bodyTask = null;
        this._entryText = null;
        this._addTask = null;

        this.init();
    }

    init = () => {
        this._bodyTask = document.createElement('li');
        this._entryText = document.getElementById('inputText');
        this._addTask = document.getElementById('add');
        this._addTask.addEventListener('click', this.createTask)

    };

    getValue = () => {
        const val = this._entryText.value

        return val;
    };

    createTask = () => {
        let txt = this.getValue();
        if (txt.length > 0) {
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            li.appendChild(this.addCloseBut());
            let liTxt = document.createTextNode(txt);
            li.appendChild(liTxt);
            ul.appendChild(li);
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
        let close = document.getElementsByClassName('close');
        
        for(let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    addCloseBut = () => {
        let span = document.createElement("SPAN");
        let closeBut = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(closeBut);

        return span;
    }
}

new Wiev;

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
