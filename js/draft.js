

$('#BtnRun').click(() => {
    $('.blocksEditor').toggle();
})

$('#Btnhtml').click(() => {
    $('#html-editor').show();
    $('#css-editor').hide();
    $('#js-editor').hide();
});


$('#Btncss').click(() => {
    $('#html-editor').hide();
    $('#css-editor').show();
    $('#js-editor').hide();
});

$('#Btnjs').click(() => {
    $('#html-editor').hide();
    $('#css-editor').hide();
    $('#js-editor').show();
});