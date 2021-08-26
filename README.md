# color-catalogs
[![Build Status](https://app.travis-ci.com/mariohmol/color-catalogs.svg?branch=master)](https://app.travis-ci.com/mariohmol/color-catalogs)

Find good color catalog for your business, let the users pick up colors and find the color closer based on name or RGB/Hash

`npm i color-catalogs` 

![Color Catalogs](/docs/print.png)

## Navigate and find the colors [Live](https://mariohmol.github.io/color-catalogs/)

Total Colors so far: 8191
## Catalogs

* [Australia](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_australia.asp.html)
* [British Standard](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_british.asp.html) and  [British 4800](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_british.asp.html)
* [Crayola 72](http://www.jennyscrayoncollection.com/2019/03/complete-list-of-current-crayola.html) and [Crayola 100](http://www.jennyscrayoncollection.com/2019/03/complete-list-of-current-crayola.html)
* X11
* Flexa
* RAL
* Wikipedia
* NTC
* [Japanese](https://www.colordic.org/)
* [Matlib](https://github.com/bakennedy/colorspace/blob/master/colors.json)
* [xkcd](https://matplotlib.org/stable/tutorials/colors/colors.html)
* [ISCC/NBS](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_nbs.asp.html)
* [FS595](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_fs595.asp.html)
* [Resene](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_resene.asp.html)


## Catalog

Use our functions to list catalogs, colors and utils functions to show the proper and translated color to the user


## Color Picker

![Color Picker](/docs/picker.png)


## Color Swatches

![Color Grouped](/docs/grouped.png)

## Example

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
import { CompactPicker, SwatchesPicker } from 'react-color';
import { COLORS, LANGUAGES, translateByName, findByColor,groupColors } from 'color-catalogs'

function App() {
  const catalogs = Object.keys(COLORS)
  const [color, setColor] = useState('#fff')
  const [catalog, setCatalog] = useState(catalogs[0])
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  }
  const colorName = findByColor(catalog,color)
  const colors = Object.values(COLORS[catalog])
  const groupedColors = groupColors(colors)
  const langs = Object.keys(LANGUAGES)

  return (
    <div className="App">
      <h1>
          Color Catalogs
      </h1>
      <div className="search">
        <form>
          <label>Catalogs</label>
          <select onChange={({target})=>setCatalog(target.value)}>
          {catalogs.map(catalog=>(
            <option key={catalog} value={catalog}>{catalog}</option>
            )
          )}
          </select>
        </form>
        <div>
          <p> 
            Name: <b>{colorName.name}</b>
          </p>
          <p>
            Color: <b>{color}</b>
          </p>
          Translations:
          <ul>
          {langs.map(l=>(
            <li>
              {l} : {translateByName(colorName.name,l)}
            </li>
            )
          )}
          </ul>
        </div>
      </div>

      <SwatchesPicker
colors={groupedColors}
        color={color}
        onChangeComplete={handleChangeComplete}
      />

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
* findByName




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



# Contribute

To contribute to this project, follow the docs: [Contribute](CONTRIBUTING.md)