// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    function backbutton(e) {
        if (page == "main")  {
            document.getElementById("main_screen").style.display = "none";
            document.getElementById("menu_screen").style.display = "block";
            page = "home"
        }
        else if (page === "achievements") {
            document.getElementById("achievements_screen").style.display = "none";
            document.getElementById("menu_screen").style.display = "block";
            page = "home"
        }

        else if (page === "credits") {
            document.getElementById("credits_screen").style.display = "none";
            document.getElementById("menu_screen").style.display = "block";
            page = "home"
        }
        else if (page === "home") {
            navigator.app.exitApp();
        }
        else {
            alert("grote paniek")
        }
    }
    
    function onDeviceReady() {
        
        document.addEventListener("backbutton", backbutton, false)
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var element = document.getElementById("deviceready");
        //element.innerHTML = 'Device Ready';
        //element.className += ' ready';
        alert('deviceready')
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    
    }
        
    //functions setup
    //shuffle
    function shuffle(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
    }

    //check if array contains string
    Array.prototype.contains = function (text) {
        for (var i in this) {
            if (text.toString().indexOf(this[i].toString()) != -1) {
                return i;
            }
        }
        return -1;
    }
    var test = function (str, arr) {
        if (arr.contains(str) !== -1) { return true }
        else { return false }

    };

    //localstorage var and lists setup
    var page = "home"
    if (localStorage.getItem('nh') === null) { window.localStorage.setItem("nh", JSON.stringify(10)) }
    var nh = JSON.parse(localStorage.getItem("nh"))
    var nt = 50 - nh
    var wish = "placeholder"
    var input = "placeholder"

    if (localStorage.getItem('weeaboo_points') === null) {
        window.localStorage.setItem("weeaboo_points", JSON.stringify(0))
    }
    var weeaboo_points = JSON.parse(localStorage.getItem("weeaboo_points"))

    var reactielijst = ["Dat kan niet!",
                        "Daar heb ik geen zin in!",
                        "Wat een leuke wens heb je daar!",
                        "Sorry, ik ben mijn toverstokje kwijt",
                        "... Zei je wat?",
                        "Abracadabra!... oh het werkte niet.",
                        "Praat tegen mijn hand",
                        "Pas!",
                        "Als je het vriendelijk vraagt, de volgende keer misschien."]

    var wensHBG_lijst = ["Ik wens een ijsje!",
                        "Ik wens een koekje!",
                        "Ik wens chocolade!",
                        "Ik wens een brownie!",
                        "Ik wens spruitjes!",
                        "Ik wens malteser!",
                        "Ik wens een lolly!",
                        "Ik wens karamel!",
                        "Ik wens taart!",
                        "Ik wens aarbeien",
                        "Ik wens friet!",
                        "Ik wens chips!",
                        "Ik wens pannenkoeken!",
                        "Ik wens spekjes!"]

    var wens_lijst = ["Ik wens een ijsje!",
                     "Ik wens een zak met goud!",
                     "Ik wens dat ik beroemd ben!",
                     "Ik wens dat ik hier weg kan!",
                     "Ik wens dat ik rijk ben!",
                     "Ik wens dat ik vrienden heb.",
                     "Ik wens dat ik kan vliegen!",
                     "Ik wens dat ik super sterk ben!",
                     "Ik wens dat ik een portal-gun heb!",
                     "Ik wens dat ik onzichtbaar kan worden!",
                     "Ik wens dat ik van vorm kan veranderen!",
                     "Ik wens dat jij je bek houdt!",
                     "Ik wens een taart!",
                     "Ik wens een furbie!"]

    var nietzeggen_lijst = ["niet",
                           "geen"]

    var wegwezen_lijst = ["niet weg kan",
                         "niet laat gaan",
                         "ik blijf",
                         "hier blijf",
                         "niet hier weg kan"]

    var honden_lijst = ["hond",
                       "pup",
                       "dalmatier",
                       "franse bull",
                       "bulldog",
                       "pitbull",
                       "chihauhau",
                       "chiwawa",
                       "drentse partrijs",
                       "herdershond",
                       "bull mastif",
                       "schnauzer",
                       "poedel",
                       "labrador",
                       "golden retriever",
                       "labradoedel",
                       "keeshond",
                       "schippershond",
                       "boerenfox",
                       "ridgeback",
                       "vizla",
                       "cocker spaniel",
                       "retriever",
                       "deense dog"]

    var jijplezier_lijst = ["jij plezier hebt",
                           "jij het leuk hebt",
                           "jij fijn kan vliegen"]

    var weeaboo_lijst = ["japan",
                        "anime",
                        "mejibray",
                        "visual kei",
                        "jrock",
                        "vocaloid",
                        "haruhi",
                        "soul eater",
                        "one piece",
                        "naruto",
                        "higurashi",
                        "sushi",
                        "diaura",
                        "sugoi",
                        "kawaii",
                        "desu",
                        "the gazette",
                        "chan",
                        "sama"]
    var reactielijst = ["Dat kan niet!",
                        "Daar heb ik geen zin in!",
                        "Wat een leuke wens heb je daar!",
                        "Sorry, ik ben mijn toverstokje kwijt",
                        "... Zei je wat?",
                        "Abracadabra!... oh het werkte niet.",
                        "Praat tegen mijn hand",
                        "Pas!",
                        "Als je het vriendelijk vraagt, de volgende keer misschien."]

    var wens_lijst = ["Ik wens een ijsje!",
                     "Ik wens een zak met goud!",
                     "Ik wens dat ik beroemd ben!",
                     "Ik wens dat ik hier weg kan!",
                     "Ik wens dat ik rijk ben!",
                     "Ik wens dat ik vrienden heb.",
                     "Ik wens dat ik kan vliegen!",
                     "Ik wens dat ik super sterk ben!",
                     "Ik wens dat ik een portal-gun heb!",
                     "Ik wens dat ik onzichtbaar kan worden!",
                     "Ik wens dat ik van vorm kan veranderen!",
                     "Ik wens dat jij je bek houdt!",
                     "Ik wens een taart!",
                     "Ik wens een furbie!"]

    //main menu functionality
    document.getElementById('start').addEventListener('click', onStart);
    function onStart() {
        page = "main"

        document.getElementById("menu_screen").style.display = "none";
        document.getElementById("main_screen").style.display = "block";
        var h = nh + "vmax"
        var t = nt + "vmax"

        document.getElementById("blijheidsmeter").style.height = h
        document.getElementById("blijheidsmeter").style.top = t

    }

    document.getElementById('achievements').addEventListener('click', onAchievements);
    function onAchievements() {
        page = "achievements"

        document.getElementById("menu_screen").style.display = "none";
        document.getElementById("achievements_screen").style.display = "block";

    }

    document.getElementById('credits').addEventListener('click', onCredits);
    function onCredits() {
        page = "credits"

        document.getElementById("menu_screen").style.display = "none";
        document.getElementById("credits_screen").style.display = "block";

    }

    //main activity functionality
    // testing the page variable
    //document.getElementById("elfjezegt").addEventListener('click',
    //    function testing(){
    //        document.getElementById("elfjezegt").innerHTML = page
    //})
    document.getElementById('elfje').addEventListener('click',
        function onButton() {
            document.getElementById("zezegt").innerHTML = "Wat is je wens?";
            document.getElementById("wensscherm").style.display = "block";
        });

    document.getElementById('wens1').addEventListener('keypress', function (e) {
        if (e.keyCode === 13) { // 13 is enter
            onConfirmed()
        }
    })

    document.getElementById('okbutton').addEventListener('click', onConfirmed);
    document.getElementById('wens2').addEventListener('click', onWishselect);
    document.getElementById('wens3').addEventListener('click', onWishselect);

    function onConfirmed() {
        input = document.getElementById('wens1').value

        nh = nh - 1
        if (nh < 0) { nh = 0 }
        window.localStorage.setItem("nh", JSON.stringify(nh))
        var h = nh + "vmax"

        nt = nt + 1
        if (nh === 0) { nt = 50 }
        var t = nt + "vmax"

        document.getElementById("blijheidsmeter").style.height = h
        document.getElementById("blijheidsmeter").style.top = t

        var reactie = "Dus je wens is: " + input + "?"
        document.getElementById("zezegt").innerHTML = reactie;

        document.getElementById("wensscherm").style.display = "none"
        document.getElementById('clickmefirst').style.display = "block"

        wish = "input"

    }

    function onWishselect() {

        nh = nh + 1
        if (nh > 20) { nh = 20 }
        window.localStorage.setItem("nh", JSON.stringify(nh))
        var h = nh + "vmax"

        nt = nt - 1
        if (nh === 20) { nt = 30 }
        var t = nt + "vmax"

        document.getElementById("blijheidsmeter").style.height = h
        document.getElementById("blijheidsmeter").style.top = t

        var reactie = "Dus je wens is: " + document.getElementById('wens2').innerHTML + "?"
        document.getElementById("zezegt").innerHTML = reactie;

        document.getElementById("wensscherm").style.display = "none";
        document.getElementById('clickmefirst').style.display = "block"

        wish = "reactie"

    };

    document.getElementById('clickmefirst').addEventListener('click', onContinue)

    function onContinue() {
        shuffle(wens_lijst)
        var wens2 = wens_lijst[1]
        var wens3 = wens_lijst[2]
        document.getElementById('wens2').innerHTML = wens2
        document.getElementById('wens3').innerHTML = wens3

        if (wish === "return") {
            document.getElementById("zezegt").innerHTML = "Ik ben een elfje, als je mij pakt mag je een wens doen!"
            document.getElementById('clickmefirst').style.display = "none"
            document.getElementById('wens1').value = ""

        }

        else if (wish === "reactie") {
            var reactie = reactielijst[Math.floor(Math.random() * reactielijst.length)]
            document.getElementById("zezegt").innerHTML = reactie;
            wish = "return"

        }

        else if (wish === "input") {
            if (test(input, wegwezen_lijst)) {
                var reactie = "Hoop je daarmee weg te komen? haha."
                document.getElementById("zezegt").innerHTML = reactie;
                wish = "return"
            }

            else if (test(input, jijplezier_lijst)) {
                if (test(input, nietzeggen_lijst)) {
                    var reactie = "Je denkt toch niet dat je me daarmee voor de gek kan houden?"
                    document.getElementById("zezegt").innerHTML = reactie;
                    wish = "return"
                }
                else {
                    var reactie = "Dankejewel!"
                    document.getElementById("zezegt").innerHTML = reactie;
                    wish = "return"
                }
            }

            else if (test(input, honden_lijst)) {
                //insert counter for achievement
                var reactie = "Ben je een hondenmens??"
                document.getElementById("zezegt").innerHTML = reactie;
                wish = "return"
            }

            else if (test(input, weeaboo_lijst)) {
                weeaboo_points = weeaboo_points + 1
                var reactie = reactielijst[Math.floor(Math.random() * reactielijst.length)]
                document.getElementById("zezegt").innerHTML = reactie;
                wish = "return"
                //actually save
            }
            else {
                var reactie = reactielijst[Math.floor(Math.random() * reactielijst.length)]
                document.getElementById("zezegt").innerHTML = reactie;
                wish = "return"
            }

        };
    }
    alert('yay')
})();
