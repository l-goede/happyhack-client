import React, {useState, useEffect} from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LottieControl from "./LottieControl";
import axios from "axios";

function Home() {

const [someJson, setJson] = useState(null)
const [someJsonTwo, setJsonTwo] = useState(null)
const [someJsonThree, setJsonThree] = useState(null)

useEffect(() => {
  const getData = async () => {
    let res = await axios.get("https://assets1.lottiefiles.com/packages/lf20_GcNGbf.json")
    setJsonThree(res.data)
  }
  getData()
}, [])

useEffect(() => {
  const getData = async () => {
    let res = await axios.get("https://assets1.lottiefiles.com/packages/lf20_pcxwaqk2.json")
    setJson(res.data)
  }
  getData()
}, [])

useEffect(() => {
  const getData = async () => {
    let res = await axios.get("https://assets8.lottiefiles.com/packages/lf20_rxe6lehm.json")
    setJsonTwo(res.data)
  }
  getData()
}, [])

if (!someJson || !someJsonTwo || !someJsonThree ) {
    return <h1>Loading</h1>;
}

return (
<div className="paddingHomepage"> 


<div className="area-1" >
<span> <br/>  </span>
<div className="area-1-wrapper" >

<div className="square-text-area-1">
<h1> Get help and get paid for your skills </h1> 
<h5> Need an extra pair of hands to get you javaScript skills a bit more polished? <br/> Or maybe you are a front end who needs to develop your back end side of your website? <br/> We've got you covered. </h5>
</div>
<div className="lottieGreenWrapper"> 
<span classname="lottieGreen"><LottieControl animation={someJson} width={400} height={400}/> </span>
</div>
</div>
</div>

<div className="area-21">
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
<h1> Have fun </h1> 
<p> Hava a stress-free coding experience.   </p>
</div>

</div>
</div>




<div className="area-3-div">
<div className="area-3-left">
<span> <br/>  </span>


<div> 
<span ><LottieControl animation={someJsonTwo} width={410} height={350}/> </span>
</div>
</div>

<div className="area-4-right" >
<span> <br/>  </span>
<span className="square-text">
<h1> Chill with us</h1> 
</span>
</div>

</div>


<div className="area-5" >
<span> <br/> </span>

<span ><LottieControl animation={someJsonThree} width={350} height={350}/> </span>
<span className="centered">
<h3> A happy coding community. Created by Web Developement students. </h3>
</span>

</div>

</div>





    


    
  );
}

export default Home;
