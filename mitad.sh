#!/bin/bash

# Verificar si se proporciona un archivo como argumento
if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <archivo>"
    exit 1
fi

archivo=$1
total_lineas=$(wc -l < "$archivo")
mitad=$((total_lineas / 2))

# Dividir el archivo en dos mitades
head -n "$mitad" "$archivo" > mitad1.txt
tail -n +"$((mitad + 1))" "$archivo" > mitad2.txt

echo "Archivo dividido en dos mitades: mitad1.txt y mitad2.txt"


# # Verificar si se proporciona un archivo como argumento
# if [ "$#" -ne 1 ]; then
#     echo "Uso: $0 <archivo>"
#     exit 1
# fi

# archivo=$1
# total_lineas=$(wc -l < "$archivo")
# mitad=$((total_lineas / 2))

# # Dividir el archivo en dos mitades
# head -n "$mitad" "$archivo" > mitad1.txt
# tail -n +"$((mitad + 1))" "$archivo" > mitad2.txt

# echo "Archivo dividido en dos mitades: mitad1.txt y mitad2.txt"
