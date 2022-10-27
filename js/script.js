// const arrListaSpesa = [
//     "acqua",
//     "pasta",
//     "affettati",
//     "pane",
//     "uova",
//     "vino",
//     "biscotti",
//     "latte",
// ]

// const eleListaSpesa = document.querySelector(".lista-spesa");

// let i = 0;
// while (i < arrListaSpesa.length) {
//     eleListaSpesa.innerHTML += arrListaSpesa[i];
//     console.log(i);
//     i++;
// }

const arrListaSpesa = [
    "acqua",
    "pasta",
    "affettati",
    "pane",
    "uova",
    "vino",
    "biscotti",
    "latte",
]

const eleListaSpesa = document.querySelector(".lista-spesa");

let i = 0;
while (i < arrListaSpesa.length) {
    const eleLi = document.createElement("li");
    eleLi.innerHTML += arrListaSpesa[i];
    i++;
    eleListaSpesa.append(eleLi);
}