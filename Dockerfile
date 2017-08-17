From node:8.1

WORKDIR /var/www/

COPY ./package.json /var/www/

RUN npm install
