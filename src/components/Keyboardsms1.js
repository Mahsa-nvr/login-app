import React from 'react';
import {Input, Button} from 'reactstrap';
import {Icon, HandleChange} from './Utility';
import {withRouter} from 'react-router-dom';




class Keyboardsms1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false,
      showsms2: false,
      inputSms: '',
      incorrect: false,
      correct: false,
      fixed: true,
    }
  }

  changeDisplay = (props) => {
    setTimeout(() => {
     this.props.history.push('/Sms2')
    this.setState({
      loading:false,
      showsms2: true
    })
    }, 5000)
  }

  sms1 = () => {
    if(this.state.inputSms !== '' && this.state.inputSms.length === 5 && this.state.inputSms !== '00000'){
      this.setState({
        correct: true,
        incorrect: false,
        fixed: false
      })
    setTimeout(() => {
      this.setState({
        loading : true
      })
    }, 3000)
    this.changeDisplay();
  }else {
    alert('please enter 5 character and do not enter 00000 character')
    this.setState({
      inputSms:''
    })
  } 
  if(this.state.inputSms === '00000')  {
    this.setState({
      incorrect: true,
      fixed: false
    })
  }
  }



    render() {
        return (
            <React.Fragment>
            
             {!this.state.loading ? 
            <div className="main">
            <header className="title"> 
            <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>
          </header>
          
               <div className="enternum2">
                 {this.state.incorrect ?
                  <div style={{marginBottom: '20px', color:"red", textAlign:"center"}}>کدفعال سازی اشتباه است</div> : 
                  ''}
                   {this.state.correct ?
                   <div style={{marginBottom: '20px', color:"green", textAlign:"center"}}>کدفعال سازی صحیح است  <Icon icon={'check'}/></div> :
                   ''}
                   
                     {this.state.fixed ? 
                     <div style={{marginBottom: '20px', color:"gray", textAlign:"center"}}>کد پیامک شده را وارد کنید</div> :
                     ''}
                     <Input type="text" maxLength="5" name='inputSms' value={this.state.inputSms} onChange={(e) => HandleChange.call(this, e)}><Icon  icon={'phone'}/></Input>
                     <div style={{marginTop: "15px"}}><Button onClick={this.sms1} color="primary" block >دریافت کد فعال سازی</Button></div>
                </div>
             

              <div className='keyboard'>
            <div className="box">

              <div className="box1">1</div>
              <div className="box1">4</div>
              <div className="box1">7</div>
              <div className="box1">fr</div>
              <div className="box1">2</div>
              <div className="box1">5</div>
              <div className="box1">8</div>
              <div className="box1">0</div>
              <div className="box1">3</div>
              <div className="box1">6</div>
              <div className="box1">9</div>
              <div className="box1">*</div>
              <div className="box1">set</div>
              <div className="box1">g</div>
              <div className="box1">f</div>
              <div className="box1">a</div>
            </div>
              
          </div>



              </div> : 
                       <div className="main">
                       <header className="title"> 
                       <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>
                     </header>
                     
                     <div className="loading"> در حال ورود به نرم افزار ... </div>
                    
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
                  </div>
                  
                  
                      }
                
            
              
              </React.Fragment>

        )
    }
}

export default withRouter(Keyboardsms1);