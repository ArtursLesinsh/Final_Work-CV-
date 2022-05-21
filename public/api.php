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
            $db = new DB('comments');
            $outpout = [
                'status' => true,
                'author' => $_POST['author'],
                'message' => $_POST['message'],
                'phone_number' => $_POST['phone_number'],
                'email' => $_POST['email'],
                'id' => $db->addEntry([
                    'author' => $_POST['author'],
                    'message' => $_POST['message'],
                    'phone_number' => $_POST['phone_number'],
                    'email' => $_POST['email']
                ]),
            ];

        }
    }
    elseif ($_GET['name'] === 'get-comments') {
        $db = new DB('comments');
        $outpout = [
            'status' => true,
            'comments' =>$db->getAll()
        ];
    }
}

echo json_encode($outpout, JSON_PRETTY_PRINT);