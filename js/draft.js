

$('#BtnRun').click(() => {
    $('.blocksEditor').toggle();
    $('#html-editor').toggle();
    $('#css-editor').toggle();
    $('#js-editor').toggle();
})

$('#Btnhtml').click(() => {
    $('#html-editor').show();
    $('#css-editor').hide();
    $('#js-editor').hide();
    $('#result').hide();
});


$('#Btncss').click(() => {
    $('#html-editor').hide();
    $('#css-editor').show();
    $('#js-editor').hide();
    $('#result').hide();
});

$('#Btnjs').click(() => {
    $('#html-editor').hide();
    $('#css-editor').hide();
    $('#js-editor').show();
});