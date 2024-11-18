# Consumir un API con Ionic - PokeApi 🐾🎮

> **Miembros**: Eduardo Caza - Mateo Garzón - Luis Guaygua - Yuverly Verdezoto

El proyecto utilizo el siguiente API [API Pokemon](https://pokeapi.co/) 

Contenido : Una aplicacion hecha con Ionic y Angular que esta usando la API de Pokemon para traer lo datos de esta a nuestra aplicación.

> **Descarga la apk**: [Descargar archivo](https://github.com/Eduardo-Caza/Geolocalizacion/blob/master/Geolocalizacion.apk)

---

## Capturas de Pantalla 📸

### Interfaz Principal

![image](https://github.com/YuverlyHidokun/Pokeapp-TK/blob/master/Busqueda.jpeg)

### Busqueda (Encontrado)


![image3](https://github.com/YuverlyHidokun/Pokeapp-TK/blob/master/Busqueda2.jpeg)


---

## Pasos a Seguir para configurar el Proyecto en Ionic 💻

1. Para crear el proyecto en IONIC usaremos el siguiente comando
   ```bash
   ionic start APLICACION blank --type=angular
2. Instalamos capacitadores 
   ```bash
   npm i @ionic/pwa-elements
4. E integramos firebase en nuestro proyecto 
   ```bash
   ng add @angular/fire

## Pasos a Seguir para construir nuestra apk en android o en IOS💻

1. Añadimos el capacitor de android y de IOS
   ```bash
   ionic cap add android
   ionic cap add ios
2. Luego de añadir los capacitores construimos nuestra app
   ```bash
   ionic build
3. Comprobamos en android studio abrimos la apk
   ```bash
   ionic cap open android
4. O miramos en nuestro ordenador con ionic serve
   ```bash
   ionic serve

