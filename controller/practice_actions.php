<?php


class Controller_Practice_Actions {

	function __construct(){
	}


	public function route(){
		
		//handle POSTs and GETs
		echo implode(" ", $_POST['fieldData']);
	
	}



}

$actions = new Controller_Practice_Actions();
$actions->route();