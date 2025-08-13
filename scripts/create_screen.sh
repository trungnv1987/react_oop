#!/bin/bash

create() {
  echo "Creating screen..."

  path="./src/screens"

  cd "$path" || { echo "Error: Cannot change directory to $path"; exit 1; }

  read -p "Enter folder name: " folder_name

  camel_case_name=$(echo "$folder_name" | awk -F'_' '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1' OFS='')
  rm -rf "$folder_name" && cp -r sample "$folder_name"

  # Step 2: Rename each file inside the folder
  find "$folder_name" -type f | while read -r file; do
    new_name=$(echo "$file" | sed "s/sample/$folder_name/")
    mv "$file" "$new_name"
  done

  # Step 3: Replace content inside files
  export LC_ALL=C  # Fix encoding issue on macOS

  # Replace "sample" with folder_name
  find "$folder_name" -type f -exec sed -i '' "s#sample#$folder_name#g" {} \;

  # Replace "Sample" with camelCaseName
  find "$folder_name" -type f -exec sed -i '' "s/Sample/$camel_case_name/g" {} \;

  echo "Folder and files renamed successfully!"
}

# ✅ Proper dispatcher
case "$1" in
  create)
    create
    ;;
  *)
    echo "Usage: $0 create"
    exit 1
    ;;
esac
