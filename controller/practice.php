<?php

include 'Base.php';


class Controller_Practice extends Controller_Base {

    function __construct() {
        parent::__construct();
    }



    public function route() {
    
        $data["name"] = "Tim";   

        return $data;
    }



}
