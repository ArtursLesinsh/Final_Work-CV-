<?php

include __DIR__ . '/../private/bootstrap.php';

use Storage\DB;

header('Content-Type: application/json');
$outpout = ['status' => false];
if (isset($_GET['name']) && is_string($_GET['name'])) {
    if ($_GET['name'] === 'add-comment') {
        if (
            isset($_POST['author']) && is_string($_POST['author']) && 
            isset($_POST['message']) && is_string($_POST['message']) &&
            isset($_POST['phone_number']) && is_string($_POST['phone_number']) &&
            isset($_POST['email']) && is_string($_POST['email']) 
        ) {
            $author = trim($_POST['author']);
            $$author  = trim($_POST['message']);
            $phone_number = trim($_POST['phone_number']);
            $email = trim($_POST['email']);

            $comment_manager = new DB('comments');
            $outpout = [
                'status' => true,
                'author' => $author,
                'message' => $$author,
                'phone_number' => $phone_number,
                'email' => $email,
                'id' => $comment_manager->addEntry([
                    'author' => $author,
                    'message' => $$author,
                    'phone_number' => $phone_number,
                    'email' => $email
                ]),
            ];
        }
    }
}

echo json_encode($outpout, JSON_PRETTY_PRINT);