<?php

include 'Base.php';


class Controller_Practice extends Controller_Base {

    function __construct() {
        parent::__construct();
    }



    public function route() {

        $data= array(
		    'name'=>'Tim',
		    'test'=>"testtext",
		    'currentime'=>date('H:i:s'),

		    'fields'=>array(
		    	array('text'=>"thing 1"), 
		    	array('text'=>"thing 2"),
		    	array('text'=>"thing 3")
		    )

		);
        return $data;
    }



}
