const express = require('express');
const cluster = require('cluster');
const api = express();

// Master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
        console.log('Fork created');
    }
// Worker process
} else {
    api.get('/healthcheck/', (req, res) => {
        res.json({
            status: true,
            message: 'API ok!'
        });
    });

    api.listen(3000);
}

// Listen for dying workers
cluster.on('exit', function (worker) {
    // Replace the dead worker
    console.log('Worker %d died :(', worker.id);
    cluster.fork();
});
