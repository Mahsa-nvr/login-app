import React from 'react' ;
import {Input, Button} from 'reactstrap';
import {Icon} from './Utility';

class End extends React.Component {


    render() {
        return (
            <React.Fragment>
                 <div className="main">
            
            <header className="title"> 
            <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>
            </header>
           
            <div className="create">
                  <div className=" img-box2"> </div> 
                  <div className=" text1"> ورود دومرحله ای آسان به آیدال</div> 

                  <div className="enternum">
                           
                             <div style={{marginBottom: '2px', color:"gray", textAlign:"center"}}>احتمالا کد را دریافت نکرده اید</div>
                             <div style={{marginBottom: '20px', color:"gray", textAlign:"center"}}> آیا شماره {this.props.inputNum} صحیح است؟</div>
                             <Button color="primary" style={{width: '136px'}} >اصلاح شماره  <Icon icon={'edit'} /></Button>
                             <Button color="primary" style={{float:'right'}} >ارسال مجدد کد  <Icon icon={'refresh'} /></Button>
                              <Input style={{marginTop:"7px"}} onClick={this.inputClick}></Input>
                        
                         </div>
                         <div className="btnend"><Button  block >فعال سازی</Button></div>
                         </div>

             <div className="text4">
                  <span>با اکانت آیدال</span>
                  <div>در نرم افزارهای ایرانی منتظر فعال سازی نباشید</div>
             </div>
             <div className="text6">آیدال امن هست؟ <span style={{color:"blue"}}>اینجا را بخوانید</span></div>
           
             
   

             <footer className="footer">
                            <div style={{marginRight:"20px", paddingTop:"10px"}}>انتخاب زبان</div>
                           <div className="footertext">
                               <div>پشتیبانی</div>
                           </div>
                           <div className="footertext2">
                               <div>حریم خصوصی</div>
                           </div>
                     </footer>
            
              </div>
            </React.Fragment>
        )
    }
}

export default End;