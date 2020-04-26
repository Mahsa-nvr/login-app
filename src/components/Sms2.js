import React from 'react';
import {Input, Button} from 'reactstrap';
import {Icon} from './Utility';
import End from './End';


class Sms2 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            seconds: 59,
            min:1,
            show: false
        }
    }

    componentDidMount () {
        setInterval (() =>{
            if(this.state.seconds >0)
            this.setState(prevState => {
                return {
                    seconds: prevState.seconds-1
                }              
            })         
        }, 1000)
       setInterval( this.check, 1000);
       setInterval( this.changedisplay, 1000)
    }
    check = () => {
       if(this.state.seconds=== 0 && this.state.min === 1){
           this.setState(prevState => {
                prevState.seconds = 59           
               return{
                   seconds: prevState.seconds,
                   min: prevState.min - 1
               }
           })
       }
    }

    changedisplay = () => {
        if(this.state.seconds=== 0 && this.state.min === 0){
            this.setState({
                show: true
            })
        }
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
                             <div className="time">{this.state.min}:{this.state.seconds}</div>
                             <div style={{marginBottom: '20px', color:"gray", textAlign:"center"}}>کد فعال سازی برای شماره 09129988705 پیامک خواهد شد</div>
                              <Input onClick={this.inputClick}><Icon icon={'phone'}/></Input>
                        
                         </div>
                         <div className="btnsms1"><Button  block >فعال سازی</Button></div>
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
            
              </div> : <End/>}
            </React.Fragment>
        )
    }
}

export default Sms2;