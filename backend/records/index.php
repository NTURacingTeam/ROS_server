<!DOCTYPE html>
 
<head>
		<title>NTURT Record Files</title>
    <style>
        body {font-size:200%;}
    </style>
</head>
 
<body>
    <br>
<a target="_blank" rel="noopener noreferrer" href="https://www.csvplot.com/">Plot the csv here</a>
    <br>
    <br>

    <?php
    $i = 1;
    $g = glob("*");
    foreach ($g as $f)
    {
        if ($f == "index.php") continue;
        echo $i . ". " . "<a href=\"" . $f . "\">" . $f . "</a>  ";
				$create = filectime($f);
				$modify = filemtime($f);	
				$modifyDate = date("y-m-d H:i:s", filemtime($f));
				echo $modifyDate;
				echo "<br><br>";
        $i = $i + 1;
    }
    ?>
</body>
