const cartSection = document.getElementById('cart_item')

window.addEventListener('scroll', (e) => {
    const cartSectionList = cartSection.classList
    if(this.scrollY === 0){
        cartSectionList.add('hidden')
        cartSectionList.add('block')
    }else{
        cartSectionList.add('block')
        cartSectionList.remove('hidden')
    }

    const element = document.querySelector('#location');
	const position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		console.log('Fully Visible');
	}else if(position.top < window.innerHeight && position.bottom >= 0){
        console.log('Partially Visible');
    }else {
        const Category = document.getElementById('category')
        Category.style.position = 'sticky' 
        Category.style.top = 0 
    }

})