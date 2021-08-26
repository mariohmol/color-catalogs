import de from './i18n/de.json'
import en from './i18n/en.json'
import es from './i18n/es.json'
import it from './i18n/it.json'
import pt from './i18n/pt.json'

const LANGUAGES: any = {
    de,
    en,
    es,
    it,
    pt
}

export function translateByColor(color: string, lang: string) {
    if (!LANGUAGES[lang]) return false
    const filtered = []
    for (const name in LANGUAGES[lang]) {
        const value = translateByName(name, lang)
        if (value) filtered.push({ name, color: value })
    }
    if (filtered.length > 1) {
        return filtered
    } else if (filtered.length === 1) {
        return filtered[0]
    }
    return false
}

export function translateByName(name: string, lang: string) {
    if (!LANGUAGES[lang]) return
    if(LANGUAGES[lang][name]) return LANGUAGES[lang][name]

    const vals = name.split(' - ')
    if(vals.length>1) name = vals[1]
    name = name.trim()
    if(LANGUAGES[lang][name]) return LANGUAGES[lang][name]
}





export default LANGUAGES