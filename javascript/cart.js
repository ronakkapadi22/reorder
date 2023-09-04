const cartSection = document.getElementById('cart_item')
const modal = document.getElementById('modal');
const btn = document.querySelector('.open-btn');
const button = document.getElementById('close');
const logo = document.getElementById('logo')
const closeButton = document.getElementById('close-btn')
const storeModal = document.getElementById('store-modal')


window.addEventListener('scroll', (e) => {
    const cartSectionList = cartSection.classList
    if(this.scrollY === 0){
        cartSectionList.add('hidden')
        cartSectionList.add('block')
    }else{
        cartSectionList.add('block')
        cartSectionList.remove('hidden')
    }
})

console.log('btn', btn)



        btn.addEventListener('click', () => {
            console.log('click');
            modal.style.display = 'block';
        })

        button.addEventListener('click', () => {
            console.log('unclick');
            modal.style.display = 'none';
        })

        logo.addEventListener('click', () => {
            storeModal.style.display = 'block';
            window.onclick = function (event) {
                if (event.target == storeModal) {
                    modal.style.display = "none";
                }
            }
        })
        
        closeButton.addEventListener('click', () => {
            storeModal.style.display = 'none';
        })