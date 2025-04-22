<?php

/*
$firstName = 'Siu Hang';
$lastName = 'Wong';
$title = '"Remain of the days"';
$author = 'Unknown';
$answer = 42;
$newLines = "\r\n\r\n";

$fullName = $firstName . ' ' . $lastName;
$book = "$title by $author";

// Heredoc syntax

$heredoc = <<< TXT
In "$title" by $author.
TXT;

echo $heredoc;


// index array
$characters = ['Authur Dent', 'Ford Prefect', 'Zaphod Beeblebrox'];
$characters[] = 'Germs';
$characters[] = 'Karma';

// echo $characters;
print_r($characters);

echo $characters[1];

//Associative array
$descriptions = [
    'Earth' => 'mostly harmless',
    'Marvin' => 'the paranoid android'
];

$descriptions['Zaphod'] = 'President of the Imperial Galatic Government';

echo "Marvin is {$descriptions['Marvin']}";
print_r($descriptions);
    */
$book = [
    'title' => "The Hitchhiker's Guide to the Galaxy",
    'author' => 'Douglas Adams',
    'description' => 'A comedy sci-fi adventure originally based on a BBC radio series'
];

$characters =[
    'Arthur Dent',
    'Ford Prefect',
    'Zaphod Beeblebrox',
    'Marvin, the paranoid android',
    'Slartibartfast'
];
?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Challenge: Embed in HTML</title>
    </head>

    <body>
        <h1>
            <?php echo $book['title'] . ' by ' . $book['author'] ;?>
        </h1>
        <p>
            <?= $book['description'];?>
        </p>
        <h2>Main Characters</h2>
        <ul>
            <?php
            echo "
            <li>$characters[0]</li>
            <li>$characters[1]</li>
            <li>$characters[2]</li>
            <li>$characters[3]</li>
            <li>$characters[4]</li>";
            ?>
        </ul>
    </body>

    </html>
