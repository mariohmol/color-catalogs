# colors-catalog

Find good color catalog for your business, let the users pick up colors and find the color closer based on name or RGB/Hash

`npm i colors-catalog` 

# Catalogs

* X11,
* Flexa,
* RAL,
* Wikipedia

# Catalog

Formate seus dados com mascaras de tipos de dados brasileiros

Node:
```js
const { COLORS, findByColor } = require('colors-catalog');
// List for X11 Colors Catalog
console.log(COLORS.X11) 
// That will find the color: { name: 'Dark Violet', value: '#9400D3' }
const color = findByColor('X11', '#cc00cc') 
```

Typescript:
```ts
import { COLORS, findByColor } from 'colors-catalog';
```

Browser:
```html
<script src="colors-catalog.js"></script>
<script>
var cpf = colorsCatalog.findByColor('X11', '#cc00cc') ; 
</script>  
```


# Utils

Methods utils to work with colors:

* colorDistance
* HEXtoRGB
* findByColor
* findColorByName



# Contribute

To contribute to this project, follow the docs: [Contribute](CONTRIBUTING.md)