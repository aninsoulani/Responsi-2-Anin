<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_menu = trim($data['nama_menu']);
$kategori = trim($data['kategori']);
$harga = trim($data['harga']);

if ($nama_menu != '' and $kategori != '' and $harga != '') {
 $query = mysqli_query($koneksi, "insert into menu(nama_menu,kategori,harga) values('$nama_matakuliah','$kategori','$harga')");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);