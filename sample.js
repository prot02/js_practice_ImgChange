/*
*簡易スライドショー
*
*nextボタンを押したときに画像を切り替える簡単な
*スライドショーのサンプルプログラムです
*/

window.onload = function(){
    /*=====================
    *変数の定義
    =====================*/

    // 写真のパスとタイトルを配列、ハッシュ(jsではオブジェクトという)で管理
    var photoList=[
        {src: 'images/spring.jpg', title:'春の画像'} ,
        {src: 'images/summer.jpg', title:'夏の画像'} ,
        {src: 'images/autumn.jpg', title:'秋の画像'} ,
        {src: 'images/winter.jpg', title:'冬の画像'} ,
    ];

    // 写真の要素数を変数として格納
    var photoLength = photoList.length;

    // 要素の取得
    var photo = document.getElementById('photo'); // 画像
    var nextbtn = document.getElementById('nextBtn'); // ボタン
    var title = document.getElementById('title'); // タイトル

    //現在のインデックスを保存するための変数
    var currentIndex = 0;

    /*=====================
    *関数の定義
    =====================*/
    // 指定の画像に表示を切り替える関数
    function showPhoto(index){
        //全ての画像を非表示
        for(var i = 0; i < photoLength; i++){
            photoList[i].elem.style.display = 'none';
        }

        //表示する対象の要素を取得
        var targetphoto = photoList[index];

        //タイトルの表示
        var viewNumber = index + 1;
        title.innerHTML = '【' + viewNumber + '】' + targetphoto.title; // titleIDに文字を設定

        //画像の表示
        targetphoto.elem.style.display = 'inline';
    }

    /*=====================
    *イベントの設定
    =====================*/

    //nextボタンを押したときの処理
    nextbtn.onclick = function(){
        //表示する画像のインデックスを計算
        currentIndex++;
        if(currentIndex == photoLength){
            currentIndex = 0;
        }

        showPhoto(currentIndex);
    };

    /*=====================
    *初期化処理
    =====================*/

    //img要素をHTMLに追加
    var item, img;
    for(var i = 0; i < photoLength; i++){
        item = photoList[i];

        //img要素の作成
        img = document.createElement('img');
        
        img.src = item.src;
        img.alt = item.title;

        //作成したimgをHTMLに追加
        photo.appendChild(img); //photoの子要素としてimgを追加

        //作成したimgを保存
        item.elem = img; // 作成したimgを配列の中のelemというkeyを作成して入れる
    }

    //初期表示のためにshowPhoto関数を実行する
    showPhoto(currentIndex);

};
