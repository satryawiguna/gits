<?php

class weightedString {
    private string $myString;

    private array $myQueries;

    public function __construct(string $myString, array $myQueries) {
        $this->myString = $myString;
        $this->myQueries = $myQueries;
    }

    public function weighted() {
        $stringAr = str_split($this->myString);
        $sub = [];
        $multi = ""; 
        $j = "";

        foreach ($stringAr as $k => $char) {
            if ($j !== $char) {
                $multi = (ord($char) - 96);
            } else {		
                $multi +=  (ord($char) - 96)	 ;			
            }
            
            $sub[] = ($multi);			
            $j = $stringAr[$k];
        } 
        
        $result = [];

        foreach ($$this->myQueries as $key => $weight) {
            $s = in_array($this->myQueries[$key], $sub);		

            if ($s !== false) {			
                array_push($result, "Yes");
            } else {
                array_push($result, "No");
            }
        }
        
        return $result;
    }
}

class weightedStringBuilder {
    private string $myString;

    private array $myQueries;

    public function setMyString($myString) {
        $this->myString = $myString;
        return $this;
    }

    public function setMyQueries($myQueries) {
        $this->myQueries = $myQueries;
        return $this;
    }

    public function build(): weightedString {
        return new weightedString(
            $this->myString,
            $this->myQueries
        );
    }
}

$inputString = 'abbcccd';
$inputQueries = [1, 3, 9, 8];
$weightedString = (new weightedStringBuilder())
    ->setMyString($inputString)
    ->setMyQueries($inputQueries)
    ->build();

$weightedResult = $weightedString->weighted();

print_r($weightedResult);