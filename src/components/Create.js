import React from 'react';
import {Icon} from './Utility';
import {Input, Button} from 'reactstrap';
import Keyboard from './Keyboard';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            show: false
        }
    }

    inputClick =() => {
       this.setState({
         show: true
       })
    }


    render() {
        return (
            <React.Fragment>
                {!this.state.show ? 
               <div className="main">
            
                   <header className="title"> 
                         <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>                  
                   </header>
                  
                   <div className="create">
                         <div className=" img-box2"> </div> 
                         <div className=" text1"> ورود دومرحله ای آسان به آیدال</div> 

                         <div className="enternum">
                             <div style={{marginBottom: '20px', color:"gray", textAlign:"center"}}>شماره همراه خود را وارد کنید</div>
                              <Input  onClick={this.inputClick}><Icon icon={'phone'}/></Input>
                         </div>
                         <div className="btn1"><Button  block >دریافت کد فعال سازی</Button></div>
                    </div>

                    <div className="text3">
                         <span>با اکانت آیدال</span>
                         <div>در نرم افزارهای ایرانی منتظر فعال سازی نباشید</div>
                    </div>
                    <div className="text4">آیدال امن هست؟ <span style={{color:"blue"}}>اینجا را بخوانید</span></div>
                  
                    
          

                    <footer className="footer">
                            <div style={{marginRight:"20px", paddingTop:"10px"}}>انتخاب زبان</div>
                           <div className="footertext">
                               <div>پشتیبانی</div>
                           </div>
                           <div className="footertext2">
                               <div>حریم خصوصی</div>
                           </div>
                     </footer>
              </div>:              
           <Keyboard/>}
            </React.Fragment>
        )
    }
}
export default Create;