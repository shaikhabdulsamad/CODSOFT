
AOS.init();


var toggleBtn = document.getElementById('toggleBtn');
var body = document.body;
var mainContent = document.getElementById('mainContent');
var portfolio = document.getElementById('portfolio');
var work = document.getElementById('workText');
var skills = document.getElementById('skillsText');
var footer = document.getElementById('footer');
var emailMe = document.getElementById('emailme');
var barText1 = document.getElementById('barText1');
var barText2 = document.getElementById('barText2');
var barText3 = document.getElementById('barText3');
var barText4 = document.getElementById('barText4');

toggleBtn.addEventListener('change', function () {
    if (this.checked) {

        body.style.backgroundColor = "#FCFFE7";
        mainContent.style.color = 'black';
        portfolio.style.color = 'black';
        work.style.color = 'black';
        skills.style.color = 'black';
        footer.style.color = 'black';
        emailMe.style.color = 'black';
        barText1.style.color = 'black';
        barText2.style.color = 'black';
        barText3.style.color = 'black';
        barText4.style.color = 'black';
    } else {
        mainContent.style.color = 'white';
        portfolio.style.color = 'white';
        work.style.color = 'white';
        skills.style.color = 'white';
        footer.style.color = 'white';
        emailMe.style.color = 'white';
        barText1.style.color = 'white';
        barText2.style.color = 'white';
        barText3.style.color = 'white';
        barText4.style.color = 'white';
        body.style.backgroundColor = "#222";
    }
});






