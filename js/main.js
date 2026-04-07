
// burger
document.addEventListener('click', burger)

function burger(e) {

    if (e.target.closest('.header__icons-burger')) {
        document.body.classList.add('body--opened-menu')
    }

    if (e.target.closest('.header__nav-close') ||
        e.target.closest('.nav_link') ||
        e.target.closest('.header__logo')) {
        document.body.classList.remove('body--opened-menu')
    }
}


// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },


});


// tabs-about

const tabControls = document.querySelector('.about-expanded__tabs')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.about-expanded__tabs-tab')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('about-expanded__tabs-tab--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.about-expanded__tabs-tab--active')
    const activeContent = document.querySelector('.about-expanded__content--show')

    if (activeControl) {
        activeControl.classList.remove('about-expanded__tabs-tab--active')
    }
    if (activeContent) {
        activeContent.classList.remove('about-expanded__content--show')
    }

    tabControl.classList.add('about-expanded__tabs-tab--active')
    tabContent.classList.add('about-expanded__content--show')

}

// tabs-table

const tabControlsTable = document.querySelector('.timetable__list-tabs')

tabControlsTable.addEventListener('click', toggleTab2)

function toggleTab2(e) {

    const tabControlTable = e.target.closest('.timetable__tab')

    if (!tabControlTable) return
    e.preventDefault()
    if (tabControlTable.classList.contains('timetable__tab--active')) return

    const tabContentID = tabControlTable.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.timetable__tab--active')
    const activeContent = document.querySelector('.timetable__table--show')

    if (activeControl) {
        activeControl.classList.remove('timetable__tab--active')
    }
    if (activeContent) {
        activeContent.classList.remove('timetable__table--show')
    }

    tabControlTable.classList.add('timetable__tab--active')
    tabContent.classList.add('timetable__table--show')

}





