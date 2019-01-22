# Hito 4

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

## Documentación Hito 4.

## Elección de parámetros.

A la hora de crear una máquina virtual hay que tener en cuenta los siguientes parámetros:

	El nombre del usuario.
	El nombre del grupo recurso.
	El nombre de la máquina virtual.
	La localización.
	La imagen del sistema operativo.
	El tamaño del disco que se desea.

A continuación, se irá justificando una a una cada una de las elecciones que se han ido tomando para crear la máquina virtual.

### El nombre del usuario.

Esta elección puede ser la que el usuario desee ya que, no influye a la hora de que la máquina ejecute con más o menos presteza el microservicio. 

Por otro lado, se recomienda que se ponga el mismo nombre del usuario que se tiene en Github, en el caso de esta práctica el nombre va a ser *jrtrillo*. Sin embargo, si se desea poner como nombre de usuario *juan* también es factible.

En resumen, el nombre de usuario es la forma de darle una autoría a la máquina virtual.

### El nombre del grupo recurso.

La elección del nombre del grupo recurso va a ser similar a la elección anterior. Si en la anterior se escogió por elección propia y sin seguir ningún criterio significativo, en este caso va a suceder lo mismo. El nombre que ha escogido ha sido *hito4* porque de esta forma se puede conocer que las máquinas creadas con este nombre van a pertenecer al hito que se está describiendo. De igual modo, si se desea poner otro nombre porque al usuario le resulte más atractivo o simplemente para representativo se puede realizar sin que el resultado se vea afectado en el tiempo.

### El nombre de la máquina virtual.

La última elección que se va a realizar sin una demostración empírica va a ser la elección del nombre de la máquina virtual. Con esta elección se va a decidir qué nombre va a llevar la máquina virtual. La recomendación para elegir este nombre va a ser el nombre de la imagen del sistema operativo que se ha elegido y un número asociado que indicará el número de veces que se ha crea do una máquina virtual con la imagen del sistema operativo. Para este hito el nombre de la máquina virtual va a ser *ubuntu7*. Esto significa que se habían creado con anterioridad seis máquinas virtuales con el sistema operativo Ubuntu Server 18.04 LTS.

Para finalizar, la elección de la imagen del sistema operativo se explicará más adelante.

### La localización.

