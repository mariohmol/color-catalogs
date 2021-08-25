import COLORS from '../src/colors'
import * as fs from 'fs'
import * as path from 'path'
// X11,
// Flexa,
// RAL,
// Wikipedia

function getAllKeys() {
    const data = { ...COLORS.X11, ...COLORS.Flex, ...COLORS.RAL, ...COLORS.Wikipedia }
    const keys = Object.keys(data).sort((a, b) => a > b ? 1 : -1).reduce((acc: any, key: string) => {
        acc[key] = key
        return acc
    }, {})
    fs.writeFileSync(path.join(__dirname, "../src/i18n/en.json"), JSON.stringify(keys, null, 2));
    mergeLangKeys(keys)
}

function mergeLangKeys(keys: any) {

    const languages = ['pt']
    for(const index in languages){
        const lang = languages[index]
        const langs: any = fs.readFileSync(path.join(__dirname, `../src/i18n/${lang}.json`));
        for(const key in keys){
            if(langs[key]){

            }
        }
        // fs.writeFileSync(path.join(__dirname, `../src/i18n/${lang}.json`), JSON.stringify(keys, null, 2));
    }
    
}

getAllKeys()