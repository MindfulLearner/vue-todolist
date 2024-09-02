// script

const { createApp } = Vue;

createApp(
    {
        data() {
            return {
                // inizializzo todo con data separata in una altro js 
                todo: data,
                // testo vuoto e done true
                testo: '',
                done: true
            }
        },
        methods: {
            // funzione che mi fa mettere le linea sulla scritta 
            fatto(i) {
                this.todo[i].done = false;
            },
            // funzione che rimuove quello selezionato
            rimuovi(i) {
                this.todo.splice(i, 1);
            },
            // funzione che mi fa aggoingere attravero input, usiamo codnizione se trim cosi non viene aggiunto stringa vuota 
            aggiungi(){
                if (this.testo.trim()) {
                    // pushing new text
                    this.todo.push({testo: this.testo, done: this.done});
                    //rimuoviamo spazi per scrivere ancora
                    this.testo = '';
                }
            }
        }
    }
).mount('#apper');



