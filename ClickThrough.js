'use strict';

const remote = require('electron').remote;
let win = remote.getCurrentWindow();
let el = document.getElementsByTagName('html')[0];
el.addEventListener('mouseenter', () => {
    win.setIgnoreMouseEvents(true, {forward: true});
});
el.addEventListener('mouseleave', () => {
    win.setIgnoreMouseEvents(false);
});