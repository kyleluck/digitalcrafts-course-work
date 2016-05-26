<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Form Parameters</title>
  </head>
  <body>
    <h2>Query Parameters</h1>
    <?php
    foreach ($_GET as $key => $value) {
      echo $key . " = " . $value;
      echo "<br>";
    }
    ?>

    <h2>Post Parameters</h2>
    <?php
    foreach ($_POST as $key => $value) {
      echo $key . " = " . $value;
      echo "<br>";
    }
    ?>
  </body>
</html>
