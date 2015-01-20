$(document).ready(function () {
    // seq: シーケンス番号
    $.each(["new_version", "old_version"], function () {
        $("input[name='" + this + "']").each(function (idx, elem) {
            if (idx == 0) {
                $(elem).attr('checked', 'checked');
            }
            $(elem).attr('seq', idx);
        });
    });
    $("input[name='new_version']").change(function () {
        var seq = parseInt($(this).attr('seq'));
        $("input[name='old_version']").eq(seq).attr('checked', 'checked');
    });
});