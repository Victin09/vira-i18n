"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.I18n=function(e,t){var n=this;void 0===e&&(e="en"),void 0===t&&(t={}),this.resources={},this.addLocale=function(e){n.language=e.language,n.resources=e.resources},this.getLanguage=function(){return n.language},this.i18nDate=function(e,t){return new Intl.DateTimeFormat(n.language,t).format(e)},this.i18nNumber=function(e,t){return new Intl.NumberFormat(n.language,t).format(e)},this.i18n=function(e){return n.resources[e]||e},this.language=e,this.resources=t};