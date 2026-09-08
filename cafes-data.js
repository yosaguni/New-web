// =========================================================
// 鯖江カフェ一覧 — お店データ
// =========================================================
//
// お店を追加したいときは、下の { ... } のかたまりを
// まるごと1つコピーして、配列（[ ]の中）に貼り付けてください。
// 貼り付けたら、name / area / rating などの中身だけ書き換えればOKです。
//
// ルール:
// ・{ } のかたまりの間には必ず「,」（カンマ）を入れる
// ・一番最後の { } の後にはカンマは不要（あってもエラーにはなりません）
// ・image には、このファイルと同じフォルダに置いた写真のファイル名を入れる
// ・rating は 0〜5 の数字（例: 4.5, 3, 4）
// ・lat / lng（緯度・経度）は省略可能。指定すると、地図はその位置を
//   ピンポイントで表示します。指定しない場合は address（住所）から
//   自動で検索した場所が表示されます。
//   Googleマップでお店を右クリック→出てきた数字（例: 35.936102, 136.209447）
//   をコピーして、lat に1つ目、lng に2つ目の数字を入れてください。
//
// =========================================================

const cafes = [

    {
        name: "季節のおやつ  しずく",
        area: "鯖江市下河端町",
        genre: "ベーグル専門店",
        rating: 4.0,
        image: "shizuku.jpg",
        address: "福井県鯖江市下河端町57-58",
        lat: 35.9664498,
        lng: 136.2007893,
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d408.669718045153!2d136.20076472179986!3d35.96643643530874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8b1c1fce5b297%3A0xde4fe5b0e83eeb1f!2z5a2j56-A44Gu44GK44KE44GkIOOBl-OBmuOBjw!5e0!3m2!1sja!2sus!4v1788052291004!5m2!1sja!2sus",
        hours: "10:00 — 18:00",
        closed: "月曜 ・ 日曜",
        comment: "焼菓子とベーグルの小さな隠れ家店🏠。",
        link: "index.html"

    },
    // ↓↓↓ ここから下に、新しいお店をコピーして追加していきます ↓↓↓

    {
        name: "農家でおやつ屋さん うちのぶどう",
        area: "鯖江市下新庄町",
        genre: "菓子店",
        rating: 4.4,
        image: "budou.jpg",
        address: "福井県鯖江市下新庄町57-51",
        lat: 35.96671027712714,
        lng: 136.20077856647433,
        hours: "10:00 — 18:30",
        closed: "月曜",
        comment: "素材本来の美味しさを大切に",
        link: "#"
    },

    {
        name: "からだあいがん",
        area: "鯖江市新横江",
        genre: "カフェ・自然食品店",
        rating: 4.3,
        image: "aigan.jpg",
        address: "福井県鯖江市水落町1-514",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.470740330163!2d136.1949409!3d35.9394741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8afca8dc01661%3A0x93beb6c3c36a75fd!2z44Kr44OV44KnJuiHqueEtumjn-WTgeW6lyDjgYvjgonjgaDjgYLjgYTjgYvjgpPvvIgg44GL44G144GH44GC44KT44Gp44GX44Gc44KT44GX44KH44GP44Gy44KT44Gm44KTIOOBi-OCieOBoOOBguOBhOOBi-OCk--8iQ!5e1!3m2!1sja!2sjp!4v1788841846843!5m2!1sja!2sjp",
        hours: "8:00 — 18:00",
        closed: "月曜",
        comment: "自家焙煎の豆と、明るく開放的な店内が人気。",
        link: "#"
    },
    {
        name: "スローベリィ",
        area: "鯖江市水落町",
        genre: "カフェ・喫茶",
        rating: 3.8,
        image: "storo.jpg",
        address: "福井県鯖江市水落町28-25",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.690625672124!2d136.18126857368537!3d35.96393925362802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8b0180e5b1dfb%3A0x9b499a38c88247ad!2z44K544Ot44O844OZ44Oq44Kj!5e1!3m2!1sja!2sjp!4v1788842087424!5m2!1sja!2sjp",
        hours: "10:00 — 18:30",
        closed: "水曜",
        comment: "フルーツ専門店プロデュースのスイーツ＆自然派カフェ。",
        link: "#"
    },
    {
        name: "ドルチェ",
        area: "鯖江市桜町",
        genre: "カフェ・喫茶",
        rating: 4.3,
        image: "doru.jpg",
        address: "福井県鯖江市桜町7-15",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40311.497789823065!2d136.1563158761683!3d35.93954087037173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8afd385bb9be9%3A0x8974402ec18c9ddc!2z44OJ44Or44OB44Kn!5e1!3m2!1sja!2sjp!4v1788842040779!5m2!1sja!2sjp",
        hours: "8:00 — 19:00",
        closed: "水曜",
        comment: "老舗喫茶店で懐かしの味！",
        link: "#"
    },
    {
        name: "びーとろ実生庵",
        area: "鯖江市上河端町",
        genre: "カフェ・喫茶",
        rating: 4.4,
        image: "bito.jpg",
        address: "福井県鯖江市河端町16-43",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.959264180346!2d136.1909937745864!3d35.95551611486014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8af606c14a909%3A0xc9652ebc277cf3cc!2z44Gz44O844Gp44KN5a6f55Sf5bq1!5e1!3m2!1sja!2sjp!4v1788842111721!5m2!1sja!2sjp",
        hours: "11:30 — 15:00",
        closed: "水曜・日曜日",
        comment: "個性派　3種のオリジナルカレー",
        link: "#"
    },

    // ↑↑↑ 新しいお店を追加するときは、直前の要素の後ろに「,」を忘れずに ↑↑↑

];