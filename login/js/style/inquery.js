//　テーブルデータ表示用配列
var items = [];

function confirm(){
    alert('Are you sure?')
    //session date 削除
    sessionStorage.removeItem('date');

    window.location.href = "expenseList.html";
}

(function(){
    // ページ読み込み時に実行したい処理
    'use strict';

    // データ詰め用変数
    var output = sessionStorage.getItem('data');
    var row = output.split(',')
    // console.log('output:' + output);

    $('#number').val(localStorage.getItem('num'));
    $('#name').val(row[1]);
    $('#type').val(row[2]);
    $('#cost').val(row[3]);
    $('#remarks').val(row[4]);
    // console.log(sessionStorage);
    //テーブルデータ表示用配列にデータを詰めて、セッションに保存
    if(sessionStorage.getItem('table') != null){
        items = sessionStorage.getItem('table').split(',');
        console.log(items);
        items.push(row);
        console.log(items);
        sessionStorage.setItem('table',items);
    }else{
        items.push(row);
        sessionStorage.setItem('table',items);
        // console.log(sessionStorage);
    }
    
    // console.log(items);
    // sessionStorage.setItem('table',items);
    // // console.log(sessionStorage);

}());

