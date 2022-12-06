<?php 
require 'koneksi.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, POST, DELETE, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$username = trim($data['username']);
$password = md5(trim($data['password']));
$query = mysqli_query($mysqli,"select * from user where username='$username' and password='$password'");
$jumlah = mysqli_num_rows($query);
if ($jumlah != 0) {
 $value = mysqli_fetch_object($query);
 $pesan['username'] = $value->username;
 $pesan['token'] = time().'_'.$value->password;
 $pesan['status_login'] = 'berhasil';
}else{
 $pesan['status_login'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($mysqli);
?>