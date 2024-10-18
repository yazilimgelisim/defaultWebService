## Default Web Service 
<br/>

### Projenin amacı:
* `express-handlebars` paketinin şablon motoru olarak kullanıldığı bir NodeJS Web Service projesidir.
* Gerekli olan "Routes, Views, .dotenv, Public" klasörleri kurulmuş ve böylelikle doğrudan proje yazmaya hazır bir hâle getirilmiştir.

<hr/>

### Kullanılan paketler:
```
"dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-handlebars": "^8.0.1"
  }

```
<hr/>


### Projenin içerikleri:
* HTML ve CSS yapısı, (böl - parçala - yönet) sistemine uygun şekilde ayrılmıştır.
* "Routes" yapıları da (böl - parçala - yönet) sistemine uygun şekilde tasarlanmıştır.
* Default olarak ***Ana Sayfaya*** atılan istekler için ```<h1> Hello world </h1>``` çıktısı verilirken bulunmayan sayfalara atılan istekler için ise küçük bir "404" sayfası tasarlanmıştır.
