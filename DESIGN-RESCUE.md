# Rescate frontend — EXPLORA EDOMEX

## Dirección vigente
La referencia principal recibida fue `C:/Users/dany/Downloads/a_polished_modern_tourism_website_homepage_mockup.png`. Se tomó su composición: hero fotográfico amplio, encabezado integrado, titular editorial grande, botones redondeados, dos tarjetas de municipios con texto superpuesto y fotografías dominantes.

La instrucción posterior del usuario fija la identidad MÉXICO VIVO. Sustituye por completo la paleta petróleo, mineral y cobre, conservando la estructura y el comportamiento.

## Sistema visual México Vivo
- Blanco #FFFFFF: fondo principal y velos de portada. Gris luminoso #F7F8FA: secciones secundarias y estados pendientes.
- Coral #F15A38: navegación activa, botones, acento de Axapusco.
- Bugambilia #A74483: titular protagonista, encabezados, acento de Otumba.
- Solar #E8A83D: líneas y pequeños detalles.
- Natural #517D39: detalles puntuales en estados sin fotografías.
- Brillante #3769C8: foco visible del teclado.
- Texto principal grafito #252525; texto secundario #60646C.

Se evita presentar todos los colores como decoración simultánea. Las fotografías conservan sus colores reales. No se modificó el archivo oficial del logo.

## Alcance conservado
Inicio → municipio → localidad opcional → lugar.
Solo Axapusco → Xala → Restaurante San Francisco y Otumba → Estación del Ferrocarril.

En el cambio cromático se modificaron únicamente las cinco hojas de estilo y el color del navegador en index.html, además de esta documentación. Se compararon los hashes de rutas, datos, componentes de navegación, fichas, galería y logo antes/después: permanecieron iguales. No se añadieron dependencias ni funcionalidades.

## Skills utilizadas
- frontend-design, anthropics/skills, revisión e4bb5d960d87126ff3b3a8af1a104b7db67560ba.
- web-design-guidelines y vercel-react-best-practices, vercel-labs/agent-skills, revisión 1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62.
- responsive-design, wshobson/agents, revisión 9c61ab243def98f72da12abd41cfcf5bcd91af9d.
- Navegador CUA para inspección, cambios de viewport, teclado y capturas. No se instaló otro motor de navegador.

## Comprobación visual y funcional
Se compararon capturas con la referencia y se corrigieron el encuadre bajo el encabezado y las capas de las franjas que tapaban las flechas. Se mantuvo la fotografía visible desde la portada móvil.

Se comprobaron rutas de municipios y lugares, enlaces antiguos, combinación inválida municipio/lugar, recarga directa, anclas, menú móvil con teclado/Escape y galería. En el visor se verificaron flechas, cierre y devolución del foco. La consola de producción revisada no mostró errores.

Para México Vivo se inspeccionó el inicio a 1280 y 390 px, con dos tarjetas y sin desbordamiento horizontal en esas vistas; también la estación y su galería en móvil. Pasaron TypeScript y la compilación de GitHub Pages.

## Calidad y límites
Contrastes base: coral/grafito 4.57:1; hover coral/blanco 4.71:1; bugambilia/blanco 5.53:1. El contraste de fotos se revisó visualmente con superposiciones; no se realizó una auditoría automática completa de WCAG.

Se validaron fuentes fotográficas y dimensiones/srcSet. La galería de la estación incluye dos fotografías documentales y un recorte identificado de la portada. La ficha del restaurante sigue esperando fotos y descripción; no se reemplazan por contenido inventado.

No se ejecutó lint porque no hay configuración. No se midieron Core Web Vitals o Lighthouse, ni se probaron dispositivos físicos. Las capturas no equivalen a esas mediciones.

## Capturas
- Antes: carpeta `design-audit`.
- Primera dirección basada en la referencia: carpeta `design-rescue`.
- Dirección México Vivo inicial: carpeta `mexico-vivo`.
- Refinamiento vigente con blanco y grafito: carpeta `mexico-vivo-blanco`.

Todas dentro de `C:/Users/dany/.codex/visualizations/2026/11/17/01a1eaa6-e1cb-7743-ad83-133e0d617d5f/`. Los archivos actuales incluyen inicio y portada en escritorio y móvil.


## Refinamiento de fondos
Se conservaron composición, tipografías, colores de identidad, tarjetas e interacciones. Se sustituyeron fondos crema y beige por blanco/gris luminoso, se redujeron sombras y se aclaró el visor. Se verificaron los fondos computados en navegador: body y visor #FFFFFF; galería #F7F8FA; texto #252525. Inicio de escritorio (1280 px) y móvil (390 px) sin desbordamiento en las vistas revisadas; galería sin errores de consola. TypeScript y build:pages correctos.
