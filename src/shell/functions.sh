#!/usr/bin/env bash

function HelloWorld() {
    echo "HelloWorld"
}

HelloWorld;

function Print(){
    echo $1
}
Print olá

function Print2(){
    echo $name
}
name="jonas"
Print2;