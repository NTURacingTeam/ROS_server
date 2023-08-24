<!DOCTYPE html>
 
<head>
    <style>
        body {font-size:200%;}
    </style>
</head>
 
<body>
    <br>
 
    <?php
    $i = 1;
    $g = glob("*");
    foreach ($g as $f)
    {
        if ($f == "index.php") continue;
        echo $i . ". " . "<a href=\"" . $f . "\">" . $f . "</a><br><br>";
        $i = $i + 1;
    }
    ?>
</body>
