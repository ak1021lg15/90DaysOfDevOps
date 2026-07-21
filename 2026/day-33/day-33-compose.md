# Day 33 – Docker Compose: Multi-Container Basics

## Challenge Tasks

### Task 1: Install & Verify
1. Check if Docker Compose is available on your machine if not then install
    
    ![docker compose](ss/task1.1.png)

2. Verify the version

    ![compose version](ss/task1.2.png)

---

### Task 2: Your First Compose File
1. Create a folder `compose-basics`
2. Write a `docker-compose.yml` that runs a single **Nginx** container with port mapping

    [Compose file](compose-basics/docker-compose.yml)

    ![image ](ss/task2.1.png)

3. Start it with `docker compose up`
    
    ![image](ss/task2.2.png)

4. Access it in your browser
    
    ![nginx](ss/task2.3.png)

5. Stop it with `docker compose down`

    ![down compose](ss/task2.4.png)

    ![after down web](ss/task2.5.png)
---

### Task 3: Two-Container Setup
Write a `docker-compose.yml` that runs:
- A **WordPress** container
- A **MySQL** container

They should:
- Be on the same network (Compose does this automatically)
- MySQL should have a named volume for data persistence
- WordPress should connect to MySQL using the service name

Start it, access WordPress in your browser, and set it up.

-Docker Compose file of wordpress and mysql container.
    [Compose file](wordpress-mysql-compose/docker-compose.yml)

- Folder create and `docker compose up`

    ![folder_dockerYML_docker_compose](ss/task3.1.png)

- Verify the container using `docker ps` command.

    ![docker ps](ss/task3.2.png)

- Verfiy the network `docker network ls`

    ![docker network ls](ss/task3.3.png)

- Verfify the volume `docker volume ls`

    ![docker volume ls](ss/task3.4.png)

- WordPress

    ![wordpressImage](ss/task3.5.png)
    ![wordpressinstallation](ss/task3.6.png)
    ![wp-admin](ss/task3.7.png)

**Verify:** Stop and restart with `docker compose down` and `docker compose up` — is your WordPress data still there?

- Yes,wordpress data is there.
![after down again up](ss/task3.8.png)
![after down login](ss/task3.9.png)
![after down wp-admin](ss/task3.10.png)

---

### Task 4: Compose Commands
Practice and document these:
1. Start services in **detached mode**

    `docker compose up -d`

    ![alt text](ss/task4.1.png)

2. View running services

    `docker compose ps`

    ![alt text](ss/task4.2.png)

3. View **logs** of all services


    ![all logs](ss/task4.3.png)

4. View logs of a **specific** service


    `docker compose logs db` && `docker compose logs wordpress`
    
    ![db and wordpress logs](ss/task4.4.png)


5. **Stop** services without removing

    `docker compose stop`
    ![stop compose](ss/task4.5.png)

6. **Remove** everything (containers, networks)

    `docker compose down`

    ![remove](ss/task4.6.png)

7. **Rebuild** images if you make a change

    `docker compose up --build.`

---

### Task 5: Environment Variables
1. Add environment variables directly in your `docker-compose.yml`
2. Create a `.env` file and reference variables from it in your compose file
3. Verify the variables are being picked up

    ![env](ss/task5.1.png)

    ![edited yml for env](ss/task5.2.png)
- Verified that Docker Compose successfully loaded all variables from the .env file and generated the expected configuration.
  
   ![docker compose config](ss/task5.3.png)

- Container start

   ![docker up](ss/task5.4.png)

- Verified the env inside the MYSQL Container

   ![inside the mysql container](ss/task5.5.png)
  
- Verified the env inside the Wordpress Container

   ![inside the wordpress container](ss/task5.6.png)


    [Compose file](wordpress-mysql-compose-env/docker-compose.yml)
