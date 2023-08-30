#!/bin/bash

# Load the environment variables from the .env file
source .env

# Create a directory for persistent data if it doesn't exist
if [ ! -d "$HOME/docker/volumes/postgres" ]; then
  mkdir -p $HOME/docker/volumes/postgres
fi

# Run the Docker command with the environment variables sourced
docker run --name prisma-postgres \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e POSTGRES_DB=prisma \
  -p 5435:5432 \
  -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data \
  -d postgres