La primera elección con demostración empírica va a ser la elección de la localización. La forma de elegir la mejor localización es medir la concurrencia y el número de solicitudes a realizar para la sesión de benchmarking. Al existir diferentes localizaciones, se van a escoger las tres que posean la menor latencia.
Para ello, se han observado las siguientes webs: [Web 1](http://www.azurespeed.com/) y [Web 2](https://azurespeedtest.azurewebsites.net/)

Si se accede a la segunda web se puede ver como se muestra un valor fijo y que solo se actualiza cuando se recarga la web. Sin embargo, si se accede a la primera web se obtiene que se muestra un gráfico que se actualiza continuamente pero normalmente muestra valores diferentes a la segunda web. Por consiguiente, se decide tomar 5 catas en las dos webs, en intervalos de una hora y media, mostrando la localización con la latencia menor. De esta forma, se hará una preselección de las localizaciones más relevantes:

Los resultados de la primera web son los siguientes:

	Hora: 15:00. Latencia: 126 ms Lugar: West Europe.
	Hora: 16:30. Latencia: 96 ms Lugar: West Europe.
	Hora: 18:00. Latencia: 164 ms Lugar: East US.
	Hora: 19:30. Latencia: 213 ms Lugar: West UK.
	Hora: 21:00. Latencia: 258 ms Lugar: West UK.

Los resultados de la segunda web son los siguientes:

	Hora: 15:00. Latencia: 175 ms Lugar: Central India
	Hora: 16:30. Latencia: 82 ms Lugar: South UK
	Hora: 18:00. Latencia: 115 ms Lugar: North Europe
	Hora: 19:30. Latencia: 141 ms Lugar: West Europe
	Hora: 21:00. Latencia: 133 ms Lugar: West Europe

El análisis de resultados son los siguientes:

	En primer lugar: West Europe con un porcentaje del 40 por ciento.
	En segundo lugar: West UK con un porcentaje del 20 por ciento
	La tercera posición la comparte Central India, North Europe, East US y South UK todos con un porcentaje del 10 por ciento.

Una vez delimitadas las tres localizaciones, West Europe, West UK y South UK, se procede a realizar una máquina virtual con cada uno de ellas, con el mismo tamaño y con el mismo sistema operativo. Los resultados obtenidos son los siguientes:

	Correlaciones:
		West Europe: 60.57 segundos.
		West UK: 62.75 segundos.
		South UK: 62.29 segundos.

	Número de solicitudes:
		West Europe: 3.43 segundos.
		West UK: 3.76 segundos.
		South UK: 3.59 segundos.

Ante este resultado queda demostrado que el lugar elegido es West Europe, ya que las correlaciones y el número de solicitudes son bastante menores que el resto.

### Tamaño de la imagen.

Una vez delimitada la localización procede a la elección 

Se poseen los siguientes tamaños para crear la máquina virtual con un coste menor a veinticinco euros y que cubran nuestras necesidades, a saber:
	
	A0 Estándar con un precio de 12.55 euros al mes.
	A0 Básico con un precio de 11.29 euros al mes. 
	A1 Básico con un precio de 16.94 euros al mes.

El cuadro de características de los tamaños son los siguientes:

	A0 Estándar:
		VCPU: 1.
		RAM: 0.75.
		Discos de datos: 1.
		E/S Máxima por segundo: 1x500.
		Almacenamiento: -
		Compatibilidad de disco premium: No.

	A0 Básico:
		VCPU: 1.
		RAM: 0.75.
		Discos de datos: 1.
		E/S Máxima por segundo: 1x300.
		Almacenamiento: -
		Compatibilidad de disco premium: No.

	A1 Básico:
		VCPU: 1.
		RAM: 1.75.
		Discos de datos: 2.
		E/S Máxima por segundo: 2x300.
		Almacenamiento: -
		Compatibilidad de disco premium: No.

Como se puede apreciar la diferencia entre el A0 estándar y el A0 básico es solo del E/S Máxima por segundo. Aunque la diferencia entre ambas no es significativa se va a proceder a crear tres máquinas virtuales con la localización de West Europe y el mismo sistema operativo. Una vez creadas se mide el tiempo del provisonamiento para ver si la diferencia de dinero merece la pena. Los tiempos son:

	A0 Estándar: 5 min 28 segundos.
	A0 Básico: 5 min 40 segundos.
	A1 Básico: 3 min 32 segundos.

El tiempo de provisonamiento muestra que la diferencia de dinero es rentabilizada por la reducción de tiempo, pero para poder confirmar esta hipótesis que se tiene se va a utilizar [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html) para medir la concurrencia y el  número de solicitudes a realizar para la sesión de benchmarking, al igual que se hizo anteriormente con la localización. Para ello se utilizan las tres máquinas ya creadas y se obtienen los resultados:

	Concurrencia:
		A0 Estándar: 60.58 segundos.
		A0 Básico: 61.12 segundos.
		A1 Básico: 60.23 segundos.

	Número de solicitudes:
		A0 Estándar: 3.33 segundos.
		A0 Básico: 3.45 segundos.
		A1 Básico: 3.15 segundos.

Con estas tres mediciones se proceden a realizar tres test de hipótesis donde la hipótesis principal es la A1 Básico y la hipótesis alternativa es la A0 Estándar. Tanto como para el primer test, tiempo de provisonamiento, como para el tercero, número de solicitudes, se rechaza la hipótesis. Sin embargo para el segundo test de hipótesis realizado, concurrencia, se acepta la hipótesis, por consecuencia se decide quedarse con el tamaño *A1 Básico*.


### La imagen del sistema operativo.

Para elegir el sistema operativo utilizamos el la documentación del [hito 3](https://github.com/jrtrillo/proyecto_cc/tree/master/doc/provison). Aparte de utilizar esta herramienta, [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html),

## Script