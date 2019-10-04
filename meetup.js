console.log('in javascript');

$(document).ready(onReady);

let totalMeetups = 10;

function onReady() {
    console.log('I guess Im ready now');
    $('#addButton').on('click', function () {
        console.log('I was clicked');
        let totalMeetups = $('#meetupCounter').text();
        console.log(totalMeetups);
        totalMeetups++;
        $('#meetupCounter').text(totalMeetups);
    })

}
