$(document).ready(function(){
    
    $('button').on('click',function(e){
        e.preventDefault();
        $('#errors').empty();

        var errors = [];
        var index = 0;
        var userEmail = $('input:first').val();
        var userPswd = $('input:last').val();

        // email validation
        var goodEmail = /\w+@\w+.\w{2,}/
        if ((goodEmail.exec(userEmail) == null)){
            errors[index] = "Must enter valid email.";
            index ++;
        }

        // password validation
        // must have at least one digit
        var oneDigit = /\d+/
        if ((oneDigit.exec(userPswd) == null)){
            errors[index] = "Password must have at least one digit.";
            index ++;
        }        

        // must have at least one capital letter
        var oneCapital = /[A-Z]+/
        if ((oneCapital.exec(userPswd) == null)){
            errors[index] = "Password must have at least one capital letter.";
            index ++;
        }

        // must be at least 8 characters long
        var atLeastNine = /.{9,}/
        if ((atLeastNine.exec(userPswd) == null)){
            errors[index] = "Password must be at least 9 characters.";
            index ++;
        }

        // display all errors
        for(i=0; i<index ; i++){
            $('#errors').append('<li>' + errors[i] + '</li>');
        }
    });
});