function getUser(name) {
    var urlUser = `${url}users/${name}`
    var userInfo = getJson(urlUser);

    if (userInfo == 404) {
        alert('Ocorreu um erro, verifique se o nome está correto')
    } else {

        var name = '';

        if (userInfo.name != null) {
            name = userInfo.name;
        } else {
            name = userInfo.login;
        }

        var obj = {
            'header': {
                'name': name,
                'github': userInfo.html_url,
                'avatar_url': userInfo.avatar_url,
                'bio': userInfo.bio,
                'local': userInfo.location,
                'type': userInfo.type,
            },
            'main': [
                {
                    'name': 'Repositórios',
                    'value': userInfo.public_repos,
                    'link': `${userInfo.html_url}?tab=repositories`,
                },
            ]
        }

        if (userInfo.type == 'User') {
            obj.main.push(
                {
                    'name': 'Seguidores',
                    'value': userInfo.followers,
                    'link': `${userInfo.html_url}?tab=followers`,
                },
                {
                    'name': 'Seguindo',
                    'value': userInfo.following,
                    'link': `${userInfo.html_url}?tab=following`,
                },
            )
        }

        document.getElementById('title-page').innerText = `GiHub API | ${userInfo.login}`;

        var element = constructElementCardUser(obj);

        var userArea = document.getElementById('user-area');
        userArea.innerHTML = '';
        userArea.appendChild(element);
    }
}