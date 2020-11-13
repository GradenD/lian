<?php 
    require_once 'tmp/header.php';
?>

<?php 
	if (isset($_GET['page'])){
        $page=Router::render($_GET['page']);
    }
    else{
        $page=Router::render('index');
    }
?>

<?php
    require_once 'tmp/footer.php';
?>
