import React from 'react'

function Greet1()
 {



    var d = new Date().toLocaleDateString()
    var t = new Date().toLocaleTimeString()
    var chr = new Date(2021,8,8,23).getHours()

     var msg=" "
     var newStyle={}

     if(chr >12 && chr<=16){
      msg="Good Afternoon"
      newStyle.color='green'
      newStyle.fontFamily='Arial'
      newStyle.fontSize='20px'
     }

     else if(chr >17 && chr<=19){
      msg="Good Evening"
      newStyle.color='hotpink'
      newStyle.fontFamily='Arial'
      newStyle.fontSize='20px'
     }

    else if(chr >19 && chr<=24){
      msg="Good Night"
      newStyle.color='brown'
      newStyle.fontFamily='Arial'
      newStyle.fontSize='20px'
     }
     else
     {
      msg="Good Morning"
      newStyle.color='red'
      newStyle.fontFamily='Arial'
      newStyle.fontSize='20px'
      
     }


  return (

    

    <>
   

    <div style={{height:'500px', width:'500px',border:'2px solid red',margin:'auto' ,}}>
    <h2 style={{textAlign:'center'}}>Todays Date:-{d}</h2>
    <h2 style={{textAlign:'center'}}>Current Time:- {t}</h2>
        <h1 style={{fontFamily:'cursive',marginLeft:'50px',marginTop:'80px' , color:'blue'}}>
            Hello Students , <h1 style={newStyle}>{msg}</h1>
        </h1>

    </div>

    </>
    
  )
}

export default Greet1