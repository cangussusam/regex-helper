import { RegexMessages } from "../view/regex-message.js"

export class RegexErrors {

    static err(typeError: number, message: HTMLParagraphElement, input: HTMLInputElement): boolean {

        if(typeError == 1) {
            if(input.value.length == 0){
                RegexMessages.errorInputRegex(message)
                return false
            }
        } 
        else if(typeError == 2) {
            if(input.value.length == 0){
                RegexMessages.errorInputText(message)
                return false
            }
        }

        return true
    }
}