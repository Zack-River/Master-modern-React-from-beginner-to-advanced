#!/bin/bash

# Prompt the user for the project name
read -p "Enter the project name: " project_name

# Check if the user actually typed something
if [ -z "$project_name" ]; then
  echo "Project name cannot be empty. Exiting."
  exit 1
fi

echo "Scaffolding Vite React project: $project_name..."
npx create-vite@latest "$project_name" --template react

# Check if the folder was created successfully
if [ -d "$project_name" ]; then
  cd "$project_name" || exit
  
  echo "Installing dependencies (this might take a moment)..."
  npm install
  
  echo "Done! Your project is ready."
  echo ""
  echo "To start development, run:"
  echo "  cd $project_name"
  echo "  npm run dev"
else
  echo "Failed to create the project directory."
  exit 1
fi
