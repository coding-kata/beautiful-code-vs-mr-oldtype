$(document).ready(function () {
    var $new_versions = $("input[name='new_version']");
    var $old_versions = $("input[name='old_version']");
    $new_versions.first().attr('checked', 'checked');
    $old_versions.first().attr('checked', 'checked');
    // seq: シーケンス番号
    $.each(["new_version", "old_version"], function () {
        $("input[name='" + this + "']").each(function (idx, elem) {
            $(elem).data('seq', idx);
        });
    });
    $new_versions.change(function () {
        var seq = $(this).data('seq');
        $("input[name='old_version']").eq(seq).attr('checked', 'checked');
    });
});