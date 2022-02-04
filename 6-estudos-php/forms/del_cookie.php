<?php

setcookie('cookieNome', '', time() - 3600, '/');

header('Location: ../index2.php');
exit;
