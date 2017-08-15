const express = require('express');
const cluster = require('cluster');
const routes = require('./Routes/');
const api = express();

// Master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
// Worker process
} else {
    routes(api);

    api.listen(
        3000,
        (err) => {
            if (err) {
                return console.log(`Error on starting application at worker ${cluster.worker.id}`);
            }

            console.log(`Application running on port 3000 at worker ${cluster.worker.id}`);
        }
    );
}

// Listen for dying workers
cluster.on(
    'exit',
    (worker) => {
        // Replace the dead worker
        console.log('Worker %d died :(', worker.id);
        cluster.fork();
    }
);
