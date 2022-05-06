import { RegexErrors } from "../model/regex-input-errors.js";
import { RegexStyles } from "../view/regex-styles.js";
export class RegexController {
    constructor() {
        this.inputRegex = document.querySelector('#regex');
        this.inputEntry = document.querySelector('#entry');
        this.paragraphRegex = document.querySelector('.info__paragraph');
        this.paragraphEntry = document.querySelector('.entry__paragraph');
        this.resFunction = document.querySelector('.res__function');
        this.resEntry = document.querySelector('.res__entry');
        this.checkedArray = [];
    }
    changeConfigurations(input) {
        this.func = input.innerHTML;
        this.checkedArray = [];
        const check = document.querySelectorAll('.info__checked');
        check.forEach((item) => {
            if (item.checked)
                this.checkedArray.push(item.value);
        });
        this.regex();
    }
    regex() {
        if (!this.func)
            this.func = 'Match';
        this.resFunction.innerHTML = '';
        this.resEntry.innerHTML = '';
        this.resEntry.classList.add('display');
        if (!RegexErrors.err(1, this.paragraphRegex, this.inputRegex))
            return;
        this.paragraphRegex.innerHTML = '';
        RegexStyles.removeParagraphChange();
        if (!RegexErrors.err(2, this.paragraphEntry, this.inputEntry))
            return;
        this.paragraphEntry.innerHTML = '';
        this.applyRegex(new RegExp(this.inputRegex.value, this.checkedArray.join('')), this.inputEntry.value);
    }
    applyRegex(userRegex, userText) {
        this.resEntry.classList.remove('display');
        if (this.func == 'Match') {
            const matchText = userText.match(userRegex);
            if (matchText) {
                this.resFunction.innerHTML = `<strong class="p__functions">Returned string:</strong> ${matchText[0]} x${matchText.length}`;
                this.resEntry.innerHTML = userText
                    .replace(userRegex, match => `<mark class="highlight">${match}</mark>`);
            }
            else {
                this.paragraphEntry.innerHTML = 'None match found.';
                this.resEntry.classList.add('display');
            }
        }
        else if (this.func == 'Search') {
            const searchText = userText.search(userRegex);
            this.resFunction.innerHTML = `<strong class="p__functions"> Returned index:</strong> ${searchText.toString()}`;
            this.resEntry.innerHTML = userText
                .replace(userRegex, match => `<mark class="highlight">${match}</mark>`);
        }
        else if (this.func == 'Test') {
            this.resEntry.classList.add('display');
            const testText = userRegex.test(userText);
            this.resFunction.innerHTML = `<strong class="p__functions">Returned boolean:</strong> ${testText.toString()}`;
        }
    }
}
