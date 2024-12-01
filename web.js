// Start the time updates
window.onload = function() {
    var date = new Date();
    var time = date.toLocaleTimeString();
	var displayDate = date.toLocaleDateString();

    document.getElementById('current-time').innerHTML = displayDate;
};