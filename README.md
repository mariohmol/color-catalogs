# colors-catalog

Find good color catalog for your business, let the users pick up colors and find the color closer based on name or RGB/Hash

`npm i colors-catalog` 

Total Colors so far: 8191
## Catalogs

* X11
* Flexa
* RAL
* Wikipedia
* NTC
* Japanese: https://www.colordic.org/
* [Matlib](https://github.com/bakennedy/colorspace/blob/master/colors.json)
* [xkcd](https://matplotlib.org/stable/tutorials/colors/colors.html)
* [ISCC/NBS](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_nbs.asp.html)
* [FS595](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_fs595.asp.html)
* [British Standard](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_british.asp.html)
* [British 4800](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_british.asp.html)
* [Australia](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_australia.asp.html)
* [Resene](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_resene.asp.html)
### Crayola

[Crayola 72](http://www.jennyscrayoncollection.com/2019/03/complete-list-of-current-crayola.html)
[Crayola 100](http://www.jennyscrayoncollection.com/2019/03/complete-list-of-current-crayola.html)


## Todo

* Windows
* [TKinter](http://www.science.smith.edu/dftwiki/index.php/Color_Charts_for_TKinter)
* [Pyxplot](http://pyxplot.org.uk/current/doc/html/ch-color_charts.html)
* [PyX](https://pyx-project.org/manual/colorname.html)
* [R](https://www.datanovia.com/en/blog/awesome-list-of-657-r-color-names/)
* [Werver](https://www.c82.net/werner/)
* [Ingrid Sunderberg](https://ingridsnotes.wordpress.com/2014/02/04/the-color-thesaurus/)
* [Warren Mars](http://warrenmars.com/visual_art/theory/colour_wheel/wheel_colours.htm)
* Japanese Colors [1](https://nipponcolors.com/) , [2](https://www.wikiwand.com/en/Traditional_colors_of_Japan)[3](http://kidorakujapan.com/know/others_color.html), [4](https://iwabijin.wordpress.com/japanese-traditional-colors/), [5](https://www.stefanimhoff.de/traditional-colors-of-japan/),
[6](https://simplicable.com/new/japanese-colors)


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

## Internationalization (i18n)

We have all the possible colors names unified in a json file and we translated the colors names for the main languages.

Here you can find color names in:
* English
* Italian
* Portuguese
* Spanish
* Detch

## Utils

Methods utils to work with colors:

* colorDistance
* HEXtoRGB
* findByColor
* findColorByName



# Contribute

To contribute to this project, follow the docs: [Contribute](CONTRIBUTING.md)