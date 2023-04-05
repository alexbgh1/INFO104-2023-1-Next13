# Ejemplo Nextjs 13

## ¿Cómo se creó el 'proyecto' base?

### Pre-requerimientos

Como pre-requerimientos se debe tener instalado **nodejs** en la versión **LTS** (Long Term Support).

### ¿Qué es npm?

**npm** significa **"node pack manager**, es el comando con el que se crean este tipo de proyectos. Existen variantes como **pnpm** o **yarn**, que pueden ser más rápidos. - **_i | install_** : Para instalar alguna dependencia. - **_-D_** : Instalar algo solo para desarrollo, algunos paquetes nos ayudan a experimentar pero no se utilizan en producción.

**npx** es similar solo que "ejecuta" ... rellenarxd

### Nextjs 13

Creamos el proyecto inicial utilizando `npx create-next-app@latest`, y con las siguientes opciones:

```cmd
npx create-next-app@latest

Name: info104-2023-1-next13
TypeScript: No
ESLint: No
src: Yes
experimental app: No
```

`Name:` // Nombre de aplicaciòn
`TypeScript:` // Extensiòn (.ts) -> Es como javascript pero más estricto al declarar variables, funciones, etc.
`ESLint:` // Nos señala errores de ejecutado -> Requiere una pequeña configuración
`src:` // Una carpeta 'src' que contenga todo
`experimental app:` // Al decir 'Yes' estaríamos trabajando con la versión de Next 13 (beta)

### Dependencias

**ChakraUI:** De manera muy simple nos aporta interfaces ya hechas por otra persona, por lo que solo deberemos llamar los componentes, darle ciertos valores y listo.

```cmd
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Ejecución

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

El puerto local de ejecución suele ser el [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Archivos generados

Al crear un proyecto de `nextjs` tiene muchos archivos, algunos son más importantes que otros, a continuación el significado de algunos:

```yml
package-lock.json: Contiene la información como el nombre de proyecto y los paquetes (de manera detallada) que utiliza.

package.json: Es como una versión resumida, lo importante son >
            [scripts] : Generalmente de ejecución, ej (run dev - 'correr código desarrollo') (run build - 'compilar el código final') (run start - 'correr código final').
            [dependencias] : Las dependencias que se instalaron, ej (react @chakra-ui/react @emotion/react @emotion/styled framer-motion) con sus versiones.
next.config.js: Es la configuración de next, por ejemplo si quisieramos fotos de cierto dominio, deberíamos especificarlo ahí.

node_modules: Lo que se instala cuando utilizamos 'npm install'.

src: Donde se almacena nuestro código.
            [ _document.jsx ] : Es la estructura general.
            [ _app.jsx ] : Es donde se carga la aplicación completa.
            [ pages (carpeta) ] : Donde van nuestras páginas.
            [ pages/api (carpeta) ] : Donde va información de API, para lectura de json u otras cosas.
            [ styles (carpeta )] : Donde van los estilos CSS.
            [ components (carpeta)] : Donde van nuestros componentes (idealmente reutilizables, o para organizar/achicar nuestro contenido)
```

### Posibles dudas

#### Quiero ver qué dependencias tengo instaladas, ¿dónde lo veo?

En `package.json`, puedes ver las dependencias y las versiones.

#### Quiero poner fotos de gatitos, pero next no me deja poner el dominio, ¿dónde lo configuro?

En `next.config.js`, por ejemplo en este 'proyecto' se muestran imágenes de [imgurl](i.imgur.com), daba errores ya que en **next** había que declarar algo similar a esto:

```json
{
    ...
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
    ...
}
```

Se pueden dar otro tipo de configuraciones. Otro ejemplo es que **next** optimiza las imágenes por su cuenta y uno puede o no preferir esas opciones.

#### Quiero empezar a crear mis páginas, ¿En qué carpeta lo debo hacer?

En `src/pages` en **next** cada archivo que creemos con extensión **.js, jsx, .tsx** (según corresponda) y que cumpla con esto:

- [x] Se declara en minúsculas (es una buena práctica). ej: **about.jsx**
- [x] Debe tener un componente que se declare y exporte.

`pages/src/about.jsx` -> La página es `about.jsx` y está en la ruta `<dominio>/about`

`pages/src/about.jsx`

```jsx
// El nombre de About() puede ser cualquier otro, pero idealmente es el mismo por un tema de orden
// También se declara en mayúsculas por ser un Componente de React (buenas prácticas)
export default function About() {
  return <h1>Página de About</h1>;
}
```

**Otra forma**

También podemos crear carpetas para manejar el enrutado de nuestra aplicación. Ej:

`pages/src/about` -> `about` es una carpeta. Si creamos un `index.jsx`, tendremos la ruta `<dominio>/about`

`pages/src/about/index.jsx`

```jsx
export default function About() {
  return <h1>Página de About</h1>;
}
```

Si creamos `pages/src/about/seccion_1.jsx`, tendremos la ruta `<dominio>/about/seccion_1`

`pages/src/about/seccion_1.jsx`

```jsx
export default function Seccion1() {
  return <h1>Página de Seccion 1</h1>;
}
```

#### Quiero importar cosas, pero no sé cómo

En **next** al tener muchas rutas se implementó una referencia en "la raíz del archivo". Se accede como `@/`. Esta configuración se encuentra en: `jsconfig.json`.

```jsx
// Con " @/ "
import styles from "@/styles/General-Layout.module.css";
// Normalmente si estamos en una carpeta muy alejada: " ../ " retrocede carpeta de manera relativa a la que uno está.
import styles from "../../../../styles/General-Layout.module.css";
```

## Deploy en Vercel

La manera más fácil es acceder a [Plataforma de Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) (ellos son los creadores de **Next.js**).

En general bastará con subir el proyecto a un repositorio de **github**, aceptar ciertas configuraciones y listo. **Vercel** publicará y nos dará ciertos **url** para que cualquiera pueda acceder. Al estar vinculado con **github**, si actualizamos nuestro repositorio, y no rompimos nada, hará el deploy nuevamente (actualizará el contenido).

Más información del deploy aquí [Next.js deployment documentation](https://nextjs.org/docs/deployment)
