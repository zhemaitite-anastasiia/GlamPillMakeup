$(document).mousemove(function(event) {
    $('#light').offset({
        top: event.pageY - 50,
        left: event.pageX - 50
    });
});