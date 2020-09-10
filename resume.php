<?php

$file = 'src/daniel_kwon_20_august.pdf';

// Header content type
header('Content-type: application/pdf');

header('Content-Disposition: inline; filename="' . $file . '"');

header('Content-Transfer-Encoding: binary');

header('Accept-Ranges: bytes');

// Read the file
@readfile($file);

?>
