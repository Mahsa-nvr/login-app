import React from 'react';
import {Icon} from './Utility';
import {Button} from 'reactstrap';


class Login extends React.Component {


    create = (props) => {
        this.props.history.push('/create');
    }
    render() {
        return (
            <React.Fragment>
            <div className="main">
            
                 <header className="title"> 
                    <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>                    
                     </header>


                     <div className="login"> 
                    
                      <div className="login2">
                        <div className=" img-box">  
                           </div>
                        <div className=" text1">جهت ورود به  <span style={{color:'blue'}}> نرم افزار همدم</span>  اکانت آیدال خود را انتخاب کنید</div> 
                        <div className=" account1">
                            <div className="user1"><Icon icon={'user fa-lg'}  className="iuser1"/></div>
                            <div className="nameuser">محمد قاسمی <span style={{color: 'gray', fontSize:"12px"}}>09125547852</span></div>
            
                         </div> 
                         <div className="account2">
                            <div className="user1"><Icon icon={'user fa-lg'}  className="iuser1"/></div>
                            <div className="nameuser">محمد قاسمی نژاد <span style={{color: 'gray', fontSize:"12px"}}>0919778805</span></div>
            
                         </div>    
                         <div className="account3">
                            <div className="user2" ><Button onClick={this.create} color="primary">+</Button></div>
                            <div className="nameuser2"> افزودن اکانت جدید</div>           
                         </div>       
                     </div>

                     <div className="text2">
                            برای دسترسی و ورود آسان، آیدال نام، شماره تماس شما ،اولویت زبانی و تصویر نمایه شما را با نرم افزار همدم به اشتراک می گذارد تا شما ور.دی اسان را تجربه کنید قبل از ورود به برنامه می توانید قوانین <span style={{color:'blue'}}>حریم خصوصی</span> و<span style={{color:'blue'}}>شرایط استفاده</span> از آیدال را مرور کنید
                     </div>
                     </div>

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

export default Login