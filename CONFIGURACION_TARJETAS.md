# 🎯 Configuración de Tarjetas y Celulares - Apps en Acción

Este archivo explica cómo personalizar completamente la sección "Apps en Acción" usando la función de configuración centralizada.

## 📍 Ubicación del Archivo de Configuración

**Archivo:** `components/Developments.tsx` (líneas 9-31)

## 🛠️ Parámetros Configurables

### 📱 **Cajón Azul (Tarjeta Principal)**

```javascript
// 🎨 Configuración del cajón azul
cardWidth: 'auto',          // Opciones: 'auto' | '250px' | '300px' | '350px'
cardHeight: 'h-full',       // Opciones: 'h-full' | 'h-96' | 'h-80' | '400px'
cardPadding: 'p-3 sm:p-4', // Opciones: 'p-2' | 'p-3 sm:p-4' | 'p-4 sm:p-6'
```

### 📱 **Celular Mockup**

```javascript
// 📱 Configuración del celular
phoneWidth: 'w-28 sm:w-32',    // Ancho del celular
phoneHeight: 'h-52 sm:h-60',   // Alto del celular  
phonePosition: 'justify-center items-center', // Posición dentro del cajón
```

#### Opciones de Ancho (phoneWidth):
- `'w-20 sm:w-24'` - Extra pequeño
- `'w-24 sm:w-28'` - Pequeño
- `'w-28 sm:w-32'` - Normal (actual)
- `'w-32 sm:w-36'` - Grande
- `'w-36 sm:w-40'` - Extra grande

#### Opciones de Alto (phoneHeight):
- `'h-44 sm:h-48'` - Extra pequeño
- `'h-48 sm:h-52'` - Pequeño
- `'h-52 sm:h-60'` - Normal (actual)
- `'h-60 sm:h-64'` - Grande
- `'h-64 sm:h-72'` - Extra grande

#### Opciones de Posición (phonePosition):
- `'justify-start items-start'` - Esquina superior izquierda
- `'justify-center items-start'` - Centro superior
- `'justify-end items-start'` - Esquina superior derecha
- `'justify-start items-center'` - Centro izquierda
- `'justify-center items-center'` - Centro (actual)
- `'justify-end items-center'` - Centro derecha
- `'justify-start items-end'` - Esquina inferior izquierda
- `'justify-center items-end'` - Centro inferior
- `'justify-end items-end'` - Esquina inferior derecha

### 🎯 **Carrusel y Paginación**

```javascript
itemsPerPage: 4,  // Número de tarjetas antes de "Siguiente"
```

#### Opciones recomendadas:
- `2` - Para pantallas pequeñas
- `3` - Para diseño compacto
- `4` - Normal (actual)
- `5` - Para pantallas grandes
- `6` - Para pantallas ultra-wide

### 📐 **Grid Responsivo**

```javascript
gridCols: {
  mobile: 'grid-cols-1',        // 1 columna en móvil
  tablet: 'sm:grid-cols-2',     // 2 columnas en tablet
  laptop: 'lg:grid-cols-3',     // 3 columnas en laptop
  desktop: 'xl:grid-cols-4'     // 4 columnas en desktop
},
```

### 📏 **Espaciado**

```javascript
gap: 'gap-3 sm:gap-4',  // Espacio entre tarjetas
```

#### Opciones de espaciado:
- `'gap-1 sm:gap-2'` - Muy compacto
- `'gap-2 sm:gap-3'` - Compacto
- `'gap-3 sm:gap-4'` - Normal (actual)
- `'gap-4 sm:gap-6'` - Espacioso
- `'gap-6 sm:gap-8'` - Muy espacioso

## 🚀 Ejemplos de Configuración

### Ejemplo 1: Tarjetas Grandes con Celulares Grandes
```javascript
const CARD_CONFIG = {
  cardWidth: '320px',
  cardHeight: 'h-96',
  cardPadding: 'p-4 sm:p-6',
  phoneWidth: 'w-32 sm:w-36',
  phoneHeight: 'h-60 sm:h-64',
  phonePosition: 'justify-center items-center',
  itemsPerPage: 3,
  gridCols: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2',
    laptop: 'lg:grid-cols-3',
    desktop: 'xl:grid-cols-3'
  },
  gap: 'gap-4 sm:gap-6',
};
```

### Ejemplo 2: Diseño Compacto
```javascript
const CARD_CONFIG = {
  cardWidth: 'auto',
  cardHeight: 'h-80',
  cardPadding: 'p-2 sm:p-3',
  phoneWidth: 'w-24 sm:w-28',
  phoneHeight: 'h-48 sm:h-52',
  phonePosition: 'justify-center items-center',
  itemsPerPage: 6,
  gridCols: {
    mobile: 'grid-cols-2',
    tablet: 'sm:grid-cols-3',
    laptop: 'lg:grid-cols-4',
    desktop: 'xl:grid-cols-6'
  },
  gap: 'gap-2 sm:gap-3',
};
```

### Ejemplo 3: Celulares Posicionados Arriba
```javascript
const CARD_CONFIG = {
  cardWidth: 'auto',
  cardHeight: 'h-full',
  cardPadding: 'p-3 sm:p-4',
  phoneWidth: 'w-28 sm:w-32',
  phoneHeight: 'h-52 sm:h-60',
  phonePosition: 'justify-center items-start', // ← Cambio aquí
  itemsPerPage: 4,
  // ... resto igual
};
```

## ⚡ Cómo Aplicar Cambios

1. **Abre el archivo:** `components/Developments.tsx`
2. **Encuentra la sección:** `CARD_CONFIG` (líneas 9-31)
3. **Modifica los valores** según tus necesidades
4. **Guarda el archivo**
5. **Los cambios se aplicarán automáticamente**

## 💡 Tips Importantes

- **cardWidth: 'auto'** se adapta al contenido automáticamente
- **cardWidth con px** fuerza un ancho fijo (ej: '300px')
- Las clases de Tailwind son responsivas (sm:, lg:, xl:)
- Siempre prueba en diferentes tamaños de pantalla
- El **itemsPerPage** debe coincidir con el número de columnas en desktop para mejor UX

---

**¡Listo!** Ahora puedes personalizar completamente la apariencia de la sección "Apps en Acción" desde un solo lugar. 🎉