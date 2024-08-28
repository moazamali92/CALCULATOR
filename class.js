function  getper(){
    let name = prompt("enter your name") ;
     let sdttm_marks = document. getElementById("tm1").value;
      let sdtobt_marks = document. getElementById("obt1").value;
   let res = (sdtobt_marks / sdttm_marks ) *100;
 document. getElementById("change").innerHTML = (`<h1>dear ${name} you have got it ${res}% </h1>`)
 
}