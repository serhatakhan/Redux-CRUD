# State Yönetimi

- `State`: Uygulamadaki bileşenlerimizin sahip olduğu bilgi ve özellikler.

- `Prop Drilling`: Bileşenlerin yukarıdan aşağıya veri taşıması.

- `Context`: Uygulamadaki state'in bütün bileşenler tarafından erişebilmesi için oluşturulan merkezlerden yönettiğimiz state yönetim aracı. 

- `Redux`: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracı.


# Neden Context yerine Redux?

- Kod tekrarını azaltır.
- Performansı arttırır.
- Bileşen içerisindeki karşılığı azaltır.
- Hata ayıklama kolaydır.
- Orta ve büyük ölçekli projelerde state'in yönetimi daha kolay hale gelir.


# Redux ile ilgili bilinmesi gerekenler:

1. `Store`: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu.

2. `Reducer`: Aksiyondan aldığı talimata göre store'da tutulan state'in nasıl değişeceğine karar veren fonskiyon.

3. `Action`: Store'daki sttae'i güncellemek için reducer'a gönderdiğimi nesne. (emir/haber/eylem)

- - Action, 2 değere sahip bir objedir:
- - 1) type: Action'ın görevini tanımlayan string
- - 2) payload: Gönderilen eylemin verisi

4. `Dispatch (Sevketmek)`: Action'ın gerçekleştiğini reucer'a haber veren metot.

5. `Subscribe (Abone Olmak)`: Bileşenlerin store'da tutulan veriye erişimini sağlama.
  (useContext, `useSelector` oldu.)

6. `Provider (Sağlayıcı)`: Store'da tutulan verileri uygulamaya sağlar. 


# gerçek hayattan bir örnek:

1. store: okulun binası

2. reducer: okulun yönetim ekibi (müdür | müdür yard.)

3. action: "öğrencinin sınavı geçmesi" | "yeni öğrenci kaydı" | "öğrencini okuldan atılması"

4. dispatch: öğrenci işleri | öğretmen | nöbetçi öğrenci

5. subscribe: e-okul | rehberlik servisi

6. provider: MEB | okul aile birliği


# Redux Kurulum Aşamaları:

- `redux` ve `react-redux` paketlerini indir.

- reducer/reducer'ların kurulumunu yap.
(yöneteceğimiz her farklı veri için, bir reducer dosyası oluşturmalıyız.)
(mesel ürünler için ayrı, todo'lar için ayrı, kullanıcılar için ayrı...)

- store'un kurulumunu yap.

- store'u projeye tanıt.
- - (redux'un içinde olan Provider, main.jsx'de import edilir.)
- - (App, Provider ile sarmalanır.)
- - (sonra oluşturulan store dosyası import edilir.)
- - (Provider'a özellik olarak store verilir. store={store} şeklinde)
<!-- store={store} şu anlama geliyor: store'da tutulan verileri, provider aracılığıyla uygulamaya(App) aktar -->

<!-- ÖZETLE: REDUCER'DA DISPATCH EDİLEN AKSİYONU AL, STATE'IN NASIL DEĞİŞECEĞİNE KARAR
VER, İSTEDİĞİN YERDE BU VERİYE ABONE OLUP KULLAN -->


## Api ve Redux Birlikte Kullanımı

- - > Bir projede veriler api'den geliyorsa mutlaka state'i, store'u veya context'i güncelleme işlemini api isteğine BAĞIMLI hale getirmeliyiz. Verilerin gelme, silinme, gitme, güncellenme işlemlerinin tamamı api isteği gerçekleşirse çalışmalıdır. Aksi takdirde kullanıcıya gerçekleşmeyen işlemler yansıtılmış olur !!!


## Yaygın Hatalar:

- Bir değişikliği yapınca arayüz güncelleniyor ama sayfayı yenileyince değişkliği kaybediyorsak,
hata API'den kaynaklıdır. `SORUNU APİ'DE, İSTEKLERDE ARA.`

- Bir değişiklik yapınca arayüzün güncellenmesi için sayfayı yenilemek zorunda kalyorsak, api
başarılı şekilde güncellenmiştir ANCAK VERİYİ STATE'E, STORE'A VEYA CONTEXT'E AKTARMADA SORUN VARDIR. `YANİ SORUNU STATE YÖNETİMİNDE ARA.` 

