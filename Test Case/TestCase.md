
# Test Case and Test Summary

## Informasi Pengujian

| Informasi | Detail |
|---|---|
| Aplikasi | SauceDemo (Swag Labs) |
| Sistem Operasi | Windows 10 |
| Browser | Google Chrome 152 |
| Metode | Manual Testing |
| Pendekatan | Black Box Testing |

---

# 1. Login

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-LOGIN-001 | TC-LOGIN-001 | Memastikan pengguna dapat login menggunakan username dan password yang valid | Login dengan username dan password valid | `standard_user` / `secret_sauce` | 1. Masukkan username.<br>2. Masukkan password.<br>3. Klik Login. | Pengguna berhasil login dan diarahkan ke halaman Products. | Pengguna berhasil login menggunakan `standard_user` dan diarahkan ke halaman Products. | PASS |
| TS-LOGIN-002 | TC-LOGIN-002 | Memastikan sistem menolak login menggunakan username yang tidak valid | Login dengan username tidak valid | `invalid_user` / `secret_sauce` | 1. Masukkan username tidak valid.<br>2. Masukkan password valid.<br>3. Klik Login. | Sistem menolak login dan menampilkan pesan error. | Sistem menolak login menggunakan username tidak valid dan menampilkan pesan error. | PASS |
| TS-LOGIN-003 | TC-LOGIN-003 | Memastikan sistem menolak login menggunakan password yang tidak valid | Login dengan password tidak valid | `standard_user` / `wrong_password` | 1. Masukkan username valid.<br>2. Masukkan password tidak valid.<br>3. Klik Login. | Sistem menolak login dan menampilkan pesan error. | Sistem menolak login menggunakan password tidak valid dan menampilkan pesan error. | PASS |
| TS-LOGIN-004 | TC-LOGIN-004 | Memastikan sistem memberikan validasi ketika username kosong | Login dengan username kosong | Username kosong / `secret_sauce` | 1. Biarkan username kosong.<br>2. Masukkan password.<br>3. Klik Login. | Sistem menampilkan validasi bahwa username diperlukan. | Sistem menampilkan pesan bahwa username diperlukan. | PASS |
| TS-LOGIN-005 | TC-LOGIN-005 | Memastikan sistem memberikan validasi ketika password kosong | Login dengan password kosong | `standard_user` / Password kosong | 1. Masukkan username.<br>2. Biarkan password kosong.<br>3. Klik Login. | Sistem menampilkan validasi bahwa password diperlukan. | Sistem menampilkan pesan bahwa password diperlukan. | PASS |
| TS-LOGIN-006 | TC-LOGIN-006 | Memastikan sistem dapat menangani akun pengguna yang terkunci | Login menggunakan akun yang terkunci | `locked_out_user` / `secret_sauce` | 1. Masukkan username.<br>2. Masukkan password.<br>3. Klik Login. | Sistem menolak login dan menampilkan pesan bahwa pengguna terkunci. | Login menggunakan `locked_out_user` ditolak dan sistem menampilkan pesan bahwa pengguna terkunci. | PASS |

---

# 2. Product

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-PROD-001 | TC-PROD-001 | Memastikan daftar produk dapat ditampilkan setelah pengguna berhasil login | Menampilkan daftar produk | `standard_user` / `secret_sauce` | 1. Login ke aplikasi.<br>2. Amati halaman Products. | Daftar produk ditampilkan. | Daftar produk berhasil ditampilkan setelah login. | PASS |
| TS-PROD-002 | TC-PROD-002 | Memastikan nama produk ditampilkan dengan benar | Menampilkan nama produk | - | 1. Amati daftar produk. | Nama setiap produk ditampilkan. | Nama produk ditampilkan pada setiap product card. | PASS |
| TS-PROD-003 | TC-PROD-003 | Memastikan harga produk ditampilkan dengan benar | Menampilkan harga produk | - | 1. Amati daftar produk. | Harga setiap produk ditampilkan. | Harga produk ditampilkan pada setiap product card. | PASS |
| TS-PROD-004 | TC-PROD-004 | Memastikan gambar produk ditampilkan dengan benar | Menampilkan gambar produk | - | 1. Amati daftar produk. | Gambar produk ditampilkan. | Setelah login menggunakan `problem_user`, beberapa gambar produk tidak sesuai dengan produk yang ditampilkan. | FAIL |
| TS-PROD-005 | TC-PROD-005 | Memastikan pengguna dapat membuka detail produk | Membuka detail produk | Sauce Labs Backpack | 1. Klik nama atau gambar produk. | Halaman detail produk yang dipilih ditampilkan. | Halaman detail produk berhasil dibuka. | PASS |
| TS-PROD-006 | TC-PROD-006 | Memastikan pengguna dapat menambahkan produk ke shopping cart | Menambahkan produk ke shopping cart dari halaman Products | Sauce Labs Backpack | 1. Klik Add to cart pada produk. | Produk ditambahkan ke shopping cart. | Produk berhasil ditambahkan ke shopping cart. | PASS |

---

