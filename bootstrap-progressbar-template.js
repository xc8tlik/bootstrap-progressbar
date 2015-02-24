Template.BootstrapProgressbar.rendered = function() {

  var id      = this.data.id;
  var percent = this.data.percent;
  var options = this.data.options;
  var parentData = Template.parentData();
  $('#' + id + ' > .progress-bar').css('transition', 'width 0.2s ease');

  this.autorun(function(){
    console.log('autorun() executing with Template.parentData()' + Template.parentData());
    $('#' + id + ' > .progress-bar').progressbar();
  });

};
