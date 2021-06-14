const pollUpdate = () => {
    var submitPoll;
  
    submitPoll = function(data) {
      $('#poll-table tbody').append("<tr>\n    <td>" + data.name + "</td>\n    <td>" + data.laptop + "</td>\n    <td><a href=\"/polls/" + data.id + "\">Show</a></td>\n    <td><a href=\"/polls/" + data.id + "/edit\">Edit</a></td>\n    <td><a data-confirm=\"Are you sure?\" rel=\"nofollow\" data-method=\"delete\" href=\"/polls/" + data.id + "\">Destroy</a></td>\n</tr>");
    };
  
    $(function() {
      $('#add_poll').on('ajax:success', function(data) {
        $('#add_poll')[0].reset();
        submitPoll(data.detail[0]);
      });
    });
  
  }

  export { pollUpdate };
