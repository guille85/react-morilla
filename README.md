
# E-Dev Books

# Descripción
Este proyecto fue creado en el curso de React Js dictado por CoderHouse

El proyecto consiste en un e-commerce que cuenta con las siguientes características:
* Listado de productos
* Detalle de productos
* Categorías de productos
* Control de stock
* Carro de compras
* Detalle de los productos incluidos en el carro de compras
* Generación de orden de compra

El carro de compras, los productos y las ordenes se almacenan en la base de datos provista por Firebase.

# Tecnologías utilizadas
* React Js
* Material UI
* React Router Dom
* Firebase

# Para iniciar el proyecto
Clonar el repositorio

```
git clone https://github.com/guille85/react-morilla.git
```

Dependencias a instalar:

```
npm install
```

# En Firebase
Crear la colección `products` cuyos objetos tendrán la siguiente forma:

```
product = {
  category: "basico"
  description: "descripción"
  pictureUrl: "url de la imagen"
  price: 1000
  stock: 100
  title: "Titulo del producto"
}
```

Tambien se debe crear la colección `category` que será como se muestra a continuación:

```
category = {
  name: "basico"
}
```

Otra colección necesaria es la de las `orders`, ésta se creará automáticamente al generar la primer orden de compra.

Una vez hecho todo lo anterior, debemos ir a la terminal, pararnos dentro de la carpeta del proyecto y
ejecutar el siguiente comando para poner a correr el proyecto.

```
npm start
```
Lo que hará que se levante el servidor que podemos encontrarlo en el navegador en la siguiente url:

`http://localhost:3000`


# Demostración de uso de la aplicación

![GIF de muestra.](/public/demo-ecommerce.gif "Vista del proyecto.")

# Deploy
```
https://e-commerce-coder-2ddaf.web.app/
```