# 3. Product Sorting

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-SORT-001 | TC-SORT-001 | Memastikan pengguna dapat mengurutkan produk berdasarkan nama dari A sampai Z | Sorting nama A-Z | Name (A to Z) | 1. Buka dropdown sorting.<br>2. Pilih Name (A to Z). | Produk diurutkan berdasarkan nama dari A sampai Z. | Produk berhasil diurutkan berdasarkan nama dari A sampai Z. | PASS |
| TS-SORT-002 | TC-SORT-002 | Memastikan pengguna dapat mengurutkan produk berdasarkan nama dari Z sampai A | Sorting nama Z-A | Name (Z to A) | 1. Buka dropdown sorting.<br>2. Pilih Name (Z to A). | Produk diurutkan berdasarkan nama dari Z sampai A. | Produk berhasil diurutkan berdasarkan nama dari Z sampai A. | PASS |
| TS-SORT-003 | TC-SORT-003 | Memastikan pengguna dapat mengurutkan produk berdasarkan harga terendah ke tertinggi | Sorting harga rendah ke tinggi | Price (low to high) | 1. Buka dropdown sorting.<br>2. Pilih Price (low to high). | Produk diurutkan berdasarkan harga terendah ke tertinggi. | Produk berhasil diurutkan berdasarkan harga dari terendah ke tertinggi. | PASS |
| TS-SORT-004 | TC-SORT-004 | Memastikan pengguna dapat mengurutkan produk berdasarkan harga tertinggi ke terendah | Sorting harga tinggi ke rendah | Price (high to low) | 1. Buka dropdown sorting.<br>2. Pilih Price (high to low). | Produk diurutkan berdasarkan harga tertinggi ke terendah. | Produk berhasil diurutkan berdasarkan harga dari tertinggi ke terendah. | PASS |

---

# 4. Shopping Cart

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-CART-001 | TC-CART-001 | Memastikan pengguna dapat membuka shopping cart | Membuka shopping cart | - | 1. Klik ikon shopping cart. | Halaman Your Cart ditampilkan. | Halaman Your Cart berhasil ditampilkan. | PASS |
| TS-CART-002 | TC-CART-002 | Memastikan produk yang dipilih ditampilkan di shopping cart | Memastikan produk ditampilkan di shopping cart | Sauce Labs Backpack | 1. Tambahkan produk ke cart.<br>2. Buka shopping cart. | Produk yang dipilih ditampilkan di shopping cart. | Produk yang dipilih ditampilkan di shopping cart. | PASS |
| TS-CART-003 | TC-CART-003 | Memastikan pengguna dapat menghapus produk dari shopping cart | Menghapus produk dari shopping cart | Sauce Labs Backpack | 1. Buka shopping cart.<br>2. Klik Remove. | Produk dihapus dari shopping cart. | Button Remove tidak dapat menghapus produk pada akun `problem_user`. | FAIL |
| TS-CART-004 | TC-CART-004 | Memastikan jumlah item pada shopping cart diperbarui setelah produk ditambahkan | Memastikan jumlah item bertambah | Dua produk | 1. Tambahkan produk pertama.<br>2. Tambahkan produk kedua. | Jumlah item pada ikon shopping cart bertambah sesuai jumlah produk. | Jumlah item bertambah sesuai jumlah produk yang ditambahkan. | PASS |
| TS-CART-005 | TC-CART-005 | Memastikan jumlah item pada shopping cart diperbarui setelah produk dihapus | Memastikan jumlah item berkurang setelah produk dihapus | Produk dalam cart | 1. Buka shopping cart.<br>2. Klik Remove pada salah satu produk. | Jumlah item pada shopping cart diperbarui. | Jumlah item diperbarui setelah produk dihapus. | PASS |
| TS-CART-006 | TC-CART-006 | Memastikan pengguna dapat melanjutkan proses checkout dari shopping cart | Melanjutkan checkout dari shopping cart | Produk dalam cart | 1. Buka shopping cart.<br>2. Klik Checkout. | Pengguna diarahkan ke halaman Checkout: Your Information. | Pengguna berhasil diarahkan ke halaman Checkout: Your Information. | PASS |

---

