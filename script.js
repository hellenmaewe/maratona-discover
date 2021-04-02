const Modal = {
    open(){
        //abrir modal
        //adicionar  class active ao Modal   
       document
            .querySelector('.modal-overlay')
            .classList.add('active')  
            .add('active') 
    },
    close(){
        // fechar o Modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active') 
    }
}