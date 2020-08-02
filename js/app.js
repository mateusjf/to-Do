function ToDo() {
    this.todo = JSON.parse(localStorage.getItem('todo-list')) || new Array();
    this.lista = document.getElementById('lista');
    this.input = document.getElementById('tarefa');
    this.botao = document.getElementById('adicionar');

    this.init = () => {
        this.renderizar();
        this.botao.onclick = this.adicionar;
    }

    this.renderizar = () => {
        this.lista.innerHTML = '';
        this.todo.forEach((valor) => {
            var novoLi = document.createElement('li');
            novoLi.textContent = valor;

            var novoBotao = document.createElement('button');
            novoBotao.textContent = 'Excluir';
            novoBotao.className = 'excluir';
            novoBotao.addEventListener('click', () => {
                var indice = this.todo.indexOf(valor);
                this.todo.splice(indice, 1);
                this.renderizar();
            })

            novoLi.appendChild(novoBotao);
            this.lista.appendChild(novoLi);
        });
        localStorage.setItem('todo-list', JSON.stringify(this.todo));
    }

    this.adicionar = () => {
        var tarefa = this.input.value;
        if (tarefa.trim() === '')
            return;

        this.todo.push(tarefa);
        this.input.value = '';
        this.renderizar();
    }
}

const app = new ToDo();
app.init();