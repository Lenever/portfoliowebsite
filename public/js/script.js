$(document).ready(function() {
  $("#send").submit(function(event) {
    event.preventDefault();
    if ($("#palname", "#palemail", "#subject").val() !== "") {
      const palname = $("#palname").val();
      const palemail = $("#palemail").val();
      const subject = $("#subject").val();
      const message = $("#message").val();

      let newPal = {
        palname,
        palemail,
        subject,
        message
      };

      $.ajax({
        method: "POST",
        url: "http://localhost:3000/users",
        data: newPal
      })
        .done(function() {
          alert("You will be contacted shortly");
        })
        .fail(function(Error) {
          alert("Ooops! an error " + error + " occured. Please try again");
        });
    }
  });
});
