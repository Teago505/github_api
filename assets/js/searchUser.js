function searchUsers (name, Npage) {
    Npage = typeof Npage !== 'undefined' ? Npage : 1;

    var urlSearch = `${url}search/users?q=${name}&per_page=50&page=${Npage}`;

    var obj = getJson(urlSearch);

    constructSearchUsers(name, Npage, obj.items, obj.total_count);
}

function constructSearchUsers(name, Npage, obj, total_count) {

    Npage = typeof Npage !== 'undefined' ? Npage : 1;

    var user_area = document.getElementById('user-area');

    user_area.innerHTML = '';

    obj.forEach((e) => {
        var element = constructSearchBarElement(e);

        user_area.appendChild(element);
    });

    function verifyNumberPages() {

        var numberPagesPossibles = () => {
            var pages = 1;

            while (pages < (total_count / 50)) {
                pages++;
            }

            return pages;
        }

        if (Npage == 20) {
            return false;
        } else {
            if (Npage >= numberPagesPossibles()) {
                return false;
            } else {
                return true;
            }
        }
    }

    var divButtonsPage = document.createElement('div')
    divButtonsPage.classList.add('divButtonsPage');

    if (Npage >= 2) {
        var backButton = constructButtonPage((Npage - 1), '<', name);

        divButtonsPage.appendChild(backButton);
    }
    if (total_count > 50 && verifyNumberPages()) {
        var nextButton = constructButtonPage((Npage + 1), '>', name);

        divButtonsPage.appendChild(nextButton);
    }

    user_area.appendChild(divButtonsPage);
}

function nextPage(name, Npage, url) {
    searchUsers(name, Npage);
    window.scrollTo(0, 0);
}