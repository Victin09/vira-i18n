export interface IResources {
    [key: string]: string;
}

export interface ILocale {
    language: string;
    resources: IResources;
}

