class View {
    constructor() {
        this._bodyTasks = null;
        this._entryText = null;
        this._addTaskButton = null;
        
        this.init();
    }
    init = () => {
        this._bodyTasks = document.createElement("taskSpan");
        this._entryText = document.getElementById("myInput");
        this._addTaskButton = document.getElementById('add');
        this._addTaskButton.addEventListener('click', this.createTask);
    };

    getValue = () => {
        const value = this._entryText.value;
        return value;
    };

    createTask = () => {
        const value = this.getValue();
        let liLast = document.createElement("li");
        let t = document.createTextNode(value);
        liLast.appendChild(t);
        if (value === '') {
        alert("Please, write something!");
        } else {
            document.getElementById("myOL").appendChild(liLast);
        }
        this.clearInputValue();
        let span = this._bodyTasks;
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        liLast.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none";
            }
        };
    }

    clearInputValue = () => {
        document.getElementById("myInput").value = "";
    };

    checktask = () => {
        let close = document.getElementsByClassName("close");
        let i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none";

                let list = document.querySelector('ol');
                list.addEventListener('click', function(ev) {
                    if (ev.target.tagName === 'LI') {
                         ev.target.classList.toggle('checked');
                    }
                }, false);
        }
    }
}

new View();
