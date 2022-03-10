//       Code xem thời gian 
var today = new Date();

var thu = today.getDay()

if (thu > 0) {
    var thu = `Thứ ${thu + 1}`
} else {
    var thu = 'Chủ nhật'
}

var time = today.getHours() + ':' + today.getMinutes() + '/' + thu + '/' + today.getDate() + '/' + today.getMonth() 

console.log(time)

//      Code tính toán 

var fullName = 'web'
alert(fullName)