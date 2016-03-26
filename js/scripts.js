//business logic
function Ticket(movie, time, age) {
  this.movieTitle = movie;
  this.movieTime = time;
  this.age = age;
}

Ticket.prototype.movieTicket = function() {
  return this.movieTitle + " at " + this.movieTime + " Ticket type: " + this.age;
}

function resestFields() {
  $("input#new-movie-name").val("");
  $("input#new-movie-time").val("");
  $("input#new-age-selection").val("");
}

// user interface logic
$(document).ready(function() {

  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
  });
});
