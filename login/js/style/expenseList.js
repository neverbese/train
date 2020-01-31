// 行内容を格納
var tableItems = [];

// 時間取得
function getTime(){
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    var dateTime = y + '/' + m + '/' + d +' '+ h + ':' + mi + ':' + s ;
    return dateTime;
}

// 行追加
function add(){
    var time = getTime();
    tableItems.forEach(e=> {
        $('.table').append('<tr><th>'+ e[0]+'</th><th>'+e[1]+'</th><th>'+e[2]+'</th><th>'+e[3]+'</th><th>'+time+'</th></tr>');
    });
}
function addSingle(){
    var time = getTime();
    $('.table').append('<tr><th>'+ tableItems[0]+'</th><th>'+tableItems[1]+'</th><th>'+tableItems[2]+'</th><th>'+tableItems[3]+'</th><th>'+time+'</th></tr>');
}

// 第1引数に対象となる配列を、第2引数には分割数（ひとつの配列にいくつ要素を入れるか）をそれぞれ指定します
const arrayChunk = ([...array], size = 1) => {
    return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
  }

(function(){
    // ページ読み込み時に実行したい処理
    'use strict';
    // sessionデータ存在チェック
    // alert('ok')
    console.log(sessionStorage);
    if(sessionStorage.length == 0){
        $('#contents').append('<h5 class="card-title">「明細を登録する」から、取引を作成します。</h5>');
    }else{
        tableItems = sessionStorage.getItem('table').split(',');
        // console.log(tableItems);
        // console.log(tableItems.length);

        console.log(tableItems);
        $('#contents').append('<div class="table-responsive" id="table"></div>');
        $('#table').append('<table class="table table-striped table-bordered table-hover"></table>');
        $('.table').append('<tr><th>取引処理番号</th><th>タイトル</th><th>金額</th><th>種別</th><th>作成日</th></tr>');
        // 行追加
        if(tableItems.length > 5){
            tableItems = arrayChunk(tableItems, 5);
            add();
        }else{
            addSingle();
        }
        
    }

}());
