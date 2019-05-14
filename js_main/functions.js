function Header(object) {
    var head = 
        '<img src="./images/profile/funky.jpg" class="img-fluid rounded mx-auto d-block">' +
        '<h1 class="display-4"><center>Cardinal Funky</center></h1>' +
        '<a href="https://twitter.com/CardinalFunky"><img src="./images/socialmedia/twitter.png" class="img-fluid" style="width: 50px; height: 50px;"><a>';
        
    $(object).append(head);
}

function NavBar(Object) {
    var navbar = 
        '<div class="navbar-nav mr-auto" id="navbarNav">' +
            '<ul class="navbar-nav" id="primary-navbar-nav">' +
            '</ul>' +
        '</div>';
    $(Object).append(navbar);

    var navList = [
        ["https://legendaryfunky.blogspot.com/", "Personal Blog"],
        ["http://lorekeeper.home.blog", "Lore Blog"],
        //["https://www.completionator.com/Community/Profile/14041", "Completionator"],
        //["https://www.exophase.com/user/CardinalFunky/", "Exophase"],
        ["https://github.com/CardinalFunky", "Github"],
        ["https://www.goodreads.com/user/show/67506229-cardinalfunky", "GoodReads"],
        ["https://myanimelist.net/profile/Cardinal_Funky", "MyAnimeList"],
        ["https://trakt.tv/users/cardinal-funky", "Trakt.tv"]
    ];

    for (var i = 0; i < navList.length; i++) {
        
        var link = 
            '<li class="nav-item">' +
                '<a href="' + navList[i][0] + '" class="nav-link">' + navList[i][1] + '</a>' +
            '</li>';

        $('#primary-navbar-nav').append(link);
    }
}