# NodeJs API Skeleton
A simple skeleton to start projects using Node.js.

## Pre Requirements
- [Docker](https://www.docker.com): v17.06.0
- [Docker Compose](https://docs.docker.com/compose/): v1.14.0

## Structure
The Api have the structure below:
```md
├── Api/
│   ├── Routes/
│   └── Controllers/
├── Dockerfile
└── docker-compose.yml
```

## Development
To start the development, clone the project, edit the files and [run the project](#running).
```sh
git clone git@github.com:luizdesign/nodejs-api-skeleton.git
```

### Running
To run the project, execute the command:
```sh
docker-compose up
```

After it you can access [http://localhost:3000/healthcheck/](http://localhost:3000/healthcheck/).

### Rebuild Docker image
To rebuild the docker image, run the command below. It's necessary to build a new image with your changes.
```sh
docker-compose up --build
```

Or you can remove and create a new image:
```sh
docker images #returns all local docker images
docker rm $dockerImageName #remove the image named $dockerImageName
docker-compose up #recreate the image
```

## Contribute
You can contribute to improve the project by [opening issues](https://github.com/luizdesign/nodejs-api-skeleton/issues/new), and submitting [pull requests](https://github.com/luizdesign/nodejs-api-skeleton/pulls). However check the [issue list](https://github.com/luizdesign/nodejs-api-skeleton/issues) before to avoid duplicate issues.

Remember always on to check the [contribution guide](https://github.com/luizdesign/nodejs-api-skeleton/blob/master/CONTRIBUTING.md).
