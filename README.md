# Cypress
This automation is written in TypeScript (a strict syntactical superset of JavaScript and adds optional static typing to the language)

## Running Tests

## How to run

```bash
npm install
```

run cypress
```bash
npx cypress run
```

open cypress dashboard
```bash
npx cypress open
```
<b>Install</b>
Node JS
Java SDK & JAVA_HOME
Android Studio & ANDROID_HOME
Appium Server
Appium Inspector

## 1. Code review <br>
Pengujian berisi scenario pengujian yang berbeda untuk menguji fungsionalitas yang ada pada halaman web https://www.saucedemo.com/. Pengujian terdiri dari beberapa pengujian sebagai berikut: <br>

<p>Pada pengujian pertama, digunakan fungsi loginPage.login() untuk membuka halaman login dan memasukkan kredensial yang valid. Setelah itu, dilakukan pengujian dengan memanggil fungsi loginPage.assertLogin() untuk memastikan bahwa pengguna berhasil login dan halaman produk muncul setelah login.</p>

<p>Pada pengujian kedua menggunakan fungsi loginPage.login() untuk membuka halaman login, namun kali ini dengan memasukkan kredensial yang salah/invalid. Kemudian, digunakan fungsi loginPage.assertLoginFail() untuk memastikan bahwa login gagal dan pesan kesalahan muncul pada halaman login.</p>

Pada pengujian ketiga bertujuan untuk memeriksa apakah produk "Sauce Labs Backpack" dapat diakses setelah login berhasil. Dalam pengujian ini, fungsi loginPage.login() digunakan kembali untuk login ke halaman produk, kemudian fungsi dashboardPage.sauceLabsBackpack() digunakan untuk mengklik tautan produk dan memastikan bahwa halaman produk terbuka.

<p>Pada pengujian keempat, terdapat pengujian untuk memastikan bahwa ketika pengguna memasukkan username yang tidak valid, proses login akan gagal dan pengguna tidak dapat mengakses halaman produk. Untuk melakukan pengujian tersebut, pertama-tama dilakukan login dengan menggunakan username "invalid_user" dan password "secret_sauce". Kemudian, dilakukan pengecekan apakah proses login berhasil atau gagal dengan menggunakan fungsi assertLoginFail(). </p>

<p> Pada bagian kelima, terdapat pengujian untuk memastikan bahwa pengguna dapat menghapus produk backpack yang ada di dalam keranjang belanja. Pengujian dimulai dengan melakukan login menggunakan username "standard_user" dan password "secret_sauce". Kemudian, pengguna memilih produk "Sauce Labs Backpack" dan menambahkannya ke dalam keranjang belanja. Setelah itu, dilakukan pengecekan keranjang belanja dan user melakukan remove produk "Sauce Labs Backpack" dari keranjang belanja. Proses penghapusan dilakukan dengan melakukan klik pada tombol "Remove" dan menunggu selama 1,5 detik sebelum dilakukan pengecekan apakah produk backpack berhasil dihapus dari keranjang belanja.</p>

<p>Pada bagian keenam, terdapat pengujian untuk memastikan bahwa pengguna dapat melakukan proses checkout untuk membeli produk "Sauce Labs Backpack". Pengujian dimulai dengan melakukan login menggunakan username "standard_user" dan password "secret_sauce". Kemudian, pengguna memilih produk "Sauce Labs Backpack" dan menambahkannya ke dalam keranjang belanja. Setelah itu, dilakukan proses checkout dengan mengisi formulir data pengiriman seperti Fisrt Name, Last Name, dan Zip/Postal Code. Setelah data telah terisi, pengguna melakukan konfirmasi dengan mengklik tombol "Continue" dan kemudian melakukan pembayaran dengan mengklik tombol "Finish". Proses ini akan menyelesaikan proses pembelian produk "Sauce Labs Backpack" pada web Sauce Demo.</p>

## 2. Create document
Link document: https://docs.google.com/spreadsheets/d/1OAfe6p-VG5NUPmXzXYWk2chUVlDskoOs93nZhXvN9aE/edit#gid=1324629749

## 3. Create 2 new flows of automation
Anda bisa melihatnya di halaman berikut: https://github.com/Kengyuuon/Cypress-typescript/blob/master/cypress/integration/login.ts

## 4. Create step 2 automation script for those scenario using cypress typescript with FORK the repository to your own account
link: https://github.com/Kengyuuon/Cypress-typescript

## 5. Record
 Video Record: 

## 6. Push to github
Link: https://github.com/Kengyuuon/Cypress-typescript

### Thanks
