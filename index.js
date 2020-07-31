setInterval(function() {
    
    var today = new Date()

    var hours = today.getHours()
    var minutes = today.getMinutes()

    var seconds = today.getSeconds()
    // if (seconds < 10) {
    //     seconds = "0" + seconds
    // }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
    var display = document.getElementById("time")
    display.innerHTML = hours + ":" + minutes + ":" + seconds 

    var new_date = today.toString()
    var dat_format = new_date.slice(0, 15)
    document.getElementById("date").innerHTML = dat_format 
}, 1000)


var July = [{
    "Subah" : "05:00",
    "Duhr" : "12:00",
    "Asr" : "03:00",
    "Magrib" : "06:00",
    "Isha" : "07:00",
    "Id" : "0"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "1"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "2"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "3"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "4"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "5"
},
{
    "Subah" : "04:35",
    "Duhr" : "12:16",
    "Asr" : "03:43",
    "Magrib" : "06:31",
    "Isha" : "07:47",
    "Id" : "6"
},
{
    "Subah" : "04:37",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "7"
},
{
    "Subah" : "04:37",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "8"
},
{
    "Subah" : "04:37",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "9"
},
{
    "Subah" : "04:37",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "10"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "11"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "12"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "13"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "14"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "15"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "16"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "17"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "18"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "19"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "20"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "21"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "22"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "23"
},
{
    "Subah" : "04:39",
    "Duhr" : "12:17",
    "Asr" : "03:44",
    "Magrib" : "06:32",
    "Isha" : "07:48",
    "Id" : "24"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "25"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "26"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "27"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "28"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "29"
},
{
    "Subah" : "04:41",
    "Duhr" : "12:18",
    "Asr" : "03:43",
    "Magrib" : "06:32",
    "Isha" : "07:47",
    "Id" : "30"
},
{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "31"
},
];

var August = [{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "0"
},
{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "1"
},
{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "2"
},
{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "3"
},
{
    "Subah" : "04:43",
    "Duhr" : "12:18",
    "Asr" : "03:40",
    "Magrib" : "06:31",
    "Isha" : "07:44",
    "Id" : "4"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "5"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "6"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "7"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "8"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "9"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:17",
    "Asr" : "03:35",
    "Magrib" : "06:27",
    "Isha" : "07:40",
    "Id" : "10"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:18",
    "Asr" : "03:38",
    "Magrib" : "06:29",
    "Isha" : "07:43",
    "Id" : "11"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:17",
    "Asr" : "03:35",
    "Magrib" : "06:27",
    "Isha" : "07:40",
    "Id" : "12"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:17",
    "Asr" : "03:35",
    "Magrib" : "06:27",
    "Isha" : "07:40",
    "Id" : "13"
},
{
    "Subah" : "04:45",
    "Duhr" : "12:17",
    "Asr" : "03:35",
    "Magrib" : "06:27",
    "Isha" : "07:40",
    "Id" : "14"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:16",
    "Asr" : "03:31",
    "Magrib" : "06:26",
    "Isha" : "07:38",
    "Id" : "15"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:16",
    "Asr" : "03:31",
    "Magrib" : "06:26",
    "Isha" : "07:38",
    "Id" : "16"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:16",
    "Asr" : "03:31",
    "Magrib" : "06:26",
    "Isha" : "07:38",
    "Id" : "17"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:16",
    "Asr" : "03:31",
    "Magrib" : "06:26",
    "Isha" : "07:38",
    "Id" : "18"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:16",
    "Asr" : "03:31",
    "Magrib" : "06:26",
    "Isha" : "07:38",
    "Id" : "19"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:15",
    "Asr" : "03:28",
    "Magrib" : "06:24",
    "Isha" : "07:36",
    "Id" : "20"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:15",
    "Asr" : "03:28",
    "Magrib" : "06:24",
    "Isha" : "07:36",
    "Id" : "21"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:15",
    "Asr" : "03:28",
    "Magrib" : "06:24",
    "Isha" : "07:36",
    "Id" : "22"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:15",
    "Asr" : "03:28",
    "Magrib" : "06:24",
    "Isha" : "07:36",
    "Id" : "23"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:14",
    "Asr" : "03:25",
    "Magrib" : "06:22",
    "Isha" : "07:34",
    "Id" : "24"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:14",
    "Asr" : "03:25",
    "Magrib" : "06:22",
    "Isha" : "07:34",
    "Id" : "25"
},
{
    "Subah" : "04:46",
    "Duhr" : "12:14",
    "Asr" : "03:25",
    "Magrib" : "06:22",
    "Isha" : "07:34",
    "Id" : "26"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:22",
    "Magrib" : "06:21",
    "Isha" : "07:32",
    "Id" : "27"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:22",
    "Magrib" : "06:21",
    "Isha" : "07:32",
    "Id" : "27"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:22",
    "Magrib" : "06:21",
    "Isha" : "07:32",
    "Id" : "28"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:22",
    "Magrib" : "06:21",
    "Isha" : "07:32",
    "Id" : "29"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:19",
    "Magrib" : "06:19",
    "Isha" : "07:30",
    "Id" : "30"
},
{
    "Subah" : "04:47",
    "Duhr" : "12:13",
    "Asr" : "03:19",
    "Magrib" : "06:19",
    "Isha" : "07:30",
    "Id" : "31"
},];


    // var date = new Date()
    // var n = date.getDate()

    // var hrs = (24 - date.getHours()) * 3600000
    // var mnts = (60 - date.getMinutes()) * 60000
    // var scnds = (60 - date.getSeconds()) * 1000

    // count = ''
    // setInterval(() => {
    //     count += 1
    //     alert(count + date)
    // }, 86400000 - (hrs + mnts + scnds));


