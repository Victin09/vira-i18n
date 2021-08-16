import fs from 'fs';
import path from 'path'

import { Translations } from "../types/types";

class Translator {

    private lang: string;
    private translations: Translations;
    private path: string;

    constructor() {
        // this.lang = this.getLanguage();
        this.lang = "en"
        this.translations = {}
        this.path = ''
        // this.load(this.lang);
    }

    getLanguage() {
        const lang = navigator.languages ? navigator.languages[0] : navigator.language;

        return lang.substr(0, 2);
    }

    

    // load(lang: string) {
    //     if (lang)
    //         this.lang = lang;

    //     fetch(`/i18n/${this.lang}.json`)
    //     .then((res) => res.json())
    //     .then((translation) => {
    //         console.log('translation', translation);
            
    //         this.translations = translation;
    //     })
    //     .catch(() => {
    //         console.error(`Could not load ${this.lang}.json.`)
    //     });
    // }

    changeI18nPath(path: string) {
        this.path = path;
    }

    load(lang: string) {
        const file = path.resolve(__dirname, `../../src/i18n/${lang}.json`)
        console.log('path', file);
        
        fs.readFile(this.path + lang, (err, data) => {
            if (err) throw err;
            let student = JSON.parse(data.toString());
            console.log(student);
        });
    }

    t(key: string): string {
        return this.translations[key] || key;
    }
}

export const i18n = new Translator();

export const t = new Translator().t;