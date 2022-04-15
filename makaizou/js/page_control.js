// ページをコントロールするメソッド定義ファイル

// 指定したIDオブジェクトをクリック時にページトップへスクロールする
//  el        :オブジェクトID
//  duration  :スクロール速度
function move2PageTop(el, duration)
{
  // id属性の取得
  const target = document.getElementById(el);
  // クリックイベントハンドラ
  target.addEventListener('click', function ()
  {
    // 現在のY方向位置を取得
    let currentY = window.pageYOffset;
    // スクロールの移動ステップ幅を計算
    let step = ((duration / currentY) > 1) ? 10 : 100;
    // スクロール時間の計算
    let timeStep = duration / currentY * step;
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIDを定義する。

    // Y方向スクロールするためのメソッド
    function scrollUp()
    {
      // 現在のY方向位置を取得
      currentY = window.pageYOffset;
      if (currentY === 0)
      {
        // ページ最上部に来たら終了
        clearInterval(intervalId);
      }
      else
      {
        // step分上へスクロール
        scrollBy(0, -step); 
      }
    }
  });
}
