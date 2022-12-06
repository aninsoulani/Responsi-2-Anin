<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id = trim($data['id']);
$nama_menu = trim($data['nama_menu']);
$kategori = trim($data['kategori']);
$harga = trim($data['harga']);

if ($nama_menu != '' and $kategori != '' and $harga != '') {
 $query = mysqli_query($koneksi, "update menu set nama_menu='$nama_menu',kategori='$kategori',harga='$harga' where id='$id'");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
