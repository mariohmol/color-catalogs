# color-catalogs

Find good color catalog for your business, let the users pick up colors and find the color closer based on name or RGB/Hash

`npm i color-catalogs` 

![Color Catalogs](/docs/print.png)

## Navigate and find the colors [Live](https://mariohmol.github.io/color-catalogs/)

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
const { COLORS, findByColor } = require('color-catalogs');
// List for X11 Color Catalogs
console.log(COLORS.X11) 
// That will find the color: { name: 'Dark Violet', value: '#9400D3' }
const color = findByColor('X11', '#cc00cc') 
```

Typescript:
```ts
import { COLORS, findByColor } from 'color-catalogs';
```

Browser:
```html
<script src="color-catalogs.js"></script>
<script>
var color = colorsCatalog.findByColor('X11', '#cc00cc') ; 
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

## React

[Live Example](https://replit.com/@mariohmol/Color-Catalogs) using React , React-Color and Color-Catalogs

```jsx
import React, {useState} from 'react';
import './App.css';
import { CompactPicker } from 'react-color';
import { COLORS } from 'color-catalogs'

function App() {
  const catalogs = Object.keys(COLORS)
  const [color, setColor] = useState('#fff')
  const [catalog, setCatalog] = useState(catalogs[0])
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  }
  
  const colors = Object.values(COLORS[catalog])
  return (
    <div className="App">
      <h1>
          Color Catalogs
      </h1>
      <label>Catalogs</label>
      <select onChange={({target})=>setCatalog(target.value)}>
      {catalogs.map(catalog=>(
        <option key={catalog} value={catalog}>{catalog}</option>
        )
      )}
      </select>

      <CompactPicker
        colors={colors}
        color={color}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}

export default App;

```


## Utils

Methods utils to work with colors:

* colorDistance
* HEXtoRGB
* findByColor
* findColorByName



# Contribute

To contribute to this project, follow the docs: [Contribute](CONTRIBUTING.md)