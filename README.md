# Redux CRUD

Bu proje, React ve **Redux** kullanarak basit bir todo uygulaması geliştirmek için tasarlanmıştır. Temel amacı, kullanıcının yapılacak işleri listeleyebilmesini, düzenleyebilmesini, işaretleyebilmesini ve silebilmesini sağlamaktır.

## Özellikler

* **``Redux:``** Uygulama durumu yönetimi için Redux kullanılmıştır. Redux, uygulama genelinde tek bir state ağacını yönetir ve bu sayede bileşenler arasında veri paylaşımını kolaylaştırır.

* **``React-Redux:``** Redux'un React uygulamalarıyla entegrasyonunu sağlamak için React-Redux kütüphanesi kullanılmıştır. Bu sayede Redux store'una erişim sağlanmış ve bileşenlerin bu store ile etkileşimi kolaylaştırılmıştır.

* **``Axios:``** HTTP istekleri yapmak için Axios kütüphanesi kullanılmıştır. Axios, API'ye GET, POST, PUT, PATCH, DELETE gibi çeşitli HTTP istekleri yapabilmemizi sağlar.

* **``UUID:``** Her bir todo için benzersiz bir id oluşturulmasını sağlamaktadır.

* **``JSON-SERVER:``** Her bir todo ögesinin depolanması için JSON Server kullanılmıştır. Veriler, JSON formatında bir dosyada tutularak kolayca erişilebilir hale getirilmiştir. Bu sayede kullancılar sayfayı yenilese dahi eklenen todo'lar kaybolmamaktadır.

## Önemli Bileşenler

**1. TodoCard:** Bu bileşen, her bir todo öğesini temsil eder. Kullanıcı, bu bileşen aracılığıyla todo öğelerini düzenleyebilir, işaretleyebilir ve silebilir.

**2. AddForm:** Kullanıcının yeni bir todo öğesi ekleyebilmesini sağlayan bir form bileşenidir. Kullanıcı yeni bir todo eklediğinde, bu bilgi Redux store'a kaydedilir ve aynı zamanda bir API isteğiyle sunucuya gönderilir.

**3. Modal:** Kullanıcının bir todo öğesini düzenlemesine olanak tanıyan modal bileşenidir. Kullanıcı bir todo'yu düzenlediğinde, bu bilgi Redux store'a kaydedilir ve aynı zamanda bir API isteğiyle sunucuya gönderilir.

## Kullanılan Teknolojiler

* React
* Redux
* Axios
* JSON-Server
* UUID
* Bootstrap

# Ekran Gifi

![Kayt2024-02-16171140-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/Redux-CRUD/assets/147662915/e229752e-e255-420d-9749-050ad29e20aa)
