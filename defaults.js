//SiteDefaults
const site = {}
site.title = "GeneratorJs"
site.site_title = site.title
site.subtitle = "A three function Javascript library for modular website frontend desing"
site.logo = '/assets/img/logo.png'
site.image = site.logo
site.favicon = '/assets/img/favicon.ico'
site.image = site.logo
site.description = '"A three function Javascript library for modular website frontend desing. Few functions to generate frontend design without juggeling between HTML CSS and JS. Reduce repetetive typing in HTML.'
site.url = 'https://generatorjs.github.io/'

var s = site

//social links JSON or Js dict
const social = [
    { tag: 'a', id: 'fb', innerHTML: 'Facebook', href: "https://facebook.com/mGeek.in", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'tg', innerHTML: 'Telegram', href: "https://t.me/mGeek", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'git', innerHTML: 'Github', href: "https://github.com/GeneratorJs/generatorjs.cdn.git", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'mail', innerHTML: 'Email', href: `mailto:care@mgeek.in?subject=Related to GeneratorJs&body=From : ${window.location.href}`, target: "_blank", classList: 'sociallinks' }
]
export { s as site }
export { social as social }

window.site = site
window.social = social
