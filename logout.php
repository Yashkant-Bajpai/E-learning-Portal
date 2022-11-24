<?php
unset($_SESSION['email']);
session_destroy();
header('location:index2.html');
die();
?>