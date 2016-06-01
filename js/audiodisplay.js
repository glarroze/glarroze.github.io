function drawBuffer( width, height, context, data ) {
	context.fillStyle = "black"
	context.fillRect(0, 0, width, height)
	
	context.fillStyle = "white"

	for (var i = 0; i < 256; i += 1) {
		context.beginPath()
		x = (width / 2) + i
		y = height / 2
		context.arc(x, y, 150 * data.length, Math.PI * 2, 0, true)
		context.fill()
		context.closePath()
	}
	
	for (var i = 256; i > 0; i -= 1) {
		context.beginPath()
		x = (width / 2) - i
		y = height / 2
		context.arc(x, y, 150 * sdata.length, Math.PI * 2, 0, true)
		context.fill()
		context.closePath()
	}
}