# 5. Checkout

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-CHECK-001 | TC-CHECK-001 | Memastikan pengguna dapat membuka halaman checkout | Membuka halaman checkout | Produk dalam cart | 1. Buka cart.<br>2. Klik Checkout. | Halaman Checkout: Your Information ditampilkan. | Halaman Checkout: Your Information berhasil ditampilkan. | PASS |
| TS-CHECK-002 | TC-CHECK-002 | Memastikan pengguna dapat melanjutkan checkout menggunakan informasi yang valid | Checkout menggunakan informasi valid | First Name: Soe<br>Last Name: Kar<br>ZIP: 12345 | 1. Isi First Name.<br>2. Isi Last Name.<br>3. Isi ZIP.<br>4. Klik Continue. | Pengguna diarahkan ke halaman Checkout: Overview. | Pengguna berhasil diarahkan ke Checkout: Overview. | PASS |
| TS-CHECK-003 | TC-CHECK-003 | Memastikan sistem memberikan validasi ketika First Name kosong | Checkout dengan First Name kosong | First Name kosong | 1. Kosongkan First Name.<br>2. Isi Last Name.<br>3. Isi ZIP.<br>4. Klik Continue. | Sistem menampilkan validasi First Name diperlukan. | Validasi First Name ditampilkan ketika field dikosongkan. | PASS |
| TS-CHECK-004 | TC-CHECK-004 | Memastikan sistem memberikan validasi ketika Last Name kosong | Checkout dengan Last Name kosong | Last Name kosong | 1. Isi First Name.<br>2. Kosongkan Last Name.<br>3. Isi ZIP.<br>4. Klik Continue. | Sistem menampilkan validasi Last Name diperlukan. | Validasi Last Name ditampilkan ketika field dikosongkan. | PASS |
| TS-CHECK-005 | TC-CHECK-005 | Memastikan sistem memberikan validasi ketika ZIP/Postal Code kosong | Checkout dengan ZIP kosong | ZIP kosong | 1. Isi First Name.<br>2. Isi Last Name.<br>3. Kosongkan ZIP.<br>4. Klik Continue. | Sistem menampilkan validasi Postal Code diperlukan. | Validasi Postal Code ditampilkan ketika field dikosongkan. | PASS |
| TS-CHECK-006 | TC-CHECK-006 | Memastikan informasi produk ditampilkan pada halaman Checkout Overview | Memastikan informasi produk ditampilkan pada Checkout Overview | Produk dalam cart | 1. Isi data checkout.<br>2. Klik Continue. | Produk dan informasi order ditampilkan pada halaman Checkout: Overview. | Informasi produk dan order ditampilkan. | PASS |
| TS-CHECK-007 | TC-CHECK-007 | Memastikan pengguna dapat menyelesaikan proses checkout | Menyelesaikan checkout | Data checkout valid | 1. Isi data checkout.<br>2. Klik Continue.<br>3. Klik Finish. | Proses checkout berhasil diselesaikan. | Checkout berhasil diselesaikan. | PASS |
| TS-CHECK-008 | TC-CHECK-008 | Memastikan sistem menampilkan konfirmasi setelah checkout berhasil | Menampilkan konfirmasi checkout | Checkout berhasil | 1. Selesaikan checkout.<br>2. Amati halaman konfirmasi. | Sistem menampilkan konfirmasi bahwa pesanan berhasil. | Halaman konfirmasi pesanan ditampilkan. | PASS |

---

# 6. Logout

| Scenario ID | Test Case ID | Test Scenario | Test Case | Test Data | Langkah Pengujian | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TS-LOGOUT-001 | TC-LOGOUT-001 | Memastikan pengguna dapat logout dari aplikasi | Logout dari aplikasi | `standard_user` | 1. Login ke aplikasi.<br>2. Buka menu.<br>3. Klik Logout. | Pengguna berhasil logout. | Pengguna berhasil logout. | PASS |
| TS-LOGOUT-002 | TC-LOGOUT-002 | Memastikan pengguna diarahkan ke halaman Login setelah logout | Memastikan pengguna diarahkan ke halaman Login setelah logout | - | 1. Logout dari aplikasi.<br>2. Amati halaman. | Pengguna diarahkan ke halaman Login. | Pengguna diarahkan ke halaman Login. | PASS |
| TS-LOGOUT-003 | TC-LOGOUT-003 | Memastikan pengguna tidak dapat mengakses fitur yang membutuhkan autentikasi setelah logout | Memastikan fitur membutuhkan autentikasi setelah logout | User sudah logout | 1. Logout.<br>2. Coba mengakses halaman yang membutuhkan login. | Pengguna tidak dapat mengakses fitur yang membutuhkan autentikasi. | Setelah logout, pengguna tidak dapat menggunakan fitur yang membutuhkan autentikasi. | PASS |

---

# Test Execution Summary

| Total Test Case | PASS | FAIL | BLOCKED |
|---:|---:|---:|---:|
| **33** | **31** | **2** | **0** |

### Persentase Hasil

| Status | Jumlah | Persentase |
|---|---:|---:|
| PASS | 31 | 93,94% |
| FAIL | 2 | 6,06% |
| BLOCKED | 0 | 0% |
| **Total** | **33** | **100%** |

---

# Failed Test Cases

| Test Case ID | Defect | Severity | Priority |
|---|---|---|---|
| TC-PROD-004 | Gambar produk tidak sesuai ketika menggunakan `problem_user` | Medium | Medium |
| TC-CART-003 | Button Remove tidak dapat menghapus produk pada akun `problem_user` | Medium | Medium |

---


# Kesimpulan

Berdasarkan hasil eksekusi **33 test case**, sebanyak **31 test case berhasil (PASS)** dan **2 test case gagal (FAIL)**. Tidak terdapat test case yang berstatus BLOCKED.

Dua test case yang gagal ditemukan pada fitur **Product** dan **Shopping Cart**, yaitu ketidaksesuaian gambar produk ketika menggunakan akun `problem_user` dan fungsi **Remove** yang tidak dapat menghapus produk pada akun `problem_user`.

Kedua hasil FAIL tersebut perlu dianalisis lebih lanjut dan dapat digunakan sebagai dasar pembuatan **Bug Report**.
