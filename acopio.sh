#!/bin/bash


echo "Se crea el grupo de recursos"
#se crea el grupo de recurso con el nombre de hito 4 y la localización en el oeste de europa.
az group create --name hito4 --location westeurope 

echo "Se crea la máquina Virtual"

#Se crea la máquina virtal con los parámetros que se han analizado previamente.
az vm create -n ubuntu7 -g hito4 --image Canonical:UbuntuServer:18.04-LTS:18.04.201901140 --admin-username jrtrillo --size Standard_B1s --ssh-key-value ~/.ssh/id_rsa.pub 

echo "Máquina Virtual creada"

# Se abre el puerto 80.
echo "Abrir puerto 80"
az vm open-port --resource-group hito4 --name ubuntu7 --port 80 




