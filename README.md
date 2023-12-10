
![Untitleds](https://github.com/KrzysztofSikora/nestjs-backend-api/assets/17338476/d863226d-270a-4369-b7f0-a8406150ccee)

![Untitled](https://github.com/KrzysztofSikora/nestjs-backend-api/assets/17338476/f2c278d9-3c90-499b-b581-a927f4bc46ec)

## 🍀 Stacks

To build this project using the amazing stack including:

- NestJS
- Mongodb
- Docker
- Docker Compose
- Mongoose
- Typescript



### Requirements

Before starting this project please install this stack in your computer machine.

- NodeJS
- NPM
- Docker

### Instalations

So let's install this project and up running now

1. Clone this repository by running this following command.
   ```bash
   git clone git@github.com:tutorial-box/basic-essentials-nestjs-backenda-api.git
   ```
3. Rename the `.env.example` file into `.env` file. then start using your own preference. Also, change the docker compose env variables using your own.
4. Start the development server by running
   ```bash
   npm run dev
   ```
5. 🎉 Good!, now open your browser and access [http://localhost:4000](https://localhost:4000)


6. To run docker
````
docker-compose up
````

7. Start mongo DB when stopped before.
````
docker start mongodb
````
// example of .env
PORT=4000

# DATABASE CONFIGS
````
DATABASE_NAME=admin
DATABASE_USER=test
DATABASE_PASS=testPassword
DATABASE_URI=mongodb://test:testPassword@0.0.0.0:27017/?authSource=admin
````

````
docker start mongodb
````
1. Run app locally

2. Import database dump file

```
works
```
Documentation
````localhost:4000/api is swagger````
<br/>

