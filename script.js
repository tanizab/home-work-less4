const getRandom = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

const contactForm = document.forms.contactForm;
let resultBlock = document.body.lastElementChild.previousElementSibling.lastElementChild;
console.log(resultBlock);

const sendForm = function(e) {
    e.preventDefault();
    let data = {};
    for (let i = 0; i < contactForm.elements.length; i++) {
        let child = contactForm.elements[i];

        if (child.nodeName !== "BUTTON") {
            data[child.name] = child.value;
        }
    }
    console.log(data);

            let div = `<div class="box">`;
            div += `<div class="numCard">`;
                for(let key in number){
                    div += `<div class="numCard_info">${number[key]}</div>`;
                }
            div += `</div>`;
            div += `<div class="user">`;
                for(let k in data){
                    div += `<div class="user_name"><div>${data[k]}</div></div>`;
                }
            div += `</div>`;
            div += `<div class="icon"></div>`;
            div += `</div>`;
            resultBlock.innerHTML = div;
            contactForm.reset();
}
    let number = [];
    let c = 16;
    let str = "";
    while(c--) {
        str += getRandom();
        if (c % 4 === 0){
            number.push(str);
            str = "";
        }
    }

let sub = contactForm.elements[contactForm.elements.length - 1];
sub.onclick = sendForm;












