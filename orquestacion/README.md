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

## Documentación Hito 5.

## Instalar Vagrant y prepararlo con azure.

Lo primero que se tiene que realizar es la instalación de Vagrant para ello se puede instalar 
Para que Vagrant pueda utilizar a Azure se ha seguido el siguiente [tutorial](https://blog.scottlowe.org/2017/12/11/using-vagrant-with-azure/)


Paso 1 instalar vagrant
Paso 2 $ vagrant plugin install vagrant-azure
Paso 3 $ vagrant box add azure-dummy https://github.com/azure/vagrant-azure/raw/v2.0/dummy.box --provider azure
Paso 4 $ az login
Paso 5 $ az ad sp create-for-rbac
Paso 6 crear archivo Vaagrantfile
Paso 7 $ vagrant up --provider=azure --no-parallel
Paso 8 $ vagrant ssh
dentro instalar pm2

## Proyecto comprobado por [@xenahort](https://github.com/xenahort)

El sistema de orquestación implementado por @jrtrillo ha sido probado por @xenahort verificando que los resultados obtenidos son los correctos. A continuación se muestra una prueba de su ejecución:

![Vagrant-xenahort](https://github.com/jrtrillo/proyecto_cc/tree/master/orquestacion/img/orq1.png)
![Vagrant-xenahort](https://github.com/jrtrillo/proyecto_cc/tree/master/orquestacion/img/orq2.png)