#! /bin/bash

# echo $0
# echo $1
# echo $2

export env=$1

# Check if docker is installed
if ! docker -v; then
    echo "Docker might not be installed"
    exit 3
fi

# Check if docker compose is installed
if ! docker-compose -v; then
    echo "Docker compose might not be installed"
    exit 4
fi

if ! git pull; then 
    echo "Error pulling latest version from git"
    exit 5
fi


# Pull specified app version from docker registry
if ! docker-compose -f $PWD/docker/docker-compose.$env.yml pull; then 
    echo "Unable to pull application from registry"
    exit 12
fi

# Make sure current containers are stopped
if ! docker-compose -f $PWD/docker/docker-compose.$env.yml stop; then
    echo "Unable to stop running containers"
    exit 11
fi

# Start containers in background
if ! docker-compose -f $PWD/docker/docker-compose.$env.yml up -d; then 
    echo "Unable to start containers"
    exit 13
fi

# Display all running containers
if ! docker ps; then 
    echo "Unable to list running containers"
    exit 14
fi

echo "Done"

