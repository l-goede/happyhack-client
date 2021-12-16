import React, {useState, useEffect} from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LottieControl from "./LottieControl";
import axios from "axios";

function Home() {

const [someJson, setJson] = useState(null)

useEffect(() => {
  const getData = async () => {
    let res = await axios.get("https://assets1.lottiefiles.com/packages/lf20_pcxwaqk2.json")
    setJson(res.data)
  }
  getData()
}, [])

if (!someJson) {
    return <h1>Loading</h1>;
  }

  return (
<div> 


<div className="area-1" >
<span> <br/>  </span>
<span className="square-text-area-1">

<h1> Get help, get paid and share your skills </h1> 
<p> Need an extra pair of hands to get you javaScript skills a bit more polished? Or maybe you are a front end who needs to develop your back end side of your website? We've got you covered. </p>
<div className="lottieGreenWrapper"> 
<div classname="lottieGreen"><LottieControl animation={someJson} width={500} height={500}/> </div>
</div>


</span>
</div>

<div className="area-2">
<span> <br/>  </span>



<div className="area-2" >

<div className="square-text">
<h1> 🤝 </h1>
<h1> Offer help </h1> 
<p> Happy hack is a place for sharing skills.  </p>
</div>

<div className="square-text">
<h1> 💸  </h1>
<h1> Get paid </h1> 
<p> Here you will get rewarded by your services. </p>
</div>

<div className="square-text">
<h1> 💃 </h1>
<h1> Fun code </h1> 
<p> Find developers willing to give you a hand. </p>
</div>

</div>
</div>




<div className="area-3-div">
<div className="area-3-left">
<span> <br/>  </span>
<span className="square-text">



{/* <img id="codingirl" src= "/codingirl.png"  alt="Girl in a jacket" /> */}

</span>
</div>

<div className="area-4-right" >
<span> <br/>  </span>
<span className="square-text">
<h1> Chill with us</h1> 
</span>
</div>

</div>


<div className="area-5" >
<span> <br/>  </span>
<span className="square-text">
<h1> We are happyhack! </h1> 
<p> A happy coding society. Created by Web Developement students. </p>
</span>
</div>


 {/* <div className="area-3-div">
<div className="area-5-left">
<span> <br/>  </span>
<span className="square-text">
<img id="codingirl" src= "/codingirl.png"  alt="Girl in a jacket" />
</span>
</div>

<div className="area-6-right" >
<span><br/></span>
<span className="square-text">
<h1> Chill with us</h1> 
</span>
</div> 

</div> */}



</div>





    


    
  );
}

export default Home;
