// // console API print
// //console.log("this is log");
// //console.warn("this is warning");
// //console.error("this is error");

// //js variable and datatypes
// var num1 = 34;
// var num2 = 55.2;
// var str1 = "This is a string ";

// //objects (dictionary)

// var marks = {
//     rakesh: 10,
//     pulkit: 2,
//     nik: 98,
// }
// //boolian

// var a = true;

// //null

// var b;

// //array


// ///function
// function avg(a, b) {
//     return (a + b) / 2;
// }
// //loops

// // for (var i = o; i < arr.length; i++) {
// //     console.log(arr[i])


// // }

// // arr.forEach(function (element) {


// //     console.log(element)

// // })


// // const a = 0;

// //let can create temp variable with scope f fuction it is used 
// var arr = [1, 2, 3, "pulkit", 4, 5]
// let j = 0;
// // while (j<arr.length)
// // {
// //     console.log(arr[j])
// //     j++;
// // }

// //arr.shift will remove 1st element frm array
// //arr.unshift("rakesh") will add 1st element frm array
// //arr.pop will remove last element frm array
// //arr.tostring() convert array to strng
// //arr.sort() will first convert to string then sort the whole array
// str1 = "pulkit is a nice person"
// //string methods
// //str1.length gives lenth of string 
// //str1[0] gives 1st indes value of string
// //str1.indexof (nice ) gives 1st indes of nice in string
// //str1.lastindex(nice ) gives last indes of nice in string
// //str1.slice(1,4 ) gives only value from 1st to 4th value of string 
// //str1.replace("pulkit","rakesh" ) replace pulkit to rakesh from our string (just  1st reference of pulkit ) 

// let mydate = new Date();

// //mydate.gettime() return time
// //mydate.getfullyear() return year
// //mydate.getday() return day number from week 
// //mydate.getmin gves min
// //mydate.gethour gves hour

// ///DOM whole html is dom 

// document.getElementById("Click").style.border = "Red 2px solid"
// eleclass = document.getElementsByClassName("container")
// eleclass[1].style.background = "purple"
// eleclass[0].classList.add("bg-primary")

// eleclass[0].classList.add("text_me")



// console.log(eleclass)




// // do{

// //     console.log(arr[2])
// // j++
// // }while (j<arr.length)




// //events in javascript
// function Clicked() {
//     console.log("Button got clicked")
// }

// window.onload = function () {
//     console.log("window loaded")
// }

// prev_html = document.querySelectorAll('.container')[1].innerHTML
// FirstContainer.addEventListener('click',function(){
// document.querySelectorAll('.container')[1].innerHTML="<b>we make you bold</b>"
// console.log("first container got clicked ")


// })



// // FirstContainer.addEventListener('mouseover',function(){

// //     console.log("mouse hover inside container 1 ")
    
    
// //     })




// //     FirstContainer.addEventListener('mouseout',function(){

// //         console.log("mouse out container 1 ")
        
        
// //         })


//         FirstContainer.addEventListener('mouseup',function(){

//             console.log("mouseuped when click on container  ")
//             //document.querySelectorAll('.container')[1].innerHTML=prev_html
            
//             })
    

//  FirstContainer.addEventListener('mousedown',function(){

//                 console.log("mousedown when click on container  ")
//                 document.querySelectorAll('.container')[1].innerHTML=prev_html
            
                
//                 })
        
    

// //set timeout and intervals 

// function log(){ console.log("log kro")}

// //setTimeout(log,2000)///add timeout after sometime

// a=setInterval(log,2000)//run program after specefied secs in our case 2 

// //clear interval/timeout will clear any setintervalor setimeout command

//local storage saves data in user pc storage


///map  array
brr =[45,78,90]

let g= brr.map((value,index,array)=>
{

    console.log(value,index,array)

  return  value + 1

})
console.log(g)




































//console.log(avg(2, 3))


