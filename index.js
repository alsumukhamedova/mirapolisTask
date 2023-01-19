$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span');
    $('.tree li.parent_li > span').on('click', function (e) {
        let element = $(this).parent('li.parent_li').find(' > ul > li');
        if (element.is(":visible")) {
            element.hide('fast');
            $(this).find(' > i').addClass('fa-plus-square').removeClass('fa-minus-square');
        } else {
            element.show('fast');
            $(this).find(' > i').addClass('fa-minus-square').removeClass('fa-plus-square');
        }
        e.stopPropagation();
    });
});
