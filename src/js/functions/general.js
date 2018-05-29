(function ( $ ) {
	// 'use strict';

// ++ слайдер с исполнителями на главной странице

	var mql_mn = window.matchMedia('all and (max-width: 991px)');

	function slider_res() {
		$('._carousel .item').each(function(){
			var next = $(this).next();
			var item_children_length = $(this).children().length;
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			if (item_children_length < 2) {
				next.children(':first-child').clone().appendTo($(this));
			}
		});
		if (mql_mn.matches) {
			$('._carousel .item').each(function(){
				$(this).children(':first').siblings().remove();
			});
		}
	}
	slider_res();
	$( window ).resize(function() {
		slider_res();
	});

// -- слайдер с исполнителями на главной странице

// ++ модальные окна

$('a[data-toggle="modal"]').on('click', function(){
	$('#myModal').find('.modal-dialog').load($(this).data('href'));
})

// $('#myModal').modal('handleUpdate');

// -- модальные окна

// ++ дополнение к табам на странице списка исполнителей

$('._collapser').on('click', function () {
	var target = $(this).attr('href'),
		target_height = $(target).siblings('.in').outerHeight();

	$(target).parents('._tab_cont_wrap').css({'min-height': target_height});

	$('._collapser.active').removeClass('active');
	$(this).toggleClass('active');
	$(target).siblings().removeClass('in');
	setTimeout(function () {
		target_height = $(target).outerHeight();
		$(target).closest('._tab_cont_wrap').css({'min-height': target_height});
	}, 200);
});

// -- дополнение к табам на странице списка исполнителей

	$('._date').each(function () {
	    $(this).datetimepicker({
	    	format: 'DD.MM.YYYY'
	    });
	});

    $('#datetimepicker6, #datetimepicker1').datetimepicker({
	    	format: 'DD.MM.YYYY'
	    });
    $('#datetimepicker7').datetimepicker({
    	format: 'DD.MM.YYYY',
        useCurrent: false
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

// ++ input type range

	function modifyOffset() {
	    var el, newPoint, newPlace, offset, siblings, k, thumb;
	    width    = this.offsetWidth;
	    newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
	    offset   = -1;
	    if (newPoint < 0) { newPlace = 0;  }
	    else if (newPoint > 1) { newPlace = width; }
	    else { newPlace = width * newPoint + offset; offset -= newPoint;}
	    siblings = $(this).parents('.kekeke');
	    for (var i = 0; i < siblings.length; i++) {
	        sibling = siblings[i];
	        if (sibling.id == this.id) { k = true; }
	        if ((k == true) && (sibling.nodeName == "OUTPUT")) {
	        }
            outputTag = $(this).parents('.kekeke').find('output');
            thumb = $(this).parents('.kekeke').find('.range_th');
	    }
	    var pl = parseInt($(this).val()) + 10000,
	    	pl2 = parseInt($(this).val()),
	    	pl3;
	    if (pl2 < 20000) {
    		pl3 = 'Небольшой'
	    } else if (pl2 >= 20000 && pl2 <= 50000) {
    		pl3 = 'Небольшой — средний'
	    } else if (pl2 > 50000 && pl2 <= 70000) {
    		pl3 = 'Средний'
	    } else if (pl2 > 70000) {
    		pl3 = 'Большой'
	    }

	    $(outputTag).html('<strong>' + $(this).val() + ' - ' + pl + ' р.</strong>' + pl3);

	    newWidth = newPlace + parseInt($(outputTag).width());
	    newPlace2 = newPlace;

    	$(outputTag).css({'left': newPlace2+'px'});

    	

    	if (newPlace < (parseInt($(outputTag).width())/2)) {
	    	newPlace2 = 60;
	    	$(outputTag).css({'left': newPlace2+'px'});
	    } else if (newWidth > width) {
	    	$(outputTag).css({'left': 'auto', 'right': 0});
	    }



	    $(thumb).css({'left': newPlace+'px'});
	    // outputTag.style.left       = newPlace + "px";
	    // outputTag.style.marginLeft = offset + "%";
	    // outputTag.innerHTML        = this.value;
	}

	function modifyInputs() {
	    
	    var inputs = document.getElementsByTagName("input");
	    for (var i = 0; i < inputs.length; i++) {
	        if (inputs[i].getAttribute("type") == "range") {
	            inputs[i].oninput = modifyOffset;
	            inputs[i].onchange = modifyOffset;

	            if ("fireEvent" in inputs[i]) {
	                inputs[i].fireEvent("oninput, onchange");
	            } else {
	                var evt = document.createEvent("HTMLEvents");
	                evt.initEvent("change", false, true);
	                inputs[i].dispatchEvent(evt);
	            }
	        }
	    }
	}

	modifyInputs();

// -- input type range

	// popup gallery

	$('#thumbcarousel').find('.thumb').on('click', function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	// select
	$('.selectpicker').selectpicker();

	// edit button

	$('._edit-cell').on('click', function () {
		$(this).next().prop("disabled", false);
	});

	$('._input-blank').on('focusout', function () {
		$(this).prop("disabled", true);
	});

	// + drag and drop

	if ($('#drop-zone').length) {
	    var dropZoneId = "drop-zone";
	    var buttonId = "clickHere";
	    var mouseOverClass = "mouse-over";

	    var dropZone = $("#" + dropZoneId);
	    var ooleft = dropZone.offset().left;
	    var ooright = dropZone.outerWidth() + ooleft;
	    var ootop = dropZone.offset().top;
	    var oobottom = dropZone.outerHeight() + ootop;
	    var inputFile = dropZone.find("input");
	    document.getElementById(dropZoneId).addEventListener("dragover", function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        dropZone.addClass(mouseOverClass);
	        var x = e.pageX;
	        var y = e.pageY;

	        if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
	            // inputFile.offset({ top: y - 15, left: x - 100 });
	        } else {
	            // inputFile.offset({ top: -400, left: -400 });
	        }

	    }, true);

	    if (buttonId != "") {
	        var clickZone = $("#" + buttonId);

	        var oleft = clickZone.offset().left;
	        var oright = clickZone.outerWidth() + oleft;
	        var otop = clickZone.offset().top;
	        var obottom = clickZone.outerHeight() + otop;

	        $("#" + buttonId).mousemove(function (e) {
	            var x = e.pageX;
	            var y = e.pageY;
	            if (!(x < oleft || x > oright || y < otop || y > obottom)) {
	                // inputFile.offset({ top: y - 15, left: x - 160 });
	            } else {
	                // inputFile.offset({ top: -400, left: -400 });
	            }
	        });
	    }

	    document.getElementById(dropZoneId).addEventListener("drop", function (e) {
	        $("#" + dropZoneId).removeClass(mouseOverClass);
	    }, true);
	    document.getElementById(dropZoneId).addEventListener("change", function (e) {
			var file = inputFile[0].files;
			
			if (file.length > 0){
				$("#" + dropZoneId).addClass('filled');
				$('.file_name').html('');
				var i;
				var row;
				for (i = 0; i < file.length; ++i) {
				    // substr[i]
					// 
					if (i + 1 < file.length) {
						row = file[i].name + '<br>';
					} else {
						row = file[i].name;
					}
					$('.file_name').append(row);
				}
				// $('.file_name').html(file.name);
			} else {
				$("#" + dropZoneId).removeClass('filled');
				$('.file_name').html('Добавить фото');
			}
	    }, true);
	}
	// - drag and drop


}( jQuery ));