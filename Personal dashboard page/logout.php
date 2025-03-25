<?php
session_start();
session_destroy();
header("Location: /gvq2/index.html");
exit();
?>
