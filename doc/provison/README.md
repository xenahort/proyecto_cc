# Hito 3

[![Status](https://img.shields.io/badge/Status-Documenting-green.svg)](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/README.md)
[![Language](https://img.shields.io/badge/Language-Node-blue.svg)](https://nodejs.org/en/)
[![Heroku](https://img.shields.io/badge/Despliegue-Heroku-orange.svg)](https://dashboard.heroku.com)
[![License](https://img.shields.io/badge/License-GPL-red.svg)](https://github.com/jrtrillo/proyecto_cc/blob/master/LICENSE)

## Alumno:
Jose Ramón Trillo Vílchez

## Asignatura: 
Cloud Computing

## Master: 
Máster Profesionalizante en Ingeniería Informática desarrollado durante el curso 2018/2019

## Documentación

Antes de comenzar se ha añadido cuatro funciones al proyecto, a saber:

	·TweetsAntesAnho: Muestra todos los comentarios antes del año indicado.
  	·TweetsDespuesAnho: Muestra todos los comentarios después del año indicado.
  	·EtiquetasPositivas: Muestra todos los comentarios con etiquetas positivas.
  	·EtiquetasNegativas: Muestra todos los comentarios con etiquetas negativas.


El objetivo de este hito es realizar las acciones necesarias para que el microservicio que se está realizando pueda ejecutarse en una máquina virtual, en este caso una máquina virtual de Azure.

### Crear la máquina virtual.

Para crear la máquina virtual se puede realizar de dos formas:

	· Crear la máquina virtual a través de la página de Azure.
	· Crear la máquina virtual a través de la terminal.

La primera es bastante sencilla y se realiza de la siguiente forma:
	
	1º Se accede al portal de azure.
	2º Se introducen los datos, tanto correo como contraseña.
	3º Una vez que se ha accedido al portal de azure se puede ver a la izquierda una pestaña que pone "máquinas virtuales". Se pincha en ese acceso.
	4º Se pulsa el botón agregar, simbolizado con una cruz de suma.
	5º Se rellena el formulario y se pulsa crear.

De esta forma ya se habrá creado la máquina virtual deseada.

La segunda forma es desde la terminal y se hace de la siguiente forma (se ha seguido el [enlace](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-linux?view=azure-cli-latest) ):

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

En nuestro caso la máquina virtual será:

	· Nombre de la máquina virtual: Ubuntu.
	· Nombre del recurso: Hito3.
	· Sistema operativo: Linux.
	· Ubicación: Oeste de Europa.
	· Usuario: jrtrillo.
	· Puertos: 80 y 22.
	· Dirección IP:  13.81.219.190
	· Tipo de IP Estática.

Aquí se puede ver la imágen de la máquina virtual [enlace](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/imagen1.JPG)
### Provisonamiento

 El provisonamiento se va a realizar a través de Ansible. Ansible posee algunas ventajas con respecto a otras herramientas de provisonamiento como su fácil ejecución o una interfaz de provisonamiento. Además, está programado en Python.

 Para realizar el provisonamiento se va a crear tres archivos:

 1º playbook.yml: Este archivo contiene la receta de provisonamiento. Esta receta realiza lo siguiente:

 	· Instala git.
 	· Instala curl.
 	· Descarga el repositorio del proyecto.
 	· Instala NPM.
 	· Instala PM2.
 	· Instala nodejs junto a con sus dependencias.

2º ansible_hosts: Es el archivo que agrupa los diferentes hosts y se tiene que especificar:

	- El nombre de la máquina.
	- IP pública.
	- El puerto SSH de conexión
	- El usuario necesario.
	- El archivo de clave privada ssh de ansible.  

3º ansible.cfg: Es el archivo que hace que cuando el cliente SSH quiera acceder a la máquina no pida autorización para conectarse. Por otro lado, se le pasa la ruta del ansible_host que es el que tiene en cuenta el cliente de ansible.

## Imagen de nuestra verificación

Ver el siguiente [enlace](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/Verificaci%C3%B3n%20nuestra.JPG)

## Verificación de un compañero: Miguel Goncalves

Se realiza al compañero Miguel Goncalves. Para ello, lo primero que se hace es copiar su archivo .yml y se crea una máquina virtual con el sistema operativo Ubuntu 16 con los puertos 22 y 80 abiertos.

Una vez que ejecutamos su aprovisonamiento nos sale la siguiente [imagen](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/aprovisamientomiguel.JPG).

Cuando nos introducimos, para ver si se ha realizado el despliegue devuelve la siguiente [imagen](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/resultados1.JPG)