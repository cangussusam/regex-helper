import { RegexStyles } from "./regex-styles.js";
export class RegexMessages {
    static errorInputRegex(message) {
        RegexStyles.addParagraphChange();
        message.innerHTML = 'Insert a Regular Expression.';
    }
    static errorInputText(message) {
        message.innerHTML = 'Insert a valid Text.';
    }
}
