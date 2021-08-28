import { ILocale, IResources } from '../types/translator.types';

export class Translator {
    private resources: IResources = {};
    private language: string;
    
    public constructor(language = 'en', locales: ILocale[] = []) {
        const locale = locales.find(item => item.language === language);

        this.language = language;
        this.resources = locale ? locale.resources : {};
    }

    public addLocale = (locale: ILocale): void => {
        this.language = locale.language;
        this.resources = locale.resources;
    }

    public getLanguage = (): string => {
        return this.language
    }

    public i18nDate = (value: Date, options?: Intl.DateTimeFormatOptions): string => {
        return new Intl.DateTimeFormat(this.language, options).format(value);
    };

    public i18nNumber = (value: number, options?: Intl.NumberFormatOptions): string => {
        return new Intl.NumberFormat(this.language, options).format(value);
    };

    public i18n = (resourcesKey: string): string => {
        return this.resources[resourcesKey] || resourcesKey;
    };

}