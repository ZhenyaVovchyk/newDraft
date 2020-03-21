
window.addEventListener('load', loadLocalStorage);
function loadLocalStorage() {
    var htmlSave = (localStorage.getItem("htmlSave"));
    var cssSave = (localStorage.getItem("cssSave"));
    var jsSave = (localStorage.getItem("jsSave"));
    htmlEditor.session.replace(new ace.Range(0, 0, 1, 1), htmlSave);
    cssEditor.session.replace(new ace.Range(0, 0, 1, 1), cssSave);
    jsEditor.session.replace(new ace.Range(0, 0, 1, 1), jsSave);
}



let htmlEditor = ace.edit('html-editor');
htmlEditor.setTheme('ace/theme/monokai');
htmlEditor.session.setMode('ace/mode/html');
htmlEditor.session.setUseWrapMode(true);


let cssEditor = ace.edit('css-editor');
cssEditor.setTheme('ace/theme/monokai');
cssEditor.session.setMode('ace/mode/css');
cssEditor.session.setUseWrapMode(true);


let jsEditor = ace.edit('js-editor');
jsEditor.setTheme('ace/theme/monokai');
jsEditor.session.setMode('ace/mode/javascript');
jsEditor.session.setUseWrapMode(true);



htmlEditor.getSession().on('change', () => {
    update();
});

cssEditor.getSession().on('change', () => {
    update();
});

jsEditor.getSession().on('change', () => {
    update();
});


function update() {
    let res = document.querySelector('#result').contentWindow.document;
    res.open();
    res.write(htmlEditor.getValue());
    res.write('<style>' + cssEditor.getValue() + '</style>');
    res.write('<script>' + jsEditor.getValue() + '</script>');
    res.close();
}

function saveLocalStorage() {
    let ed = document.getElementsByClassName('blocksEditor');

    for (let i = 0; i < ed.length; i++) {
        ed[i].addEventListener("keypress", () => {
            var htmlSave = htmlEditor.getValue();
            var cssSave = cssEditor.getValue();
            var jsSave = jsEditor.getValue();
            localStorage.setItem('htmlSave', htmlSave);
            localStorage.setItem('cssSave', cssSave);
            localStorage.setItem('jsSave', jsSave);
        });
    }
}

setInterval(saveLocalStorage(), 500);




try {
    update();
    saveLocalStorage();

}
catch (err) {
    document.querySelector('#main').innerHTML = 'name: ' + err.name + 'message' + err.message;
}


