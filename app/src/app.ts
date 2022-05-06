import { RegexController } from "./controller/regex-controller.js"
import { SelectedInputs } from "./view/regex-selected-inputs-view.js"

const controller = new RegexController

const span = document.querySelector('.list__span')
if (span) {
    span.addEventListener('click', function () {
        SelectedInputs.flagDropdown()
    })
}

const submit = document.querySelector('.info__button') as HTMLButtonElement
const inputRegex = document.querySelector('#regex') as HTMLInputElement
const inputEntry = document.querySelector('#entry') as HTMLInputElement
const inputFunction = document.querySelectorAll('.functions__selected')

inputRegex.addEventListener('input', function () {
    controller.regex()
})

inputEntry.addEventListener('input', function () {
    controller.regex()
})

submit.addEventListener('click', function () {

    if (inputFunction) {
        inputFunction.forEach((option: HTMLOptionElement) => {
            if (option.selected) {
                console.log(option)
                controller.changeConfigurations(option)
            }
        })
    }
})

