# Mind Notes

**Mind Notes** is a comprehensive solution to create and manage your notes efficiently. This system is split into three main components: Client, Server, and Database.

## Client - `/client`

This is the frontend of the Mind Notes application. Further details on setup and usage can be found inside the `/client` directory.

## Server - `/server`

The server is built using:

- **Express**: For managing routes and middleware.
- **GraphQL**: A query language for the API.
- **Prisma**: An open-source database toolkit.
- **Typescript**: Provides static typing.

To get started with the server, navigate to the `/server` directory and follow the setup instructions.

## Database - Postgres - `/postgres`

Mind Notes uses a PostgreSQL database which runs inside a Docker container.

### Setup:

1. **Environment File**:
   Create a `.env` file in the root of the `/postgres` directory. Populate the file with the following:
   ```bash
   POSTGRES_USER=your_username
   POSTGRES_PASSWORD=your_password
   ```

Database running in Docker container(postgres) .

1. in postgres folder run this script `./run_postgres_container.sh` to and run Postgres container.
