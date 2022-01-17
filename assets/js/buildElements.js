function constructElementCardUser(obj) {
    var block = document.createElement('div');
    block.classList.add('block-user');

    // Construindo o Header

    var header = document.createElement('section');
    header.classList.add('block-user-header');

    var json_header = obj.header;

    var avatar = document.createElement('img')
    avatar.src = json_header.avatar_url;
    avatar.classList.add('icon');

    var div = document.createElement('div');

    var name = document.createElement('a');
    name.innerText = json_header.name;
    name.setAttribute('href', json_header.github);
    name.setAttribute('target', '_blank')

    div.appendChild(name);

    if (json_header.bio != null) {
        var bio = document.createElement('h2');
        bio.innerText = json_header.bio;

        div.appendChild(bio);
    }
    if (json_header.local != null) {
        var local = document.createElement('h2');
        local.innerHTML = `${json_header.local} <img class="svg-location" src="./assets/img/location.svg">`;

        div.appendChild(local);
    }


    header.appendChild(avatar);
    header.appendChild(div);

    // Construindo o Main

    var json_main = obj.main;

    var main = document.createElement('section');
    main.classList.add('block-user-main');

    json_main.forEach((e) => {
        var card = document.createElement('a');
        card.setAttribute('target', '_blank');
        card.setAttribute('href', e.link);
        
        var p = document.createElement('p');
        p.innerText = `${e.name}: ${e.value}`;
        p.setAttribute('onselectstart', 'return false');

        card.appendChild(p);

        main.appendChild(card);
    })

    
    // Construindo o bloco
    
    block.appendChild(header);
    block.appendChild(main);
    
    var areaElement = document.createElement('div');
    areaElement.id = 'area';
    block.appendChild(areaElement);

    return block;
}

function constructSearchBarElement(obj) {
    var name = obj.login;
    var avatar_url = obj.avatar_url;
    var type = obj.type;

    var block = document.createElement('button');
    block.classList.add('search-block');
    block.setAttribute('onclick', `getUser("${name}")`);

    var img = document.createElement('img');
    img.src = avatar_url;

    var title_block = document.createElement('h2');
    title_block.innerText = name;

    var type_block = document.createElement('span');
    type_block.innerText = type;


    block.appendChild(img);
    block.appendChild(title_block);
    block.appendChild(type_block);

    return block;
}

function constructButtonPage (page, value, name) {
    var button = document.createElement('button');
    button.setAttribute('onclick', `nextPage('${name}', ${page})`);
    button.classList.add('next-button');
    button.innerText = value;

    return button;
}