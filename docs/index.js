function renderItems() {
    const html = Object.keys(colorsCatalog.COLORS).map(color => {
        return makeCatalogItem(color)
    })
    document.querySelector('#catalog-items').innerHTML = html.join('')
}

function makeCatalogItem(color) {
    const item = colorsCatalog.COLORS[color]
    // var color = colorsCatalog.findByColor('X11', '#cc00cc') 

    const html = `  
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex">

                ${Object.keys(item).slice(0, 8).map(i => `<span class="h-10 w-10 rounded-full" style="background-color: ${item[i]}"
                alt="${i}"> </span>`).join('')}
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <p class="text-sm font-medium text-cyan-600">
                    <a href="#" class="hover:underline">
                        ${color}
                    </a>
                </p>
                <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                        Name to Color list, a common web color name
                    </p>
                </a>
            </div>
            
        </div>
    </div>`

    return html
}

function topColors(limit = 30) {
    const colorname = document.querySelector('#colorname').value.toLowerCase()
    const total = []
    for (const key in colorsCatalog.COLORS) {
        for (const item in colorsCatalog.COLORS[key]) {
            if (item.toLowerCase().indexOf(colorname) >= 0) {
                total.push({
                    name: item,
                    catalog: key,
                    value: colorsCatalog.COLORS[key][item]
                })
            }
            if(total.length === limit) return total
        }
    }
    return total
}
function makeSearch(e) {
    e.preventDefault()

    const total = topColors()
    const html = total.map(({name, value, catalog}) => `  
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex" style="background-color: ${value}">
&nbsp;
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
            <p class="text-sm font-medium text-cyan-600">
            <a href="#" class="hover:underline">
            Catalog: ${catalog}
            </a>
        </p>
            
                <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                    ${name}
                    </p>
                </a>
            </div>
            
        </div>
    </div>`)
    document.querySelector('#search-items').innerHTML = html.join('')
}

function main() {
    const search = document.querySelector('#search')
    search.addEventListener('submit', makeSearch)
    renderItems()
}

main()