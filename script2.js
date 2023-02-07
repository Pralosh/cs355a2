let ig = document.getElementById('ig-btn');
let fb = document.getElementById('fb-btn');
let lnk = document.getElementById('lnk-btn');

function change(x) {
    if(x == 1) {
        ig.style.backgroundColor = "green";
        ig.style.color = "white";
        ig.style.transition = "0.5s";
    }

    if(x == 2) {
        fb.style.backgroundColor = "green";
        fb.style.color = "white";
        fb.style.transition = "0.5s";
    }

    if(x == 3) {
        lnk.style.backgroundColor = "green";
        lnk.style.color = "white";
        lnk.style.transition = "0.5s";
    }
}

function release(x) {
    if(x == 1) {
        ig.style.backgroundColor = "rgb(255, 203, 5)";
        ig.style.color = "black";
        ig.style.transition = "0.5s";
    }

    if(x == 2) {
        fb.style.backgroundColor = "rgb(255, 203, 5)";
        fb.style.color = "black";
        fb.style.transition = "0.5s";
    }

    if(x == 3) {
        lnk.style.backgroundColor = "rgb(255, 203, 5)";
        lnk.style.color = "black";
        lnk.style.transition = "0.5s";
    }
}

function go(x) {
    if(x == 1) {
        window.open('https://www.instagram.com/pralosh.raj/?hl=en', '_blank');
    }

    if(x == 2) {
        window.open('https://www.facebook.com/pralosh.rajbhandari/?locale=ne_NP&paipv=0&eav=AfbYJ0CoQbJCD6YMpGk5tHpxX6JtMDWgU3nTrNBU6TZCfgEgpiidScYGSw3LoI1FLek&_rdr', '_blank');
    }

    if(x == 3) {
        window.open('https://www.linkedin.com/in/pralosh-rajbhandari-4900b8149?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brv8Zj0qNTw6oZXqcLSB%2F%2BA%3D%3D', '_blank');
    }
}
