#!/bin/bash

if [[ ! -f .env ]]
then
    echo "No .env found, created it"
    cp env .env
fi
docker compose up --build