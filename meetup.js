console.log('in javascript');
let meetupCounter = 3;

$(document).ready(onReady);
function onReady() {
    $('#addButton').on('click', handleAddGroupClick)
}

function handleAddGroupClick() {
    console.log('new group is being added');
    console.log($('#newGroupId').val());
    console.log($('#newMeetupDateId').val());
}


/*function onReady() {
    console.log('I guess Im ready now');
    $('#addButton').on('click', function () {
        console.log('I was clicked');
        let totalMeetups = $('#meetupCounter').text();
        console.log(totalMeetups);
        totalMeetups++;
        $('#meetupCounter').text(totalMeetups);*/