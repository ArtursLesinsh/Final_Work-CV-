<?php

namespace Storage;
class DB
{
    private $table_name = null;
    private $connection = null;
    public function __construct ($table_name) {
        $this->table_name = $table_name;
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $dbname = "bootcamp1990";

        // Create connection
        $this->conn = new \mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }    
    }

    public function __deconstruct() {
        $this->$connection->close();
    }

    public function addEntry($entry) {
        // $sql = "INSERT INTO " . $this->table_name . " (author, message, email, phone number)
        // VALUES ('John', 'Doe', 'john@example.com', '34 56 84 93')";

        $column_str = '';
        $value_str = '';
        foreach ($entry as $key => $value) {
            $column_str .= $key . ',';
            $value_str .= "'" . $this->conn->real_escape_string($value) . "',";
        }
        $column_str = rtrim($column_str, ',');
        $value_str = rtrim($value_str, ',');

        $sql = "INSERT INTO " . $this->table_name . " ($column_str) VALUES ($value_str)";

        $result = $this->conn->query($sql);
        if ($result === true) {
            return $this->conn->insert_id;
        };
        return false;
    }

    public function getAll () {
        $sql = "SELECT * FROM " . $this->table_name;
        $result = $this->conn->query($sql);

        return $result->fetch_all(MYSQLI_ASSOC);
    }
}