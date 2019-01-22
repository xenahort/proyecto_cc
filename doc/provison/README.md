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

Antes de comenzar se producido el siguiente cambio en el documento index.js. Este es el siguiente:

	Se ha sustituido la base de datos que se tenía por una base de datos en MongoDB, sustituyendo las funciones post, put, delete y get y comentando las funciones de búsqueda que se tenían haciendo así una reutilización en un futuro.

Con respecto al reenvio:
	
	Aparte de realizar el cambio mencionado, se ha solucionado el problema de travis y también, se ha corregido los problemas de la documentación.

Según el [tema](http://jj.github.io/CC/documentos/temas/Provision), el objetivo de este hito es realizar las acciones necesarias para que el microservicio que se está realizando pueda ejecutarse en una máquina virtual, en este caso una máquina virtual de Azure.

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

La segunda forma es desde la terminal y se hace de la siguiente forma (se ha seguido el [enlace](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-linux?view=azure-cli-latest) y el [enlace](https://docs.microsoft.com/en-us/cli/azure/azure-cli-vm-tutorial?tutorial-step=2&view=azure-cli-latest) ):

	1º Instalar azure cli con el siguiente código:
		- curl -L https://aka.ms/InstallAzureCli | bash
	2º Una vez instalado se accede a azure cli con el código:
		- az login
	3º Ya seleccionado el correo deseado e introducida la contraseña ya se puede crear la máquina virtual.
	4º 	Se crea el recuro de la siguiente forma:
		- az group create --name (Nombre_Recurso) --location (Localización deseada)
	5º Ahora se crea la máquina virtual de con el siguiente código:
		- az vm create -m (Nombre_Máquina) -g (Nombre_Recurso) --image (Sistema_Operativo) --admin-username (Nombre_usuario) --ssh-key-value ~/.ssh/id_rsa.pub.

Y así se crea la máquina virtual.

En nuestro caso la máquina virtual será:

	· Nombre de la máquina virtual: Ubuntu1.
	· Nombre del recurso: Hito3.
	· Tamaño Standard D2s v3 (2 vcpu, 8 GB de memoria).
	· Sistema operativo: Ubuntu Server 18 LTS.
	· Ubicación: Oeste de Europa.
	· Usuario: jrtrillo.
	· Puertos: 80 y 22.
	· Dirección IP:  51.144.78.154
	· Tipo de IP Estática.

Se ha elegido Ubuntu Server 18 LTS porque los paquetes cuando se instalan, en el aprovisonamiento, utilizan apt-get y si se decide utilizar otro sistema operativo, como por ejemplo Centos, se tendría que cambiar. [enlace](https://www.hostinger.es/tutoriales/centos-vs-ubuntu-elegir-servidor-web/#gref). Por otro lado, se ha utilizado [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html) para medir la concurrencia y de su número de solicitudes a realizar para la sesión de benchmarking de los sistemas operativos Ubuntu Server 18 LST y Centos. Se obtiene los siguientes resultados para la concurrencia:

	· Ubuntu Server 18 LST: 59.64 segundos.
	· Centos : 59.92 segundos.

Y el tiempo para la otra medida es:

	· Ubuntu Server 18 LST: 3.05 segundos.
	· Centos: 3.18 segundos.

Con estos resultados se decide quedarse con el sistema operativo de Ubuntu Server 18 LTS, aunque la diferencia con Centos no es significativa.


Aquí se puede ver la imágen de la máquina virtual [enlace](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/imagen1.JPG)
### Provisionamiento

 El provisionamiento se va a realizar a través de Ansible. Ansible posee algunas ventajas con respecto a otras herramientas de provisionamiento como su fácil ejecución o una interfaz de provisionamiento. Además, está programado en Python.

 Para realizar el provisionamiento se va a crear tres archivos:

 1º playbook.yml: Este archivo contiene la receta de provisionamiento en ella se instala git, entre otras cosas porque nos descargamos el repositorio desde ahí, se instala curl porque es necesario para la instalación de Node, se instala node porque es el va a lanzar nuestro servicio y se instala pm2 porque es el encargado de mantener nuestro servicio abierto una vez que se haya cerrado la terminal. Esta receta realiza lo siguiente:

 	· Instala git:
 		·name: es lo que aparece en la terminal mientras se provisiona.
 		·become: es que se ejecute con root.
 		·apt: Es el comando que se va a ejecutar y el pkg es el argumento que se le pasa con su estado igual a presente
 	· Instala curl:
 		·name: es el nombre que aparecerá en la terminal durante el provisionamiento.
 		·become: es que se ejecute con root.
 		·apt: Es el comando que se va a ejecutar y el pkg es el argumento que se le pasa con su estado igual a presente.
 	· Se descarga NodeJS:
 		·become: es que se ejecute con root.
 		·shell: se ejecuta el comando que se pone en esta línea.
 	· Se instala NodeJS:
 		·name: es el nombre que aparecerá en la terminal durante el provisionamiento.
 		·become: es que se ejecute con root.
 		·apt: Es el comando que se va a ejecutar y el pkg es el argumento que se le pasa con su estado igual a presente.
 	· Se obtiene la clave pública de MongoDB.
 	· Se obtiene el repositorio de MongoDB.
 	· Se instala MongoDB.
 	· Se inicia el servicio de MongoDB.
 	· Se descarga GitHub del repositorio de Jose Ramón Trillo Vílchez: Se descarga el proyecto de git de Jose Ramón Trillo Vílchez.
 	· Se instala las dependencias del package.json:
 		·name: es lo que aparece en la terminal mientras se provisiona.
 		·raw: instala node dentro de la carpeta.
 	· Se instala NodeJS Process Manager (PM2):
 		·name: es lo que aparece en la terminal mientras se provisiona.
 		·npm: instala un paquete en node. 

2º ansible_hosts: Es el archivo que agrupa los diferentes hosts y se tiene que especificar:

	- El nombre de la máquina.
	- IP pública.
	- El puerto SSH de conexión
	- El usuario necesario.
	- El archivo de clave privada ssh de ansible.  

3º ansible.cfg: Es el archivo que hace que cuando el cliente SSH quiera acceder a la máquina no pida autorización para conectarse. Por otro lado, se le pasa la ruta del ansible_host que es el que tiene en cuenta el cliente de ansible.

## Imagen de nuestra verificación

Ver el siguiente [enlace](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/Verificaci%C3%B3n%20nuestra1.JPG).

## Funcionamiento:

Lo primero es cambiamos del puerto 3000 al puerto 80 por tanto, ahora el programa se ejecutará en el puerto 80 y no en el puerto 3000.

Una vez ejecutado el provisionamiento y cambiado el puerto, ejecutamos el comando:

	ansible-playbook -i ansible_hosts -b playbook.yml

y realizado el provisionamiento, activamos la máquina virtual y desde la terminal de ubuntu ejecutamos el siguiente comando:

	ssh -i ~/.ssh/id_rsa jrtrillo@23.97.141.162

De esta forma ya estamos dentro de la máquina virtual ubuntu1. Ahora nos movemos a proyecto_cc con el comando:

	cd proyecto_cc

Y ejecutamos el comando:

	sudo node index.js&

Sin cerrar la terminal vamos al buscador y ponemos la IP de la máquina virtual y aparecerá status ok si todo es correcto.

## Verificación de un compañero: Miguel Gonçalves

Se realiza al compañero Miguel Gonçalves. Para ello, lo primero que se hace es copiar su archivo .yml y se crea una máquina virtual con el sistema operativo Ubuntu 16 con los puertos 22 y 80 abiertos.

Para ello se realiza el aprovisionamiento, igual que lo hemos realizado con la nuestra.

Una vez que ejecutamos su aprovisonamiento nos sale la siguiente [imagen](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/aprovisamientomiguel.JPG).


Para verificar que todo es correcto se ve la siguiente imagen [imagen](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/resultados1.JPG)

## Prueba de Miguel Gonçalves en mi máquina


El compañero miguel Gonçalves en su ordenador y lo ha realizado todo correctamente quedando la siguiente [imagen](https://github.com/jrtrillo/proyecto_cc/blob/master/doc/provison/resultados%20de%20miguel%20en%20mi%20m%C3%A1quina.jpg)
