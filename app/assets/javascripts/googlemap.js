function initMap() {
  var target = document.getElementById('gmap');  
  var tokyo = {lat: 35.681167, lng: 139.767052};  //東京駅の緯度経度
  var map = new google.maps.Map(document.getElementById('gmap'), {
    center: tokyo,
    zoom: 16
  });
  
  //情報ウィンドウのインスタンスの生成（後でマーカーに紐付け）
  var infowindow = new google.maps.InfoWindow();
  
  //PlacesService のインスタンスの生成（引数に map を指定）
  var service = new google.maps.places.PlacesService(map);
  
  if(!navigator.geolocation){ 
    //情報ウィンドウの位置をマップの中心位置に指定
    infowindow.setPosition(map.getCenter());
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('Geolocation に対応していません。');
    //情報ウィンドウを表示
    infowindow.open(map);
  }
  
  //ブラウザが対応している場合、position にユーザーの位置情報が入る
  navigator.geolocation.getCurrentPosition(function(position) { 
    //position から緯度経度（ユーザーの位置）のオブジェクトを作成し変数に代入
    var pos = {  
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    //情報ウィンドウに現在位置を指定
    infowindow.setPosition(pos);
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('現在位置を取得しました。');
    //情報ウィンドウを表示
    infowindow.open(map);
    //マップの中心位置を指定
    map.setCenter(pos);
    // 現在位置をマップにマーカー表示
    new google.maps.Marker({
      map: map,
      position: pos
    });

    service.textSearch({
        location: pos,
        radius: 500,
        query: '駐輪場'
    }, callback);

 
    //コールバック関数には results, status が渡されるので、status により条件分岐
    function callback(results, status) {
      // status は以下のような定数で判定（OK の場合は results が配列で返ってきます）
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //results の数だけ for 文で繰り返し処理
        for (var i = 0; i < results.length; i++) {
          //createMarker() はマーカーを生成する関数（別途定義）
          createMarker(results[i]);
        }
      }
    }
  }, function() {  //位置情報の取得をユーザーがブロックした場合のコールバック
    //情報ウィンドウの位置をマップの中心位置に指定
    infowindow.setPosition(map.getCenter());
    //情報ウィンドウのコンテンツを設定
    infowindow.setContent('Error: Geolocation が無効です。');
    //情報ウィンドウを表示
    infowindow.open(map);
  });   
  
  //マーカーを生成する関数（引数には検索結果の配列 results[i] が入ってきます）
  function createMarker(place) {
    // var placeLoc = place.geometry.location; 
    // 駐輪場のアイコン
    var icon = {
      url: "<%= image_path '4415.jpg' %>",
      // size: new google.maps.Size(10, 10),
      // origin: new google.maps.Point(0, 0),
      // anchor: new google.maps.Point(0, 20)
    };
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,  //results[i].geometry.location
      icon: icon
    });
 
    //マーカーにイベントリスナを設定
    marker.addListener('click', function() {
      infowindow.setContent(place.name);  //results[i].name
      infowindow.open(map, this);
    });
  }
}
