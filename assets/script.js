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

function trackCurrentTime() {
    var currentTime = moment().hour();

    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if(timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        }
    })
}

