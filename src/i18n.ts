import { ILocale, IResources } from './types/i18n.types';

export class I18n {
    private language: string;
    private resources: IResources = {};
    
    public constructor(language: string = 'en', locales: Array<ILocale> = []) {
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