Template.BootstrapProgressbar.rendered = function() {
  var id              = this.data.id;
  var dataFunction    = this.data.data;
  var optionsFunction = this.data.options;
  var percentFunction = this.data.percent;
  var transition_time = percentFunction() >= 100 ? '0.0s' : this.data.transition_time;
  this.autorun(function(){
    var data = dataFunction();
    var options = optionsFunction(data);
    var percent = percentFunction(data);
    $progress_bar = $('#' + id + ' > .progress-bar');
    $progress_bar.attr('data-transitiongoal', percent);
    $progress_bar.css('transition', 'width ' + transition_time + ' ease')
    $progress_bar.progressbar(options);
  });
};
