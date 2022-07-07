#!/usr/bin/env bash

SEPARADOR="---------- Nova Seção ----------"

NOME="Olá usuário"
echo "$NOME"

NUM_1=22
NUM_2=33

TOTAL=$((NUM_1+NUM_2))
echo "$TOTAL";

SAIDA_CAT=$(cat ./variables.sh);
echo "$SAIDA_CAT";

echo "$SEPARADOR";

echo "Parâmetro 1: $1"
echo "Parâmetro 2: $2"
echo "Todos os parâmetros: $*"
echo "Quantos parâmetros? $#"
echo "Saida do ultimo comando $?"
echo "PID do comando: $$"
echo "Nome do script $0"

echo "$SEPARADOR"