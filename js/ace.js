
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
jsEditor.session.setMode('ace/mode/javascript')
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

update()



