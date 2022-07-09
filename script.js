//hero section
append(appmain, gen("section", "hero", gen("h1", "", site.title), 'section container'), 'over')

append(hero,
    [
        gen(p, '', 'Website frontend design with less typing, less editing to HTML CSS <br />Few functions to learn or precisely <b>three</b> functions to be learned</b>.'),
        gen(span, 'installButton', 'Install', 'button')
    ]
)

//main functions
append(hero, gen(span, 'instructionsButton', 'Instructions', 'button-blank', { "href": "#instructions" }))




append(appmain, gen(section, "install", gen(h1, "", "Install"), 'section container'))
append(install, gen(div, "github", gen(h2, "", "Clone from Github")))
append(github, gen(code, '', `git clone https://github.com/GeneratorJs/generatorjs.cdn.git`, 'code, small'))
//html include script tag
append(install, gen(div, "scriptTag", gen(h2, "", "Add script module tag in html")))

append(scriptTag, gen(code, '', ` <script type="module">
import { gen, append, load } from "https://generatorjs.github.io/generatorjs.cdn/dist/latest/generator.modular.js"
//your frontend logic using generatorjs
append(app,gen(h1,"mainheading","Hello world from GeneratorJs","stylingclass"))
</script>`, 'code,small'))

append(scriptTag, gen(code, '', ` <script type="module" src="https://generatorjs.github.io/generatorjs.cdn/dist/latest/generator.modular.js"></script>`, 'code, small'))

append(scriptTag, gen(p, "", "By default it will try to load 'script.js from dir where index.html is located, so you can write code in script.js and place it with 'index.html'"))


append(install, gen(div, "singlefile", gen(h2, "", "Template index.html")))

















getfile("https://generatorjs.github.io/starter.html", (resp) => { append(singlefile, gen(code, 'singlefilecode', resp, 'code,small')) });


append(appmain, gen(section, "instructions", gen(h1, "", "Instructions"), 'section container'))

append(instructions, gen(h2, "", 'It has three functions'))
// gen based on array to be done
// append('instructions', gen(ol, '', gen(li, '', ['load', 'gen', 'append'])))

append(instructions, gen(div, 'loaddiv', gen(h1, '', 'load(ArrayOfStylesAndScriptsLinks)'), 'section-small'))
append(loaddiv, gen(p, '', 'This function can load single or multiple stylesheets (*.css) and / or scripts (*.js) or meta tags in head.'))
append(instructions, gen(div, 'gendiv', gen(h1, '', 'gen(tagname, id, content or child, classes, src)'), 'section-small'))
append(gendiv, gen(p, 'genp', 'This function can creat and return html elements in dom .<br/>'))

append(instructions, gen(div, 'appenddiv', gen(h1, '', 'append(ParentId, ChildHtml, Position)'), 'section-small'))
append(appenddiv, gen(p, 'appendp', 'This function to append html of string to an element<br/>'))
genArray = ['ParentId is the if where html needs to be updated.<br/>',
    'ChildHtml can be string or html element, Array of strings or array or html elements can also be passed.<br/>',
    'Position can be "after", "before", or "over". It is optional and by default "after"<br/>  ']

genArray.forEach(element => {
    append(appendp, gen(p, "", gen(span, "", element, 'small')))
});


instArray = ['Tagname can be any commonly used html tag, like div, p, img, span etc<br /> ',
    gen(code, "", 'gen(div)'),
    "It will create a div element in dom",
    gen(code, "", 'gen(div,"someId")'),
    "It will create a div element with id=someId",
    gen(code, "", 'gen(div,"someId","Text inside element")'),
    "It will create a div element with id=someId having inner html 'Text inside element'",
    gen(code, "", 'gen(div,"someId","Text inside element","list of classes")'),
    "It will create a div element with id=someId having inner html 'Text inside element' with all the classes='list of classes'",
    gen(code, "", 'gen(div,"someId","Text inside element","list of classes","srcOrHref")'),
    "last argument is required with tags like img, a, script, video where source needs to be specified",
]



document.getElementById(`installButton`).addEventListener('click', () => { install.scrollIntoView({ block: 'center', behavior: 'smooth' }) })
document.getElementById(`instructionsButton`).addEventListener('click', () => { instructions.scrollIntoView({ block: 'center', behavior: 'smooth' }) })

