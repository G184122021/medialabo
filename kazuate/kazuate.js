// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// ボタンを押した後の処理をする関数 hantei() の定義
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
function hantei() {
    let i = document.querySelector('input[name="kotae"]');
	let yoso = i.value;
    let pp = document.querySelector('#p');
    let pppp =document.querySelector('#ppp');
    let ppppp = document.querySelector('#ppap');
	pp.textContent = (kaisu+ '回目の予想:' +yoso);   // 第5回課題:テキストボックスの数値をここに代入
    if(kaisu===1||kaisu===2){
    if(kotae>yoso){
        pppp.textContent=("もっとでかい数字です");
    }else if(kotae<yoso){
        pppp.textContent=("もっと小さい数です");
    }else{
        pppp.textContent=("正解です。");
        ppppp.textContent=("もう終わりです");
    }}else if(kaisu<=4){
        if(kotae>yoso){
            pppp.textContent=("早く当ててくださいもっと大きい数字でしょうが");
        }else if(kotae<yoso){
            pppp.textContent=("早く当ててくださいもっと小さい数字でしょうが");
        }else{
            pppp.textContent=("正解です。");
            ppppp.textContent=("もう終わりです");
    }
    
}
if(kaisu===4){ppppp.textContent=("もう終わりです");}
kaisu=kaisu+1;

}

    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること


