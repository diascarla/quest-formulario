const campo = document.querySelectorAll(".campo");
const btn = document.querySelector("#btn");

btn.addEventListener('click', (evento) =>{
    evento.preventDefault()

    campo.forEach((item) => {

        if (item.value !== "") {
            item.classList.remove("vazio");
            item.classList.add("ativo");
            item.nextElementSibling.classList.remove("aparecer")
        } else{
            item.classList.remove("ativo");
            item.classList.add("vazio");
            item.nextElementSibling.classList.add("aparecer")
        }
    });
});






