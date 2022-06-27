// import { loadscss } from "./cdn/latest/generator";

function loadHeader() {

    append(appheader, "", "over");
    append(appheader, gen("span", "title"));
    append(title,
        [
            gen("span", "logo", gen("img", "sitelogo", "", "sitelogo", { "src": site.logo, "width": "30px" })),
            gen("span", "siteheading")
        ]
    );

    append(siteheading, gen("span", "sitetitle", gen(a, 'homelink', site.title, "", site.url)));

    append(siteheading, gen("span", "sitesubtitle", site.subtitle));

    append(appheader, gen(nav, 'appnav'));
    append(appnav, gen(input, "navmenu", "", "", { "type": "checkbox", "checked": "false" }));
    document.getElementById('navmenu').style.visibility = 'hidden'

    var ham = "&#9776"
    append(appnav, gen("label", 'navmenulabel', "", "", { "for": "navmenu" }));
    append(navmenulabel, gen(span, '', '', 'ham1'))
    append(navmenulabel, gen(span, '', '', 'ham2'))
    append(navmenulabel, gen(span, '', '', 'ham3'));
    document.getElementById('navmenu').for = "navmenu";


    navLinksObj = [
        ['Home', '/#hero'],
        ['Install', '/#install'],
        ["Instructions", "/#instructions"],
        // ["Examples", "/#example"],
        // ["Blog", "/blog"],
        ["Contact", "/#contact"]
    ];


    append(appnav, gen(ul, 'navul', "", "navul"))
    navLinksObj.forEach(navRow => {
        append(navul, gen(li, "", gen(a, "", navRow[0], "", navRow[1])))

    });







    document.getElementById("navul").addEventListener("click", () => {
        navmenu.checked = true
    })

};
loadHeader();
document.title = site.title

var headerStyle = `
#appheader {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: row;
    min-height: 3em;
    justify-content: space-between;
    background: hsl(233, 76%, 6%);
    box-shadow: 0px 2px 3px rgba(0, 255, 242, 0.8);
    z-index: 3;
    padding: 2px;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
        box-shadow: 0px 3px 4px rgba(0, 255, 242, 1);
    }

    #logo>img {
        max-width: 40px;
    }

    #title {
        display: flex;

        #siteheading {
            display: flex;
            flex-direction: column;
            align-items: start;

            #sitetitle {

                font-size: 1.2rem;
                font-weight: 900;
                text-transform: uppercase;
                padding-left: 5px;
                padding-right: 15px;

            }

            #sitesubtitle {
                font-size: .8rem;
                font-weight: 200;
                text-transform: capitalize;
                padding-left: 5px;
                padding-right: 15px;
            }
        }




    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 5px;

        #navul {
            margin: auto;
            display: grid;

            li {

                text-transform: capitalize;
                font-size: .8rem;
                font-weight: 700;
                text-decoration: none;
                color: white;

                a {
                    padding-left: 5px;
                    padding-right: 5px;

                    &:hover {
                        color: aqua;
                    }
                }


            }
        }
    }





    #navmenulabel {

        position: absolute;
        top: 10px;
        right: 5px;
        flex-direction: column;

        height: 20px;
        width: 25px;
        margin: .5em;
        transition: all 200ms ease-in-out;


        .ham1 {
            flex-grow: 0;
            position: relative;
            display: inline-block;
            background: #fff;
            height: 2px;
            width: 20px;
            border-radius: 1px;
            margin: 2px;
            box-shadow: 0px 6px 0px white, 0px -6px 0px white;
            transition: all 500ms ease;
        }

        &:hover {

            //
            .ham1 {
                box-shadow: 0px 6px 0px aqua, 0px -6px 0px aqua;
            }
        }
    }









    #navmenu:not(:checked)+#navmenulabel>.ham1 {
        transform: rotateZ(45deg);
        box-shadow: -0px 0px 0px 1px aqua;

        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            height: 3px;
            width: 20px;
            border-radius: 1px;
            transform: rotateZ(90deg);
            background: white;

        }
    }

}




@media screen and (max-width: 600px) {
    #navmenulabel {
        display: flex;
        z-index: 4;
    }

    #navul {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1em;
        position: fixed;
        bottom: 0px;
        left: 0px;
        height: 100%;
        width: 75vw;
        background-color: hsla(219, 72%, 15%, .99);
        transform: translateX(0%);
        box-shadow: 0px 0px 2px 100vw hsla(0, 0%, 0%, 0.8);

        li {

            //
            a {
                display: inline-grid;
                place-content: center;
                width: 100%;
                height: 100%;
                text-transform: uppercase;
                border-radius: 5px;

                &:hover {
                    background-color: hsla(240, 72%, 10%, .5);
                }
            }
        }
    }




    #navmenu:checked~#navul {
        transform: translateX(-100%);
        transition: all 1s ease-in-out;
        box-shadow: none;
    }

}


@media screen and (min-width: 600px) {

    #navmenulabel {
        display: none;
    }

    #navul {
        grid-auto-flow: column;
    }
}
`
loadscss(headerStyle, "header")
// savehtml(header)