
(function(){
    // ページ読み込み時に実行したい処理
    'use strict';

    console.log(sessionStorage);

    $('#number').val(localStorage.getItem('num'));
    $('#name').val(sessionStorage.getItem('name'));
    $('#type').val(sessionStorage.getItem('type'));
    $('#cost').val(sessionStorage.getItem('cost'));
    $('#remarks').val(sessionStorage.getItem('remarks'));

}());

