# Otumba · Primera edición

Video proporcionado por el equipo de EXPLORA EDOMEX. El original `primeredicion.mov` permanece intacto fuera del repositorio.

- Duración: 76.3763 segundos; 29.97 fps.
- Original: 302,009,650 bytes, 1920 × 1080 con franjas negras laterales.
- SHA-256 original: `195b1443b911abec3f9a6e0617f646066877c3f5d9e20fe4c5795afabf45fd2e`.
- Imagen útil: 608 × 1080, desde x=656, y=0. Cropdetect coincidió en 74 muestras distribuidas por el clip. Solo se retiraron las franjas negras.
- La pista PCM original contiene únicamente ceros en ambos canales, confirmado con astats. Las versiones web omiten esa pista vacía.

## Archivos públicos

| Archivo | Dimensiones | Bytes |
| --- | --- | --- |
| primera-edicion.mp4 | 608 × 1080 | 36,236,777 |
| primera-edicion-mobile.mp4 | 406 × 720 | 14,635,972 |
| primera-edicion-poster.webp | 608 × 1080 | 192,668 |

MP4 H.264 High, yuv420p, faststart, sin audio. El navegador elige la versión móvil por debajo de 760 px al seleccionar la fuente. No se descarga el video antes de pulsar reproducir (`preload="none"`). La portada es un fotograma real del segundo 8, convertido a WebP con Sharp, calidad 86, esfuerzo 5.

## Preparación reproducible

FFmpeg 9.0.2 de Gyan, enlazado desde el sitio oficial de FFmpeg; descarga verificada mediante SHA-256. No se requiere instalarlo como dependencia del proyecto. Sustituir `ORIGINAL.mov` por la ruta del archivo fuente y ejecutar desde esta carpeta:

```sh
ffmpeg -hide_banner -nostdin -y -i ORIGINAL.mov -map 0:v:0 -map_metadata -1 -vf crop=608:1080:656:0 -c:v libx264 -preset fast -crf 22 -maxrate 4M -bufsize 8M -threads 4 -pix_fmt yuv420p -profile:v high -level 4.1 -g 60 -an -movflags +faststart primera-edicion.mp4
ffmpeg -hide_banner -nostdin -y -i ORIGINAL.mov -map 0:v:0 -map_metadata -1 -vf crop=608:1080:656:0,scale=-2:720 -c:v libx264 -preset fast -crf 23 -maxrate 2200k -bufsize 4400k -threads 4 -pix_fmt yuv420p -profile:v high -level 3.1 -g 60 -an -movflags +faststart primera-edicion-mobile.mp4
ffmpeg -hide_banner -nostdin -y -ss 8 -i ORIGINAL.mov -vf crop=608:1080:656:0 -frames:v 1 -update 1 poster.png
```

Convertir `poster.png` con `sharp(input).webp({ quality: 86, effort: 5 })`. El PNG intermedio, las herramientas y el original MOV no forman parte de los archivos públicos.

Se decodificaron completas ambas versiones web sin errores; se comprobó reproducción y pausa en navegador a tamaño de escritorio y móvil, también con la base `/exploraEdomex/`.
