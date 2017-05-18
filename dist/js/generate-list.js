var numbers = [] // our array


//Function to generate a list of 1 to 10000 in random order
function genList() {
    if (document.getElementById('thelist') == null)
        return
    var t0 = performance.now()
    var txt = '<ul>'

    //in case it takes a while...
    document.getElementById('thelist').innerHTML =
        "<span style='cursor:wait'>Please Wait...</span>"

    //build the array
    for (var i = 0; i < 10000; i++)
        numbers.push(i + 1)

    var index = 0
    //loop through them
    while(numbers.length > 0){
        //get a random index from the values left in the array
        index = (Math.random() * numbers.length) << 0
        var value = numbers[index]// grab the value
        numbers.splice(index,1)// use splice to remove it from the array
        txt += '<li>( ' + value +' )</li>'//add it to the list
    }
    txt += '</ul>'
    //show how long the function took
    txt = '<p>genList function took ' + Math.round(performance.now() - t0) + ' milliseconds</p><br />' + txt
    document.getElementById('thelist').innerHTML = txt
}

//Function to generate 1 to 10000 in random order and format into a table
function generateTable() {
    if (document.getElementById('tablelist') == null)
        return
    var t0 = performance.now()

    //in case it takes a while...
    var txt = '<table class="table table-bordered" style="font-size: 10px"><tbody><tr>'
    document.getElementById('tablelist').innerHTML =
        "<span style='cursor:wait'>Please Wait...</span>"

    //build the array
    for (var i = 0; i < 10000; i++)
        numbers.push(i + 1)

    var index = 0
    var cols = 0
    //loop through them
    while (numbers.length > 0) {
        //get a random index from the values left in the array
        index = (Math.random() * numbers.length) << 0
        var value = numbers[index]// grab the value
        numbers.splice(index, 1)// use splice to remove it from the array
        if (cols == 10) {//new row
            cols = 0
            txt += '</tr><tr>'
        }
        txt += '<td >( ' + value + ' )</td>'//add it to the table
        cols ++
    }
    txt += '</tbody></table>'
    //show how long the function took
    txt = '<p>generateTable function took ' + Math.round(performance.now() - t0) + ' milliseconds</p><br />' + txt
    document.getElementById('tablelist').innerHTML = txt

}


function drawOnCanvas() {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d')
    var t0 = performance.now()
    var width = 100, height = 100
    canvas.width = width
    canvas.height = height
    var canvasData = []
    var size = width * height

    with (ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, width, height);		
        restore()
    }
    //get a copy of our canvas data
    canvasData = ctx.createImageData(width, height)

    //build the array
    var numcopy = []
    for (var i = 0; i < 10000; i++) {
        numbers.push(i + 1)
        numcopy.push(i + 1)
    }

    var index = 0
    //loop through them
    var count = 0
    var len = numbers.length
    while (numbers.length > 0) {
        //get a random index from the values left in the array
        index = (Math.random() * numbers.length) << 0
        var value = numbers[index]// grab the value
        numbers.splice(index, 1)// use splice to remove it from the array
        //get index from the original array, as ours is having values removed
        var orgIndex = numcopy.indexOf(value)
        var percent = (  count / len * 255 )
        var factor = width / 100

        //calculate the data index for the fill
        var dataIndex = orgIndex * factor *  4 * factor
        var rowW = 0;
        var clrIdx = 0;
        for (var i = 0; i < factor * factor; i++) {
            if (i == factor) {
                rowW += (width * 4 ) - i
                clrIdx = 0
            }
            //each pixel on the canvas contains r,g,b and alpha values
            canvasData.data[dataIndex + i + clrIdx++ + rowW] = percent;//R
            canvasData.data[dataIndex + i + clrIdx++ + rowW] = percent;//G
            canvasData.data[dataIndex + i + clrIdx++ + rowW] = percent;//B
            canvasData.data[dataIndex + i + clrIdx + rowW] = 255;//Alpha
        }
        count++
    }
    ctx.putImageData(canvasData, 0, 0);
    //Print out how long the functin took to run
    document.getElementById('info').innerHTML = '<p>drawOnCanvas function took ' + Math.round(performance.now() - t0) + ' milliseconds</p><br />'

}
