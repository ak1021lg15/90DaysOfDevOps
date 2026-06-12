#!/bin/bash

read -p "Enter the filename you want to check: " filename

if [ -f "$filename" ]; then
        echo "The file $filename exists."
else
        echo "The file $filename does not exist."
fi
