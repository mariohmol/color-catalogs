import COLORS from '../src/colors'
import * as fs from 'fs'
import * as path from 'path'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import * as dotenv from 'dotenv'

dotenv.config()

function getAllKeys() {
    let data = {}
    let total = 0
    for (const key in COLORS) {
        total += Object.keys(COLORS[key]).length
        data = { ...data, ...COLORS[key] }
    }
    console.info('Total found: ', total)
    const keys = Object.keys(data).sort((a, b) => a > b ? 1 : -1).reduce((acc: any, key: string) => {
        const vals = key.split(' - ')
        let text = vals[0]
        if (vals.length > 1) {
            text = vals[1]
        }
        text = text.trim()
        acc[text] = text
        return acc
    }, {})
    fs.writeFileSync(path.join(__dirname, "../src/i18n/en.json"), JSON.stringify(keys, null, 2));
    mergeLangKeys(keys)
}

async function mergeLangKeys(keys: any) {
    const translations: any = {}
    const languages = ['pt', 'es', 'de', 'it']
    for (const index in languages) {
        const lang = languages[index]
        const final = await translateLanguage(keys, lang, translations)
        fs.writeFileSync(path.join(__dirname, `../src/i18n/${lang}.json`), JSON.stringify(final, null, 2));
    }

}

async function translateLanguage(keys: any, lang: string, translations: any) {
    let langs: any = fs.readFileSync(path.join(__dirname, `../src/i18n/${lang}.json`), 'utf8');
    langs = JSON.parse(langs)
    
    const final: any = {}
    
    for (const key in keys) {
        if (langs[key]) {
            final[key] = langs[key]
            console.info(`already translated: ${key}`)
            continue
        }

        if (!translations[key]) {
            console.info(`translating: ${key}`)
            const newText = await translateKey(key)
            translations[key] = newText
        }
        if (translations[key]) {
            console.info(`translate found: ${key}`)
            const val = translations[key].find((t: any) => t.to === lang)
            if (val) {
                final[key] = val.text
            }
        }
    }
    return final
}

function translateKey(text: string) {


    var subscriptionKey = process.env.TRANSLATE_SUBSCRIPTION_KEY;
    var endpoint = "https://api.cognitive.microsofttranslator.com";

    var location = "southcentralus";
    return axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['es', 'pt', 'de', 'it']
        },
        data: [{
            'text': text
        }],
        responseType: 'json'
    }).then(function (response) {
        return response.data[0].translations
    })
}

async function main() {
    getAllKeys()
    // await translateKey()
}

main()