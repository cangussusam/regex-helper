export class RegexStyles {
    static addParagraphChange() {
        const infoRegex = document.querySelector('.info__regex');
        if (infoRegex)
            infoRegex.classList.add('p__change');
    }
    static removeParagraphChange() {
        const infoRegex = document.querySelector('.info__regex');
        if (infoRegex)
            infoRegex.classList.remove('p__change');
    }
}
