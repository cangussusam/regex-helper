import { RegexStyles } from "./regex-styles.js"

export class RegexMessages{

    static errorInputRegex(message: HTMLParagraphElement){
        RegexStyles.addParagraphChange()
        message.innerHTML = 'Insert a Regular Expression.' 
    }
    static errorInputText(message: HTMLParagraphElement){
        message.innerHTML = 'Insert a valid Text.'
    }
}