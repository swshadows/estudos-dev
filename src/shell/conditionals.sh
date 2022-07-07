#!/usr/bin/env bash

VAR_1=""
VAR_2=" "

if [[ "$VAR_1" = "$VAR_2" ]] ; then
    echo "São iguais"
fi

if test "$VAR_1" = "$VAR_2"
then
    echo "São iguais"
else
    echo "São diferentes"
fi

[ "$VAR_1" = "$VAR_2" ] && echo "São iguais"

VAR_3="awe"
case $VAR_3 in
    a) echo "Variável é a" ;;
    b) echo "Variável é b" ;;
    *) echo "Outro valor";;
esac