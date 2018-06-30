// Select color input
// Select size input

let height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(evt) {
	evt.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
})

function makeGrid(a, b) {
	$('tr').remove();
// Your code goes here!

	// Creating the Grid
	for(let row = 1; row <= a; row++) {
		$('#pixelCanvas').append('<tr id=table' + row + '></tr>');
		for(let cell = 1; cell <= b; cell++) {
			$('#table' + row).append('<td></td>');
		}
	}

	// Add color to cell
	$('td').click(function addColor() {
		color = $('#colorPicker').val();

		if($(this).attr('style')) {
			$(this).removeAttr('style');
		} else {
			$(this).attr('style', 'background-color:' + color);
		}
	})
}

