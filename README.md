# Echoes of UWC

Memorial digital del antiguo campus de UWC Costa Rica. El campus cambia; el
objetivo de este sitio es que sus recuerdos no tengan que hacerlo.

Este README documenta la versión **concisa** del proyecto: 4 páginas, una
sola sección de archivo (El Memorial, que incluye las Memorias), y una
identidad visual basada en la paleta oficial de UWC.

## 1. Qué es el proyecto

- Un archivo digital de historias, personas, lugares y momentos del antiguo
  campus.
- La extensión digital de un mural físico ubicado en Parque de Santa Ana,
  Costa Rica, accesible mediante un código QR.
- Un espacio donde la comunidad puede dejar sus propios recuerdos ("Leave
  Your Echo").

## 2. Arquitectura de carpetas

Las páginas HTML viven en la **raíz** del proyecto (no dentro de una
carpeta `/HTML`). Esto es intencional: **GitHub Pages solo reconoce
automáticamente el `index.html` que está en la raíz del repositorio** (o
en `/docs`, si se configura así). Si `index.html` estuviera en una
subcarpeta, GitHub Pages no lo serviría como página de inicio.

```
ECHOES-OF-UWC/
├── index.html             (Home)
├── memorial.html          (El Memorial + Memorias, por categoría)
├── mural.html             (El Mural + mapa)
├── team.html              (Equipo)
├── CSS/
│   ├── variables.css     (colores, tipografías, spacing)
│   ├── base.css          (reset + tipografía global)
│   ├── components.css    (header, nav, botones, cards, footer)
│   ├── animations.css
│   ├── responsive.css
│   └── pages/
│       ├── home.css
│       ├── memorial.css
│       ├── mural.css
│       └── team.css
├── JavaScript/
│   ├── main.js           (inicialización general)
│   ├── navigation.js     (menú mobile)
│   ├── memorial.js       (pestañas por categoría, lightbox, formulario)
│   ├── team.js           (datos de los 9 miembros del equipo)
│   └── map.js            (estructura para Google Maps API)
│
├── Assets/
│   ├── Images/
│   │   ├── Logos/
│   │   ├── Campus/
│   │   ├── Memorial/
│   │   ├── Team/
│   │   └── Mural/
│   └── Models/
│       └── Campus/       (campus.glb, para una futura versión 3D)
└── README.md
```

HTML = estructura y contenido. CSS = presentación. JavaScript = interacción.
Assets = recursos multimedia. No se mezclan responsabilidades entre archivos.

## 3. Colores y tipografía

Paleta oficial (definida en `CSS/variables.css`):

- Verde UWC: `#1DA381`
- Azul UWC: `#004099`
- El header y los acentos usan un **degradado** entre ambos
  (`--gradient-primary`), nunca un fondo plano duro.

Para cambiar cualquier color del sitio, edita únicamente las variables en
`CSS/variables.css` — se propagan a todo el proyecto.

Tipografías:

- **Playfair Display** (serif): todos los títulos y textos grandes, con
  mayor presencia en El Memorial (títulos de categoría, citas).
- **Inter** (sans-serif): cuerpo de texto, formularios, navegación.

Ambas se cargan vía Google Fonts en el `<head>` de cada página. Para
cambiarlas, edita el `<link>` de Google Fonts y las variables
`--font-display` / `--font-body` en `variables.css`.

## 4. Dónde colocar cada tipo de archivo

| Contenido               | Carpeta                          |
|--------------------------|-----------------------------------|
| Logos PNG (UWC, Echoes)  | `Assets/Images/Logos/`           |
| Fotos del campus         | `Assets/Images/Campus/`          |
| Fotos de El Memorial     | `Assets/Images/Memorial/`        |
| Fotos del equipo         | `Assets/Images/Team/`            |
| Fotos del mural          | `Assets/Images/Mural/`           |
| Modelo 3D del campus     | `Assets/Models/Campus/campus.glb`|

## 5. Cómo agregar o quitar logos

Los logos usan `<img>`, nunca `background-image`, para poder reemplazar el
archivo sin tocar la estructura:

```html
<img src="../Assets/Images/Logos/uwc-logo-horizontal.png" alt="UWC Costa Rica" class="logo logo--uwc">
```

Solo reemplaza el archivo PNG en `Assets/Images/Logos/` manteniendo el mismo
nombre (o actualiza el `src`). `.logo` en `components.css` limita
`max-height`, `max-width` y `object-fit` para que ningún logo rompa el
header.

## 6. Cómo agregar miembros al equipo (9 espacios)

Edita únicamente el array `TEAM_MEMBERS` en `JavaScript/team.js`:

```js
{ name: 'Nombre', country: 'País', role: 'Cargo', photo: '../Assets/Images/Team/member-01.jpg' }
```

Cada tarjeta muestra solo foto, nombre, país y cargo (sin biografía larga),
tal como se definió para esta versión del sitio.

## 7. Cómo agregar memorias / contenido de El Memorial

Edita el array `MEMORIAL_ITEMS` en `JavaScript/memorial.js`. Cada objeto
necesita al menos:

```js
{ category: 'events', title: '...', meta: '...', desc: '...', image: '...' }
```

Categorías válidas: `people`, `places`, `events`, `traditions`, `art`,
`culture`, `community`, `student-life`. Los items con `category: 'places'`
pueden incluir además `place` (uno de: Dorms, Classrooms, Cafeteria,
Gardens, Sports, Common Areas) para aparecer en el filtro "Browse by
place", que **solo se muestra en la pestaña Places**.

No existe pestaña "All" ni "Memories": cada pestaña muestra únicamente el
contenido de su propia categoría.

## 8. Cómo conectar Google Maps

1. Consigue una API key de Google Maps JavaScript API (no se incluye
   ninguna en este proyecto).
2. En `HTML/mural.html`, descomenta y completa la línea:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=INSERT_API_KEY_HERE&callback=initUWCMap" async defer></script>
   ```
3. En `JavaScript/map.js`, completa `MURAL_LOCATION.lat` y
   `MURAL_LOCATION.lng` con las coordenadas reales de Parque de Santa Ana
   (no se han inventado coordenadas).
4. La función `initUWCMap()` ya está preparada para inicializar el mapa y
   colocar el marcador.

**Nunca subas una API key real a un repositorio público.**

## 9. Cómo integrar el modelo 3D del campus

En `HTML/index.html` existe el contenedor `#campus-3d-viewer`, listo para
recibir una librería como Three.js y cargar
`Assets/Models/Campus/campus.glb`. Actualmente muestra el mensaje "3D
campus viewer — coming soon".

## 10. Formulario "Leave Your Echo"

El formulario (`HTML/memorial.html`, `#echoForm`) no tiene backend. En
`JavaScript/memorial.js`, dentro de `initEchoForm()`, hay un comentario
`INSERT API CONFIGURATION HERE` que indica dónde conectar un `fetch()` a
una API o base de datos real.

## 11. Cómo ejecutar el proyecto localmente

No requiere build ni dependencias. Basta con abrir `index.html` en el
navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve ECHOES-OF-UWC
```

## 12. Despliegue en GitHub Pages

1. Sube el contenido de esta carpeta (`index.html`, `memorial.html`,
   `mural.html`, `team.html`, `CSS/`, `JavaScript/`, `Assets/`,
   `README.md`) a la raíz de un repositorio de GitHub — no dentro de una
   subcarpeta.
2. En el repositorio: **Settings → Pages → Source**, selecciona la rama
   (por ejemplo `main`) y la carpeta `/ (root)`.
3. GitHub Pages detectará automáticamente `index.html` en la raíz y
   publicará el sitio en `https://usuario.github.io/nombre-del-repo/`.

Como todas las rutas de CSS, JavaScript e imágenes son relativas
(`CSS/...`, `JavaScript/...`, `Assets/...`, sin `../`), el sitio funciona
igual en local, en GitHub Pages o en cualquier otro hosting estático
(Netlify, Vercel, etc.).

## 13. Notas de contenido

Todo el texto marcado entre corchetes (`[Add campus photo]`,
`[TEAM MEMBER NAME]`, etc.) es un placeholder intencional. No se ha
inventado ninguna fecha, nombre, cifra o coordenada real: deben
completarse con información verificada antes de publicar el sitio.
