/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});