Template.BootstrapProgressbar.rendered = function() {
  var id              = this.data.id;
  var dataFunction    = this.data.data;
  var optionsFunction = this.data.options;
  var percentFunction = this.data.percent;
  this.autorun(function(){
    var data = dataFunction();
    var options = optionsFunction(data);
    var percent = percentFunction(data);
    $('#' + id + ' > .progress-bar').attr('data-transitiongoal', percent).progressbar(options);
  });
};
