// Memberi tahu mahasiswa bahwa script berhasil di-load
alert('Selamat datang di Website Profil UMKM Anda!');
// Menampilkan informasi variabel di console
const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM:', namaUMKM);
// Demonstrasi variabel dan operator
let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan:', produk);
    function cekForm() { 
        let nama = document.getElementById("namaProduk").value; 
        let jumlah = document.getElementById("jumlah").value; 
    
        if (nama === "" || jumlah === "") { 
        alert("Semua kolom wajib diisi."); 
        return false; 
        } 
    
        if (jumlah <= 0) { 
        alert("Jumlah harus lebih dari 0"); 
        return false; 
        } 
    
        alert("Pemesanan berhasil dikirim!"); 
        return true; 
    } 
