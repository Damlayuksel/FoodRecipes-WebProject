<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); // Hata raporlamayı etkinleştirir

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

   
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format"); 
    }

    
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n-----\n";

   
    $file = "contact_messages.txt";

    
    if (file_put_contents($file, $data, FILE_APPEND) !== false) {
      
        echo "Thank you for your message.. , $name!";
    } else {
        // Error yazar
        echo "Oops no!! Something went wrong. Please try again later...";
    }
} 

else {
    header("Location: contact.html"); 
    exit();
}
?>
