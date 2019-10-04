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
    // onReady.push (($('#newGroupId').val());)
    $("#tableInformation").append($('<tr>'))
        .append($('<td>'));

}




    