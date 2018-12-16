# Hito 3

[![Status](https://img.shields.io/badge/Status-Documenting-green.svg)](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/README.md)
[![Language](https://img.shields.io/badge/Language-Node-blue.svg)](https://nodejs.org/en/)
[![Heroku](https://img.shields.io/badge/Despliegue-Heroku-orange.svg)](https://dashboard.heroku.com)
[![License](https://img.shields.io/badge/License-GPL-red.svg)](https://github.com/jrtrillo/proyecto_cc/blob/master/LICENSE)

## Alumno:
Jose Ramón Trillo Vílchez

## Asigunatura: 
Cloud Computing

## Master: 
Máster Profesionalizante en Ingeniería Informática desarrollado durante el curso 2018/2019

## Documentación

El objetivo de este hito es realizar las acciones necesarias para que el microservicio que se está realizando pueda ejecutarse en una máquina virtual, en este caso una máquina virtual de Azure.

### Crear la máquina virtual.

Para crear la máquina virtual se puede realizar de dos formas:

	· Crear la máquina virtual a través de la página de Azure.
	· Crear la máquina virtual a traves de la terminal.

La primera es bastante sencilla y se realiza de la siguiente forma:
	
	1º Se accede al portal de azure.
	2º Se introducen los datos, tanto correo como contraseña.
	3º Una vez que se ha accedido al portal de azure se puede ver a la izquierda una pestaña que pone "máquinas virtuales". Se pincha en ese acceso.
	4º Se pulsa el botón agregar, simbolizado con una cruz de suma.
	5º Se rellena el formuliario y se pulsa crear.

De esta forma ya se habrá creado la máquina virtual deseada.

La segunda forma es desde la terminal y se hace de la siguiente forma (se ha seguido el [enlace](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-linux?view=azure-cli-latest):

	1º Instalar azure cli con el siguiente código:
		- curl -L https://aka.ms/InstallAzureCli | bash
	2º Una vez instalado se accede a azure cli con el código:
		- az login
	3º Ya seleccionado el correo deseado e introducida la contraseña ya se puede crear la máquina virtual.
	4º 	Se crea el recuro de la siguiente forma:
		- az group create --name (Nombre_Recurso) --location (Localización deseada)
	5º Ahora se crea la máquina virtual de con el siguiente código:
		- az vm create -m (Nombre_Máquina) -g (Nombre_Recurso) --image (Sistema_Operativo) --admin-username (Nombre_usuario) --generate-ssh-keys.

Y así se crea la máquina virtual.

### Provisonamiento