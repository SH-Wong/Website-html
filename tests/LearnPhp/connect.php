<html>
<head></head>
<body>
    
<p>Php connect to mysql.</p>
    
<?php

function db_connect(){
    //Define as static variable, to avoid connecting more than once
    static $connection;

    //Connect to DB if not connected
    if(!isset($connection)){
        // Load db login credentials as an array
        $config = parse_ini_file('/var/www/config.ini');

        // Try to connect usng array credentials
        $connection = mysqli_connect($config['servername'],$config['username'],$config['password'],$config['dbname']);
    }
    
    // Error handling for db connection
    if($connection === false) {
        echo("Connection failed.");
    } else{
        echo("Connection successful.");
        return $connection;
    }
}

function db_query($query){
    //connection to database
    $connection = db_connect();
    //Query database
    $result = mysqli_query($connection,$query);
    
    return $result;
}

function db_error(){
    $connection = db_connect();
    return mysqli_error($connection);
}

//Inserting entry into database
/*$result = db_query("INSERT INTO users (`name`,`email`) VALUES ('John Doe','john.doe@gmail.com')");
if($result === false){
    $error = db_error();
    echo($error);
} else{
    echo("Insert successful.");
} */


//Deleting database entry
/*$result = db_query("DELETE FROM users WHERE name = 'John Doe'");
if($result === false){
    $error = db_error();
    echo($error);
} else{
    echo("Deleted.");
}*/
    
//Select query. $result will be a sqli_result object if successful
/*$result = db_query("SELECT `name`,`email` FROM `users` WHERE id=5");
if($result === false){
    $error = db_error();
    echo($error);
} else{
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
}*/

//Select query in function
function db_select($query){
    $rows = array();
    $result = db_query($query);
    
    //If query fails return false
    if($result === false){
        return false;
    }
    
    //If query was successful, retrieve all the rows into an array
    while ($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}

$rows = db_select("SELECT `name`,`email` FROM `users` WHERE name='John Doe'");
if($rows === false){
    $error = db_error();
    echo($error);
}
    
?>


    
</body>
</html>