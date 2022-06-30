// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    if(kaisu<4){
    if(kotae>yoso){
        console.log("もっとでかい数字です")
    }else if(kotae<yoso){
        console.log("もっと小さい数です");
    }else{
        console.log("正解です。")
    }
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}else{console.log("もう終わりです");}
let presult = document.querySelector('p#presult');
let pppppppp = kaisu +'回目の予想: '+yoso;
p=document.createElement('p');
presult.insertAdjacentElement('afterend',p);
p.textcontent = pppppppp;
}