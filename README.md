# Default Web Service 
<br/>

### Projenin amacı:
* `express-handlebars` paketinin şablon motoru olarak kullanıldığı bir NodeJS Web Service projesidir.
* Gerekli olan "Routes, Views, .dotenv, Public" klasörleri kurulmuş ve böylelikle doğrudan proje yazmaya hazır bir hâle getirilmiştir.
  
<hr/>
<br/>

## Kullanılan paketler ve sürümler:
```
"dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-handlebars": "^8.0.1"
  }

```

* NodeJS'in ```16.x``` ve üzeri sürüm olması tavsiye edilir.
* NPM'in ise ```7.x``` ve üzeri sürüm olması tavsiye edilir.
  
<hr/>
<br/>



## Projenin içerikleri:
* HTML ve CSS yapısı, (böl - parçala - yönet) sistemine uygun şekilde ayrılmıştır.
* "Routes" yapıları da (böl - parçala - yönet) sistemine uygun şekilde tasarlanmıştır.
* Default olarak ***Ana Sayfaya*** atılan istekler için ```<h1> Hello world </h1>``` çıktısı verilirken bulunmayan sayfalara atılan istekler için ise küçük bir "404" sayfası tasarlanmıştır.
<img src="https://i.hizliresim.com/bnc2czo.png" alt="error page"/>

<hr/>
<br/>


## Projenin genel dosyaları:
* Aşadağıki resimde görüntülenen yapıları ```Web Service``` uygulamarı için tekrar tekrar yazmak yerine hızlı bir şekilde ``` git clone https://github.com/yazilimgelisim/defaultWebService.git ``` komutu aracılığı ile gerçekleştirebiliriz.
<img src="https://i.hizliresim.com/9nt9qv5.png" alt="folder and css coding" height="500px" style="overflow:hidden"/>
