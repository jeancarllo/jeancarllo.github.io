const nav_s = document.getElementById('nav-s');
const nav_md = document.getElementById('nav-md');
const btn_scroll = document.getElementById('btn-scroll');
const navbar_nav = document.getElementById('navbarNav');
const s_list = document.getElementById('s-list');
const nav_span_title = document.getElementById('nav-span-title');

const scroll_action = 100;

function bgAction() {
    if (window.scrollY >= scroll_action) {
        // md
        nav_md.classList.add('scrolled');

        // s
        nav_s.classList.add('scrolled');
        nav_span_title.classList.add('visible');
    } else {
        // md
        nav_md.classList.remove('scrolled');

        // s
        if (!navbar_nav.classList.contains('show')) {
            nav_s.classList.remove('scrolled');
            nav_span_title.classList.remove('visible');
        }
    }
}

window.onload = bgAction();

window.onscroll = function() {
    bgAction();
};

btn_scroll.onclick = function() {
    if (!(window.scrollY >= scroll_action)) {
        if (nav_s.classList.contains('scrolled')) {
            nav_s.classList.remove('scrolled');
            nav_span_title.classList.remove('visible');
        } else {
            nav_s.classList.add('scrolled');
            nav_span_title.classList.add('visible');
        }
    }
}

s_list.onclick = function() {
    btn_scroll.click();
}