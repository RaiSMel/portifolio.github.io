export const criarSkills = (nome, Classeimagem, tipo) => {
    let skillsItems = "";
    if(tipo == "s")
    {
      skillsItems = document.querySelector('[skills__items-soft]');
    }
    else
    {
        skillsItems = document.querySelector('[skills__items-hard]');
    }

    if(tipo == "h" || tipo == "s")
    {
    const divSkill = document.createElement('div');
    const divImg = document.createElement('div');
    const divConteinerParagrafo = document.createElement('div');
    const paragrafo = document.createElement('p');

    divSkill.classList.add('skill__item');
    divImg.classList.add('skill__item-imagem', Classeimagem);
    divConteinerParagrafo.classList.add('skill__nome-ajustador');
 
    paragrafo.classList.add('skill__item-nome')
    paragrafo.textContent = nome;

    divConteinerParagrafo.appendChild(paragrafo);
    divSkill.appendChild(divImg);
    divSkill.appendChild(divConteinerParagrafo);
    skillsItems.appendChild(divSkill);
}
}