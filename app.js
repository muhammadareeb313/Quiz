// function quiz(){
//     var score=0
//     // var A1 =document.getElementById('A1')
//     var A2R =document.getElementById('A2')
//     // var A3 =document.getElementById('A3')
//     // var A4 =document.getElementById('A4')
//     if(A2R.checked == true)
//   {
//     score++
//     alert("Q1 Answer is right")
//   }
//   else{
//     alert("Q1 Answer is Wrong")
//   }



// var B1R =document.getElementById('B1')
// // var B2 =document.getElementById('B2')
// // var B3 =document.getElementById('B3')
// // var B4 =document.getElementById('B4')
// if(B1R.checked == true)
// {
//     score++
//     alert("Q2 Answer is right")
// }
//   else{
//     alert("Q2 Answer is Wrong")
//   }



// // var C1 =document.getElementById('C1')
// // var C2 =document.getElementById('C2')
// // var C3 =document.getElementById('C3')
// var C4R =document.getElementById('C4')
// if(C4R.checked == true ){
//     score++
//     alert("Q3 Answer is right")
// }
//   else{
//     alert("Q3 Answer is Wrong")
//    }
//   alert("Your score is:" +score++)
//   }




  function quiz(){
    var score=0;
    var A2R =document.getElementById('A2')
    if(A2R.checked == true)
    {
      score++
      alert("Q1 Answer is right")
    }
    else{
      alert("Q1 Answer is Wrong")
    }

    var B1R =document.getElementById('B1')
    if(B1R.checked == true)
    {
        score++
        alert("Q2 Answer is right")
    }
      else{
        alert("Q2 Answer is Wrong")
      }

    var C4R =document.getElementById('C4')
    if(C4R.checked == true ){
    score++
    alert("Q3 Answer is right")
    }
   else{
    alert("Q3 Answer is Wrong")
   }


    var D1R=document.getElementById('D1')
    if(D1R.checked==true){
      score++
      alert("Q4 answer is right")
    }else{
      alert("Q4 answer is wrong")
    }

    alert("Your score is:"+" " +score++)
}

// function resultQuiz(){
//   var score=0;
//    var Ans1 = document.getElementById('Q1')
//   if(Ans1.checked == true){
//       score++
//    alert("Answer 1 is right")
//   }else{
//       alert("Answer 1 is wrong")
//   }
  
//   var Ans2=document.getElementById('B4')
//   if(Ans2.checked == true){
//       score++
//    alert("Answer 2 is right")
//   }else{
//       alert("Answer 2 is wrong")
//   }
  
//   var Ans3=document.getElementById('C3')
//   if(Ans3.checked == true){
//       score++
//    alert("Answer 3 is right")
//   }else{
//       alert("Answer 3 is wrong")
//   }
  
//   alert("Your Score is"+" "+score++)
//   }

// function todo(){ 
//   var inp=document.getElementById('input')
//   var create=document.createElement('li')
//   var insert=document.createTextNode(inp.value)
//   create.appendChild(insert)
//   var get =document.getElementById('list')
//   get.appendChild(insert)
//    inp.value=" "
// }