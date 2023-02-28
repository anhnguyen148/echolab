$(document).ready(function() {
    
    $("#seeNameBTN").click(function (){
        
        $(".content").empty();

        // get value from user's input
        var inputName = $("#nameInput").val();

        // delete white spaces in user's input
        var inputNameWithoutSpace= inputName.replace(" ", "");
        var inputWordsArray = inputName.split(" ");

        // displace some output
        // prompt user that they can't hit the button without an input
        if (inputName.length == 0) {
            $(".subContent").text(`You must enter something!`)
        }
        else {
            $(".subContent").text(`Your name has ${inputNameWithoutSpace.length} letters long.`)
        }

        // add animation letters to output
        for (var i = 0; i < inputWordsArray.length; i++) {
            $(".content").append(
                `<span class="title-word title-word-${i+1}">${inputWordsArray[i] + " "}</span>`
            );
        }
        // wipe out after being clicked
        $("#nameInput").val("");
    });

    // hide text before users click on button
    $("#defaulText").hide();

    // user clicks on one of 12 birth month buttons
    $(".btn-secondary").click(function () {
        // pick up the button value attribute
        let userMonth = $(this).attr("value");
        // change class of that button
        $(this).attr("class", "btn btn-danger");
        // show text
        $("#defaulText").show();
        $(".monthOutput").append(
            `${getAnimal(userMonth)}`
        );
        $(".btn-secondary").off('click');
    });

    // call our get animal f/n and pass the userMonth: JAN | FEB ...  
    function getAnimal(month) {
    //initialize animal variable
        let animal = "nothing";
    
        switch (month) {
            case "jan":
                animal = "Rabbit";
                break;
            case "feb":
                animal = "Horse";
                break;
            case "mar":
                animal = "Bird";
                break;
            case "apr":
                animal = "Lizard";
                break;
            case "may":
                animal = "Goldfish";
                break;
            case "jun":
                animal = "Goat";
                break;
            case "jul":
                animal = "Spider";
                break;
            case "aug":
                animal = "Pig";
                break;
            case "sep":
                animal = "Dog";
                break;
            case "oct":
                animal = "Pet Rock";
                break;
            case "nov":
                animal = "Turtle";
                break;
            case "dec":
                animal = "Cat";
                break;
        }
        return animal;
    }
});