# Portafolio · Luis Alejandro Rodríguez Pote

Sitio web personal de **Luis Alejandro Rodríguez Pote**, Líder de Comunicaciones y Comunicador Social–Periodista (Bogotá, Colombia).

Reúne su trayectoria en **Foro de Presidentes**, **Premium BPO**, **Estudio Legal Abogados y Consultores** y **Uniandinos**, con 26 piezas publicadas (gráficas y videos), resultados destacados y datos de contacto.

## Estructura

```
├── index.html              Página principal
├── css/styles.css          Estilos (colores, tipografía, diseño responsive)
├── js/main.js              Filtros de la galería por organización y formato
└── assets/
    ├── img/                Foto de perfil y piezas gráficas
    │   └── posters/        Imágenes de portada de los videos
    └── video/              Videos (MP4, comprimidos para web)
```

Es un sitio estático: no necesita instalar nada ni compilar.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `portafolio`).
2. Sube **el contenido** de esta carpeta a la raíz del repositorio (no la carpeta en sí): en el repositorio, *Add file → Upload files*, arrastra todo y confirma con *Commit changes*.
3. Ve a *Settings → Pages*. En *Build and deployment*, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)` y guarda.
4. En uno o dos minutos el sitio queda disponible en `https://TU-USUARIO.github.io/portafolio/`.

> Si nombras el repositorio `TU-USUARIO.github.io`, el portafolio queda en `https://TU-USUARIO.github.io/`.

## Verlo en tu computador

Abre `index.html` con doble clic en cualquier navegador.

## Personalizar

- **Color de acento:** cambia `--accent` al inicio de `css/styles.css` (opciones sugeridas: `#D4FF3A`, `#FF7A59`, `#5CE1E6`, `#B79CFF`).
- **Textos:** edita directamente `index.html`.
- **Nuevas piezas:** copia un bloque `<figure class="piece">` dentro de la organización que corresponda y apunta a la nueva imagen o video en `assets/`.

## Créditos

Las piezas gráficas y audiovisuales pertenecen a las organizaciones donde se publicaron y se muestran como muestra de trabajo profesional.
