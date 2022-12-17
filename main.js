const firstName = 'Grzegorz'
const age = '24'
 
// alert('BMW is the best... read more')
// console.log(`Cześć, nazywam się ${firstName} i mam ${age} lata, a to jest moja pierwsza strona internetowa.`)

function greet(firstName, age){
    console.log(
        `Cześć Przyjacielu! Poznaj moją pasje. Nazywam sie ${firstName} i mam dopiero ${age} xd` 
    );
}

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content
}


greet(firstName, age)

createContent(`.article-about-bmw__title--js`,`Czy wiesz co to za model?`)