setInterval(() =>{


    var date = new Date()
    var n = date.getDate()
    var compare
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    if (hours > 12) {
        compare = "0" + hours - 12 + ":" + minutes
    }else{
        compare = hours + "0:" + minutes
    }
    
    var count = 0
    var i;
    for (i = 0; i <= 31; i++) {

    if(i === n + 1){
        break;
    }
      count = i;
    }
    
    if(July[count].Id == n){
        document.getElementById("myTable").rows[1].cells[0].innerHTML = July[count].Subah
        document.getElementById("myTable").rows[1].cells[1].innerHTML = July[count].Duhr
        document.getElementById("myTable").rows[1].cells[2].innerHTML = July[count].Asr
        document.getElementById("myTable").rows[1].cells[3].innerHTML = July[count].Magrib
        document.getElementById("myTable").rows[1].cells[4].innerHTML = July[count].Isha
    }

    // //subah
    // if (compare > July[count].Isha && compare < July[count].Subah) {
    //     document.getElementById("myTable").rows[1].cells[0].style.background = "red"
    // }

    //luhar
    // if (compare > July[count].Subah && compare < July[count].Duhr) {
    //     document.getElementById("myTable").rows[1].cells[1].style.background = "red"
    // }

    // //asr
    
    // if (compare > July[count].Duhr && compare < July[count].Asr) {
    //     document.getElementById("myTable").rows[1].cells[2].style.background = "red"
    // }

    // //magrib
    // if (compare > July[count].Asr && compare < July[count].Magrib) {
    //     document.getElementById("myTable").rows[1].cells[3].style.background = "red"
    // }

    // //isha
    // if (compare > July[count].Magrib && compare < July[count].Isha) {
    //     document.getElementById("myTable").rows[1].cells[4].style.background = "red"
    // }

}, 2000)

document.getElementById("myTable").rows[0].style.background = "orange"
document.getElementById("myTable").rows[1].style.background = "red"
document.getElementById("myTable").rows[0].style.color = "green"
document.getElementById("myTable").rows[1].style.color = "white"
