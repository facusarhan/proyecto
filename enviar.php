<?php
$nombre = $_POST['nombre'];
$mail = $_POST¨['email'];
$asunto = $_POST¨['asunto'];
$mensaje = $_POST¨['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
​
$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'facu.sarhan2000@gmail.com' /* el mail donde llegan los mensajes */
$asunto = 'mensaje de mi sitio web'

mail($para, $asunto, utf8_decode($mensaje), $header);

header('location: index.html');

?>