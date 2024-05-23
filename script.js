/* Auswahl der Sektionen und Navigationslinks*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Aktualisierung der aktiven Navigationslinks. 
Dieser Code sorgt dafür, dass der entsprechende Navigationslink hervorgehoben wird,
wenn die zugehörige Sektion in den Ansichtsbereich scrollt
und ändert die Darstellung des Headers basierend auf der Scroll-Position.*/

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    /*Visuelle Änderungen am Header*/
    header.classList.toggle('bar' , window.scrollY > 100);

    /*Menü- und Navbar-Reset, schließt Dropdown-Menü*/
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*Dieser Code sorgt dafür, dass beim Klicken auf das Menü-Icon dessen Aussehen geändert wird
(durch Hinzufügen oder Entfernen der bx-x-Klasse) und dass die Navigationsleiste ein- oder ausgeblendet wird
(durch Hinzufügen oder Entfernen der active-Klasse)*/

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

