// script

const { createApp } = Vue;

createApp(
    {
        data() {
            return {
                todo: data,
                    testo: '',
                    done: true
                  
            }
        },
        methods: {
            fatto(i) {
                this.todo[i].done = false;
            },
            rimuovi(i) {
                this.todo.splice(i, 1);
            },
            aggiungi(){
                if (this.testo.trim()) {
                this.todo.push({ testo: this.testo, done: this.done});
                console.log(this.todo);
                this.testo = '';
                }
            }
        }
    }
).mount('#apper');














