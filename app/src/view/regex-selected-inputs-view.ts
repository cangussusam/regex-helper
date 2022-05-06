
export class SelectedInputs {

    static flagDropdown(){
        const list = document.querySelector('#list__flags')
        if(list){
            if(list.classList.contains('visible')){
                list.classList.remove('visible')

                const resetStyle = document.querySelector('.info__submit')
                if(resetStyle) resetStyle.classList.remove('btn__change')
            
            }else{
                list.classList.add('visible')
                
                const resetStyle = document.querySelector('.info__submit')
                if(resetStyle) resetStyle.classList.add('btn__change')
            
            }
        }
    }
}