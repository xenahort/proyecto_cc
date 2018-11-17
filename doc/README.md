# Hito 2

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

Este hito se comenzó realizando los [ejercicios](https://github.com/jrtrillo/ejercicios_cc/tree/master/DesplegandoaplicacionesenlanubeUsodePaaSyDBaaS) propuestos en el tema y entremezclándolos con la práctica. Los ejercicios 1,2,3,4,5,7 y 8 están subidos al enlace que se acaba de mencionar y con posterioridad se subiran a los objetivos.

Una vez realizados los ejercicios se procedió a hacer la práctica.
Lo primero que se realizó es instalar Node debido a que se decidió cambiar de lenguaje por comodidad. Seguidamente nos tuvimos que registrar en Heroku y crear una cuenta y para finalizar las instalaciones se tuvo que instalar Heroku. Estas dos últimas acciones se hicieron a raiz de que se dicidió que el programa iba a ser desplegado en Heroku ya que, OpenShift nos matenía y mantiene en una cola de espera y no se quería gastar el dinero que se nos había proporcionado en Azure porque existía muchas posibilidades de gastarlo sin haber conseguido los objetivos. 

Una vez que ya se tenían hechas estas instalaciones se tuvo que instalar express utilizando el comando:

	-npm install express --save

Después de la instalación se procedió a realizar el ejercicio número tres como prueba, archivo index.js, este ejercicio se realizó a partir de este [video de youtube](https://www.youtube.com/watch?v=PhhJknkrmgQ) manteniendo su misma estética. Ya realizado el ejercicio, se procede a realizar esta parte la práctica. 

Manteniendo el mismo nombre del ejercicio 3, index.js. Se observa que es necesario una clase dedicada solamente a los comentarios, esta idea es tomada del compañero Javier Cabrera que entendiendo que los trabajos son totalmente distintos la necesidad de crear un objeto, en nuestro caso el comentario, es la misma por este motivo, se crea el archivo comentarios.js. Este archivo contiene un objeto llamado datos que contiene las siguientes variables:

	- idtwitter: ID del tweet.
  	- iduser: ID del usuario.
  	- etiqueta: Saber si es bullying o no.
  	- dia: Día en el que el comentario se publicó.
  	- mes: Mes en el que el comentario se publicó.	
  	- anho: Año en el que el comentario se publicó.
  	- hora: Hora en el que el comentario se publicó.
  	- min: Minuto en el que el comentario se publicó.
 	- nlikes: Número de likes del usuario.
  	- nretweet: Número de retweet del usuario.

A cada una de estás variables se les realizó una función llamada de dar la variable y de sustituir la variable. Además se añadieron otras funciones, a saber:

	- Añadir: Esta función permite añadir un comentario con sus caracterísicas correspondientes.
	- Editar: Permite modificar cualquier comentario ya escrito.
	- Borrar: Permite borrar un comentario.
	- Buscar en twitter con una id: permite buscar si un tweet se encuentra en la base de datos.
	- Buscar el conjunto de twitter de una fecha: busca en la base de datos todos los tweets escritos en una fecha.
	- Buscar el conjunto de tweets de una fecha precisa: busca en la base de datos todos los tweets escritos en un momento preciso.
	- Buscar el conjunto de tweets con respecto a un id de usuario: busca todos los tweets de un usuario en la base datos.
	- Buscar el tweets con más likes de un usuario: busca el tweet del usuario que tenga más likes.
	- Buscar el tweets con más retweets de un usuario: busca el tweet del usuario que tenga más retweets.
	
Toda esta información, mientras se implementa la base de datos, se guarda en un array del objeto datos llamado historial.

Para ver que funciona bien se realiza el comando:
	
	node index.js

Una vez realizado el archivo index.js e comentario.js, se procede a realizar el ejercicio 4 y creando el archivo probar.js. Lo primero que se debe hacer es realizar los siguientes comandos: 
	
	npm install mocha -g
	npm install mocha --save-dev
	npm install --save-dev supertest 

Con esto se instala el supertest y mocha que nos permitirá ejecutar los test que se programen. Una vez escrito el ejercicio cuatro instalado mocha y supertest y verificar que se realiza perfectamente el test utilizando:

	mocha probar.js

Se procede a crear el test de la práctica, para ello se reutiliza el nombre del archivo probar.js y se realiza un test para cada una de las funciones mencionadas y para el post, put, delete, get y verificar el OK. 

Para continuar con el análisis, se utiliza Travis IC y se crea un fichero .travis.yml con el siguiente código:

	language: node_js
	node_js:
  		- "node"
	before_install:
    	- npm install mocha -g
    	- npm install mocha --save-dev
    	- npm install --save-dev supertest
	after_success: 
    	- 'mocha probar.js'

Una vez que funciona todos los test y el index.js también funciona correctamente. Se procede a desplegar el proyecto en Heroku. Para ello, se crea el archivo Procfile que contiene:

	web: node index.js

También se modifica el archivo package.json para  ejercutar los scripts que se habían escrito. Para finalizar, se procede a hacer el despliegue en Heroku para ello nos apoyamos en el ejercicio número 8 y se realizan los siguientes comandos:

	-git init
	-git add .
	-git commit -am "Initial commit"
	-heroku create 
	-git push heroku master
	-heroku open

Si todo ha funcionado se tiene que desplegar una página en nuestro caso es [enlace](https://salty-retreat-32943.herokuapp.com/).
