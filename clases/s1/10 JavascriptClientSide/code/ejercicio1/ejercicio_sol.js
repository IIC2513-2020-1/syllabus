$(function() {
  $('[id$=-related-button]').click(function() {
    var related = this.id.split('-')[0];
    
    $('#' + related + '-related-more').siblings().hide();
    $('#' + related + '-related-more').show(150);
  });

  $('[id$=-hide-button]').click(function() {
    var related = this.id.split('-')[0];
    $('#' + related + '-related-more').hide(200);
  });
});
