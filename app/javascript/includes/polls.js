const pollUpdate = (() => {
  var submitPoll, updateChart;

  submitPoll = function(data) {
    $('#poll-table tbody').append("<tr>\n    <td>" + data.name + "</td>\n    <td>" + data.laptop + "</td>\n    <td><a href=\"/polls/" + data.id + "\">Show</a></td>\n    <td><a href=\"/polls/" + data.id + "/edit\">Edit</a></td>\n    <td><a data-confirm=\"Are you sure?\" rel=\"nofollow\" data-method=\"delete\" href=\"/polls/" + data.id + "\">Delete</a></td>\n</tr>");
  };

  $(function() {});

  updateChart = function(data) {
    var chart;
    chart = Chartkick.charts['polls'].getChartObject();
    if (data.laptop === 'yes') {
      chart.data.datasets[0].data[0]++;
      return chart.update();
    } else {
      chart.data.datasets[0].data[1]++;
      return chart.update();
    }
  };

  $(function() {
    var channel, pusher;
    $('#add_poll').on('ajax:success', function(data) {
      $('#add_poll')[0].reset();
    });
    pusher = new Pusher('<%= ENV["PUSHER_KEY"] %>', {
      cluster: '<%= ENV["PUSHER_CLUSTER"] %>',
      encrypted: true
    });
    channel = pusher.subscribe('poll');
    channel.bind('new', function(data) {
      submitPoll(data);
      updateChart(data);
    });
  });

});

export { pollUpdate };
