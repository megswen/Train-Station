// Document ready function
$(document).ready(function() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA4FFiqX0MdlSJMoEAzaKl-Z5QlhGh22BQ",
        authDomain: "train-station-fa0e4.firebaseapp.com",
        databaseURL: "https://train-station-fa0e4.firebaseio.com",
        projectId: "train-station-fa0e4",
        storageBucket: "train-station-fa0e4.appspot.com",
        messagingSenderId: "163201641206",
        appId: "1:163201641206:web:207674661449d20cde1ad7",
        measurementId: "G-Y759675DRS"
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

    // Initial variables
    var name;
    var trainDestination;
    var firstTrain;
    var trainFrequency = 0;

    // On click function to add user's input for new train to firebase
    $("#submit-button").click(function(event) {
        event.preventDefault();

        // Just a bunch of vars to grab the doms
        name = $("#name-input").val().trim();
        trainDestination = $("#destination-input").val().trim();
        firstTrain = $("#time-input").val().trim();
        trainFrequency = $("#frequency-input").val().trim();

        console.log(name);
        console.log(trainDestination);
        console.log(firstTrain);
        console.log(trainFrequency);

        database.ref().push({
            name: name,
            destination: trainDestination,
            firstTrain: firstTrain,
            frequency: trainFrequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        $('form')[0].reset();
    }); 

    database.ref().on("child_added", function(childSnapshot) {
        var tRow = $("<tr>");
        var trainName = $("<td>").text(childSnapshot.val().name);
        var trainDestination = $("<td>").text(childSnapshot.val().destination);
        var freqMin = $("<td>").text(childSnapshot.val().frequency);
        var nextTrainDisplay = $("<td>").text();
        var minAwayDisplay = $("<td>").text("Not done yet");
        tRow.append(trainName, trainDestination, freqMin, nextTrainDisplay, minAwayDisplay);
        //append the table row to the table body
        $("tbody").append(tRow);

        // time the train leaves % frequency
        var currentTime = moment();
        //console.log(currentTime);

        var firstTrainNew = moment(childSnapshot.val().firstTrain, "hh:mm");
        console.log(childSnapshot.val().firstTrain);

        var frequency 

        console.log(currentTime.diff(firstTrainNew), currentTime.toISOString(), firstTrainNew.toISOString());








        // var firstTrainNew = moment(childSnapshot.val().firstTrain, 'hh:mm');
        // var diffTime = moment().diff(moment(firstTrainNew), 'minutes');
        // var remainder = diffTime % childSnapshot.val().frequency;
        // var minAway = childSnapshot.val().frequency - remainder;
        // var nextTrain = moment().add(minAway, 'minutes');
        // nextTrain = moment(nextTrain).format('hh:mm');

        // var createRow = function(data) {
        //     var tRow = $("<tr>");
        //     // Methods run on jQuery selectors return the selector they we run on
        //     // This is why we can create and save a reference to a td in the same statement we update its text
           
        //     var nextTrainDisplay = $("<td>").text(moment(nextTrain).format('HH:mm'));
        //     var minAwayDisplay = $("<td>").text(minAway);
        //     //append the newly create table data to the rable row
        //     tRow.append(trainName, trainDestination, freqMin, nextTrainDisplay, minAwayDisplay);
        //     //append the table row to the table body
        //     $("tbody").append(tRow);
        // }

        // createRow();
    });
}); 
