$(document).ready(function () {
    var $new_versions = $("input[name='new_version']");
    var $old_versions = $("input[name='old_version']");
    $new_versions.first().attr('checked', 'checked');
    $old_versions.first().attr('checked', 'checked');
    $new_versions.each(function (index) {
        $(this).data('pair', $old_versions.eq(index));
    });
    $new_versions.change(function () {
        $(this).data('pair').attr('checked', 'checked');
    });
});