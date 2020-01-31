// 登録コード番号
var num = 0;

(function(){
    // ページ読み込み時に実行したい処理
    'use strict';
    // 登録用のコード番号を設定
    try {
        num = Number(localStorage.getItem('num')) + 1;
    } catch (error) {
        num = 1;
    }
    console.log(num);
}());

function create(){
    // date登録用配列
    var data = [];

    // 画面入力内容を取得
    var name = $('#ledger_name').val();
    var type = $('#ledger_type').val();
    var cost = $('#ledger_cost').val();
    var remarks = $('#ledger_remarks').val();
    // 入力チェック
    console.log(name);  
    if (name == "") {
        alert('タイトルが未入力です')
        return;
    }
    if (type == "") {
        alert('種別が未入力です')
        return;
    }
    if (cost == "") {
        alert('金額が未入力です')
        return;
    }else if(!cost.match(/^[0-9]+$/)){
        alert('半角数字を入力してください')
        return;
    }

    // セッションにデータを詰める
    localStorage.setItem('num', num);
    data.push(num,name,type,cost,remarks);
    sessionStorage.setItem('data',data);

    window.location.href = "expenseInquery.html"
}