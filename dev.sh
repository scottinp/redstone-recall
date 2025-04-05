#!/bin/bash

# Start both frontend and backend dev servers concurrently

# Start backend
cd server
yarn dev &
SERVER_PID=$!

# Start frontend
cd ../client
yarn dev &

# Wait for both to finish (optional, CTRL+C will kill)
wait $SERVER_PID
