// write cool JS hwere!!




const myMenuOpen = document.getElementById('menuOpen')
const myMenuClose = document.getElementById('menuClose')


myMenuOpen.addEventListener('click', (e) => {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";
    document.getElementById("sideMenu").style.transition = 'width 0.5s ease-in-out';
    document.getElementById("main-container").style.transition = 'margin-left 0.5s ease-in-out';

    myMenuOpen.style.visibility = 'hidden';
    myMenuOpen.style.transition ='visibility 0s ease-in-out';

    document.getElementsByClassName('my-opacity')[0].style.opacity ='1'
    document.getElementsByClassName('my-opacity')[1].style.opacity ='1'
    document.getElementsByClassName('my-opacity')[2].style.opacity ='1'
    document.getElementsByClassName('my-opacity')[3].style.opacity ='1'
    document.getElementsByClassName('my-opacity')[4].style.opacity ='1'

})
function aOpacity(){
    document.getElementById("sideMenu").style.width = "0px";
    document.getElementById("main-container").style.marginLeft = "0px";
    myMenuOpen.style.visibility = 'visible';
    myMenuOpen.style.transition ='visibility 0.5s ease-in-out 1s';

    document.getElementsByClassName('my-opacity')[0].style.opacity ='0'
    document.getElementsByClassName('my-opacity')[1].style.opacity ='0'
    document.getElementsByClassName('my-opacity')[2].style.opacity ='0'
    document.getElementsByClassName('my-opacity')[3].style.opacity ='0'
    document.getElementsByClassName('my-opacity')[4].style.opacity ='0'

    document.getElementById("sideMenu").style.transition = 'width 0.5s ease-in-out 0.5s';
    document.getElementById("main-container").style.transition = 'margin-left 0.5s ease-in-out 0.5s';
}

function cookies(){
    document.getElementsByClassName('cookie-container')[0].style.top='200rem';
    document.getElementsByClassName('cookie-container')[0].style.transition ='top 2.5s ease-in-out';
}
