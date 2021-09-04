<?php

$to = "info@tosocialworld.com";
$subject = "Nazor pouzivatela";
$content = ($_POST["name"] !== "" ? "Meno: " . $_POST["name"] : "") . " Nazor: " . $_POST["opinion"];
$headers = "From: " . $_POST["email"];

$status = "err";

if(mail($to, $subject, $content, $headers)) {
    $status = "ok";
}

header("location: " . $_POST["returnAddress"] . "?status=" . $status);
echo "end";

?>