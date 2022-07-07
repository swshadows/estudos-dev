#!/usr/bin/env bash

echo "For normal"
for (( i = 0; i < 10; i++ ))
do
    echo $i;
done

echo "For seq"
for i in $(seq 10); do
    echo $i;
done

echo "For array"
frutas=( 'Laranja' 'Maçã' 'Pêra' )
for i in ${frutas[@]} ; do
    echo $i;
done
echo "While normal"
counter=0
while [[ $counter -lt ${#frutas[@]} ]]; do
    echo $counter
    counter=$(($counter+1))
done