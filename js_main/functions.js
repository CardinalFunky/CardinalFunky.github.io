/* This file contains every function that will be used all over the entire site. */

/**
 * This function appends the primary header to the main website.
 * 
 * @param {*} Object The HTML element
 */
function Header(object) {
    let head = 
        '<img src="./images/profile/funky.jpg" class="img-fluid rounded mx-auto d-block">' +
        '<h1 class="display-4"><center>Cardinal Funky</center></h1>';
        
    $(object).append(head);
}

/**
 * This function appends the primary navbar to the main website.
 * 
 * @param {*} Object The HTML element
 */
function NavBar(Object) {
    let navbar = 
        '<div class="navbar-nav mr-auto" id="navbarNav">' +
            '<ul class="navbar-nav" id="primary-navbar-nav">' +
            '</ul>' +
        '</div>';
    $(Object).append(navbar);

    let navList = [
        ["https://medium.com/@cardinalfunky", "Medium"],
        ["https://cardinaljourney.home.blog/", "Personal Blog"],
        ["http://lorekeeper.home.blog", "Lore Blog"],
        ["https://www.completionator.com/Community/Profile/14041", "Completionator"],
        //["https://www.exophase.com/user/CardinalFunky/", "Exophase"],
        ["https://github.com/CardinalFunky", "Github"],
        ["https://www.goodreads.com/user/show/67506229-cardinalfunky", "GoodReads"],
        ["https://anilist.co/home", "Anilist"],
        ["https://myanimelist.net/profile/Cardinal_Funky", "MyAnimeList"],
        ["https://trakt.tv/users/cardinal-funky", "Trakt.tv"],
        ["https://deckbox.org/users/cardinalfunky", "DeckBox.org"]
    ];

    for (let i = 0; i < navList.length; i++) {
        let link = 
            '<li class="nav-item">' +
                '<a href="' + navList[i][0] + '" class="nav-link">' + navList[i][1] + '</a>' +
            '</li>';

        $('#primary-navbar-nav').append(link);
    }
}

/**
 * This function appends all of the sites I've built or want to build
 * as Bootstrap Cards.
 * 
 * @param {*} Object The HTML element
 */
function sites(object) {

    /**
     * An array of information for the Bootstrap cards.
     * 
     * Each sites item includes:
     *      1) The name of the video game.
     *      2) The picture of the video game.
     *          - If null, show the default image.
     *      3) The site link.
     */
    let sites = [
        ["Training Hero: Always Focuses on Training", 'https://lh3.googleusercontent.com/uGr38-fciGjKpzMU8nIy765kNAG0uphaakufuo75TCUaI0t31SyXStGRkoZgIwVFr6aV', "#"],
        ["Exos Heroes", "https://mmoculture.com/wp-content/uploads/2019/09/Exos-Heroes-image.jpg", "#"]
    ];

    for (let i = 0; i < sites.length; i++) {
        let card = `
            <div class="card" style="width: 18rem; display: inline-block; margin-right: 1%;">
                <img src="` + sites[i][1] + `" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center">` + sites[i][0] + `</h5>
                <p class="card-text"></p>
                <a href="` + sites[i][2] + `" class="btn btn-primary btn-lg btn-block">Website</a>
                </div>
            </div>
        `;

        $(object).append(card);
    }
}