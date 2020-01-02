<?php

$file = 'src/resume1912.pdf';

header ('Content-type : application/pdf');
header ('Content-Disposition : inline; filename ="' . $file . '"');
header ('Content-Transfer-Encoding : binary');
header ('Accept-Range : bytes');

@readfile($file);

?>