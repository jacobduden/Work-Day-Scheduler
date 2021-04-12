var todaysDate = moment().format('dddd, MMM Do YYYY')
$("#currentDay").html(todaysDate);

$(document).ready(function() {
    // Save Button click event
    $("#saveBtn").on("click", function() {
        
        var text = $(this).sibblings(".description").val();
        var time = $(this).parent().attr("id")

        //Saves the text to local storage
        localStorage.setItem(text, time);
    })
})

