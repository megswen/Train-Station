// On click function to add user's input for new train to the train schedule div
$("#submit-button").click(function(event) {
    event.preventDefault();

    var trainName = $("#name-input").val();
    var trainDestination = $("#destination-input").val();
    var trainTime = $("#time-input").val();
    var trainFrequency = $("#frequency-input").val();

    var dataName = $("<td>").text(trainName);
    var dataDestination = $("<td>").text(trainDestination);
    var dataTime = $("<td>").text(trainTime);
    var dataFrequency = $("<td>").text(trainFrequency);

    var inputBox = $("<tr>");
    var tableBody = $("tbody");

    inputBox.append(dataName);
    inputBox.append(dataDestination);
    inputBox.append(dataTime);
    inputBox.append(dataFrequency);
    tableBody.append(inputBox);

    function clearForm(){
        $("#name-input").val("");
        $("#destination-input").val("");
        $("#time-input").val("");
        $("#frequency-input").val("");
    }

    clearForm();


    // Console log the results

    // Take the user's first train time and frequency and calculate when the next train should arrive relative to the current time

    // Link to firebase and check if it's working

});
