function loadFooter() {
    var footerStyle = `#footer {
    display: flex;
    min-height: 3em;
    background: hsl(236, 38%, 15%);
    width: 100%;
    z-index: 2;
    flex-direction: column;
    margin-top: 10%;
   a {
        color: $footcolor;
    }
}`
    loadscss(footerStyle, "footer")
    append(appfooter, gen(div, "contact", gen(h1, "", "Contact", 'container'), 'section-small'), 'over')
    append(contact, gen(p, "", social))
    console.info('footer loaded')
};


loadFooter();
