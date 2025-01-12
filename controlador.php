<?php
session_start();
$mysqli = new mysqli("localhost", "usuario", "Dantu8910", "usuario");

if ($mysqli->connect_error) {
    die("Conexión fallida: " . $mysqli->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $mysqli->prepare("SELECT password FROM usuarios WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['username'] = $username;
            echo "Inicio de sesión exitoso. Bienvenido, " . $username . "!";
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No existe un usuario con ese nombre.";
    }

    $stmt->close();
}
$mysqli->close();
?>

