const api = require('express')();
const cluster = require('cluster');
const healthcheck = require('./healthcheck/healthcheck.router');

// Count the machine's CPUs
const cpuCount = require('os').cpus().length;

// Master process
if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
// Worker process
} else {
  api.use(healthcheck);

  api.listen(
    3000,
    (err) => {
      if (err) {
        return console.log(`Error on starting application at worker ${cluster.worker.id}`);
      }

      return console.log(`Application running on port 3000 at worker ${cluster.worker.id}`);
    },
  );
}

// Listen for dying workers
cluster.on(
  'exit',
  (worker) => {
    // Replace the dead worker
    console.log('Worker %d died :(', worker.id);
    cluster.fork();
  },
);
