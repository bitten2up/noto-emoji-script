var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'//'https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@500&display=swap';    

document.head.appendChild(script);
WebFont.load({
    google: {
      families: ['Noto Emoji']
    }
});
p.style.fontFamily = 'Noto Emoji';
