import "./LearnAccordion.css";
import {useNavigate} from 'react-router-dom';
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import ss5 from "../../assets/ss5.png";
import ss6 from "../../assets/ss6.png";
import ss7 from "../../assets/ss7.png";
import ss8 from "../../assets/ss8.png";
import ss9 from "../../assets/ss9.jpg";
import ss10 from "../../assets/ss10.jpg";
import ss11 from "../../assets/ss11.png";
import ss12 from "../../assets/ss12.png";
export default function LabAccordion() {
    const navigate = useNavigate();
    const navigatetolabspage = () => {
      navigate('/labs');
    };
  return (
    <>
    <div className="accordionContainer bodyText">
        <h1 className="try ButtonTxt">1. Installation & setup environment</h1>
            <br/> 
           <h3 className="steps">
            You will need to make sure that the following programs are installed on your desktop in order to solve our labs:</h3>
            <br/>
            <h4 style={{marginLeft: 40}}>1. Docker-Desktop:&nbsp; <a className="links" href="https://www.docker.com/products/docker-desktop/">https://www.docker.com/products/docker-desktop/</a></h4>
            <h4 style={{marginLeft: 40}}>2. Visual Studio Code: &nbsp; <a className="links" href="https://code.visualstudio.com/download"> https://code.visualstudio.com/download </a></h4>
            <h4 style={{marginLeft: 40}}>3. Google Chrome: &nbsp; <a className="links" href="https://www.google.com/intl/eg/chrome/"> https://www.google.com/intl/eg/chrome/</a></h4>
            <h4 style={{marginLeft: 40}}>4. Packet Tracer: &nbsp; <a className="links" href="https://skillsforall.com/resources/lab-downloads?Lang=en-US"> https://skillsforall.com/resources/lab-downloads?Lang=en-US</a></h4>
            <br/>

        <h1 className="try ButtonTxt">2. How to Access & Solve the Lab</h1>
        <br/>
        <h3 className="steps">Step 1:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > After understanding the lab content, you will go to the "Practice Time" part, where you can download your lab as shown down here:</h4>
        <img src={ss1} className="imgstyle" alt=" "></img>
        <h2> # Web Security Labs: </h2>
        <br/>
        <h3 className="steps">Step 2:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > A ".rar" folder will be installed locally on your desktop. You will need to extract it to access the lab.</h4>
        <br/>
        <h3 className="steps">Step 3:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > After extracting the ".rar" folder, you will need to start the lab from the "start_lab.bat" file as shown down here:  </h4>
        <img src={ss2} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <br/>
        <h3 className="steps">Step 4:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} >- Once you open this file, the lab will start automatically on Visual Studio Code where you can examine the code and mitigate it from attack.</h4>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > - Also, you can examine the code and navigate the offensive content on the portal and exploit the attack by accessing it from Google Chrome through "localhost:3000".</h4>
        <br/>
        <h3 className="steps">Step 5:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > After doing all the modifications on the code to make it secure, you will need to open "Test_Lab" folder, then run ".bat" file that exists there to test the modified code as shown down here:</h4>
        <img src={ss3} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <img src={ss4} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <br/>
        <h3 className="steps">Step 6:</h3>
        <br/>
        <h4 style={{marginLeft: 40, fontSize:20}} > Once you run the ".bat" file, your modified code will be tested to ensure its securness, and a flag will be generated in "output.txt" file, which will be generated in "text" folder as shown down here:</h4>
        <img src={ss3} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <img src={ss5} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <img src={ss6} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <br/>
        <h3 className="steps">Step 7:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:22}} > At the end, you need to terminate the session from the "Stop_lab.bat".</h4>
        <br/>
        <img src={ss7} className="imgstyle" style={{borderRadius:50}} alt=" "></img>
        <hr /><br/>
        <h2> # Network Security Labs: </h2>
        <br/>
        <h3 className="steps">Step 2:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > After downloading the lab successfully, you will find a ".pka" file installed locally as shown down here:</h4>
        <img src={ss8} className="imgstyle" alt=" "></img>
        <br/>
        <h3 className="steps">Step 3:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > Once You open the lab, it will automatically start on packet tracer.</h4>
        <h4 style={{marginLeft: 40,fontSize:20}} > You will need to check the "Dock" option shown down here:</h4>
        <img src={ss10} className="imgstyle" alt=" "></img>
        <h4 style={{marginLeft:40,fontSize:20}}>By applying this option you will have a split view for both the requirements of the lab and the physical configration together:</h4>
        <img src={ss9} className="imgstyle" alt=" "></img>
        <br/>
        <h3 className="steps">Step 4:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > After applying all the needed requirments correctly, you will find that you have completed the lab successfully as shown down here:</h4>
        <img src={ss11} className="imgstyle" alt=" "></img>
        <br/>
        <h3 className="steps">Step 5:</h3>
        <br/>
        <h4 style={{marginLeft: 40,fontSize:20}} > Finally, you can press the "Check Results" button to get the flag and finish the lab successfully:</h4>
        <img src={ss12} className="imgstyle" alt=" "></img>

      <button type="button" className="button" onClick={navigatetolabspage}> Everything is Good! </button>
      </div>
    </>
  );
}