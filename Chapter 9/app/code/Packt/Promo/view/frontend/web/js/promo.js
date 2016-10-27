define([
  'jquery',
  'Packt_Promo/js/jquery.jcarousel-core.min',
  'Packt_Promo/js/jquery.jcarousel-control.min',
  'Packt_Promo/js/jquery.jcarousel-pagination.min'
], function($){

    var o = {};

    o.promoBlock = function(jcarousel, prev, next, pagination){
      var jcarousel = $(jcarousel);
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $(prev)
            .jcarouselControl({
                target: '-=1'
            });

        $(next)
            .jcarouselControl({
                target: '+=1'
            });

        $(pagination)
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
  }

  return o;
});
