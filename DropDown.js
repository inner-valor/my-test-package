function dropDownFunction() {
    const targetElements = document.querySelectorAll('.drop-down-container');
    const dropDownElement = document.querySelectorAll('.drop-down');

    targetElements.forEach((element) => {
        element.style = `
            position: relative;
            top: 0;
            height: 0;
            width: 100%;
            overflow: hidden;
        `
        element.querySelector('.drop-down-content').style = `height: auto;`;
    });

    dropDownElement.forEach((element) => {
        const btn = element.querySelector('.toggle');
        
        btn.addEventListener('click', () => {
            dropDown(element);
        })
        
    })
    
    
    function dropDown(element) {
        
        const dropDownContainer = element.querySelector('.drop-down-container');
        const dropDownContent = element.querySelector('.drop-down-content');

        if (dropDownContainer.getBoundingClientRect().height === 0) {
            dropDownContainer.style.height = `${dropDownContent.getBoundingClientRect().height}px`
        } else {
            dropDownContainer.style.height = 0;
        }
        
    }
    

    
}

export default dropDownFunction;