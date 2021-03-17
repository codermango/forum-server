#! /bin/bash

# Check if environment argument has been passed
if [ -z "$1" ]
  then
    echo "Application environment (qa|live) not specified"
    exit 1
fi

# Set app environment in env variables
export env=$1
echo "Application environment $env"

# Make sure current containers are stopped
if ! docker-compose -f $PWD/docker/docker-compose.$env.yml stop; then
    echo "Unable to stop running containers"
    exit 11
fi

# Display all running containers
if ! docker ps; then 
    echo "Unable to list running containers"
    exit 14
fi

echo "Done"