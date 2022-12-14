<?php
        $servername="localhost";
        $username="root";
        $password="";
        $dfbname="practice.11p";

        //Create connection
        $conn = new mysql($servername, $username, $password, $dfbname);

        //Check connection
        if($conn->connect_error){
            die("Connection Failed");
        } else{
            echo 'Successfully connected';
        }


        $name=$_POST['name'];
        $password=$_POST['password'];

        $sql = "select * from students where anme like '$name' and password '$password'";

        $result = $conn->query($sql);
        print_r($result);

        if($count > 0){
            $row = mysqli_fetch_assoc($result);
            print_r($row);
        }
        ?>



<!-- <html>
    <head>
        <title>Hello World!</title>
        <style>
            body{
                color: red;
            }
        </style>
    </head>
    <body>
        echo 'Hello World!!!';
        $me = 4;
        $you = "YOU";
        $arr = [1,2];
        print_r($arr);

        $name=$_POST['name'];
        $password=$_POST['password'];
        echo $name;
        echo $password;
    </body>
</html> -->