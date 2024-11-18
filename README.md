# Consumir un API con Ionic - PokeApi 🐾🎮

> **Miembros**: Eduardo Caza - Mateo Garzón - Luis Guaygua - Yuverly Verdezoto

El proyecto utilizo el siguiente API [API Pokemon](https://pokeapi.co/) 

Contenido : Una aplicacion hecha con Ionic y Angular que esta usando la API de Pokemon para traer lo datos de esta a nuestra aplicación.

> **Descarga la apk**: [Descargar archivo](https://github.com/Eduardo-Caza/Geolocalizacion/blob/master/Geolocalizacion.apk)

---

## Capturas de Pantalla 📸

### Interfaz Principal

![image](https://github.com/user-attachments/assets/98312bb3-64af-42d5-9297-9b30bf5b3105)

### Auntenticación


![image3](https://github.com/Eduardo-Caza/Trabajo-Grupal-CG/blob/main/Auth.png)

### Chat

![Ejemplo](https://github.com/Eduardo-Caza/Geolocalizacion/blob/master/Chat.png)


---

## Pasos a Seguir para configurar el Proyecto en Ionic 💻

1. Para crear el proyecto en IONIC usaremos el siguiente comando
   ```bash
   ionic start APLICACION blank --type=angular
2. Dentro de nuestro proyecto de ionic para autenticación
   ```bash
   ionic g page login
   ionic g service services/auth
   ionic g service services/avatar
3. Y de paso instalamos los respectivos capacitadores 
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
5. Ejecucion del Programa:
![android studio](https://github.com/Eduardo-Caza/Geolocalizacion/blob/master/ejecucion.png)
