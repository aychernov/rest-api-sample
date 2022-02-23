// Получение json
fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((res) => res.json())
    .then(data => setHtml(data))
    
//Отрисовка html + получение основных ключей из объекта
function setHtml({squadName, homeTown, formed, members}) {
    document.body.insertAdjacentHTML('afterbegin', `
    <h1>${squadName}</h1>
    <h2>HomeTown: ${homeTown} // Formed: ${formed} </h2>
    <div class="heroes"> ${setMembers(members).join(' ')} </div>
    `)
}

//Получение героев и подразделов из массива + преобразование в строку в конце
function setMembers(members) {
    return members.map
    (hero => (`<div>
    <h3> ${hero.name} <h3/>
    <p>Secret identity: ${hero.secretIdentity}</p>
    <p>Age: ${hero.age}</p>
    <p>Superpowers: </p>
    <ul>
     ${hero.powers.map(power => `
    <li>${power}</li>`) .join(' ')}
</ul>
</div>
    `))
}
