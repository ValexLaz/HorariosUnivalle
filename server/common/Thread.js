const { Worker, isMainThread } = require('worker_threads');

class Thread {
    constructor(file) {
        this.file = file;
        this.worker = false;
    }
    run=()=>{
        console.log("Error Override this function")
    }
    start() {
        if (isMainThread) {
            const worker = new Worker(this.file, {
                workerData: this.serialize(),
            });
            worker.on('message', msg => {
                console.log('Mensaje del worker:', msg);
            });
            worker.on('error', err => {
                console.error('Error en el worker:', err);
            });
            worker.on('exit', code => {
                if (code !== 0)
                    console.error('El worker salió con un código de error:', code);
            });
            worker.postMessage('start');
            return worker;

        } else {
            this.deserialize(workerData);
            this.run();
        }
    }
    serialize() {
        return JSON.stringify({
            className: this.constructor.name,
            properties: this,
        });
    }

    deserialize(data) {
        Object.assign(this, data.properties);
    }
}

module.exports = Thread