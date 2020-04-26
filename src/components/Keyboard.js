import React from 'react';
import {Input, Button} from 'reactstrap';
import {Icon, HandleChange} from './Utility';
import {withRouter} from 'react-router-dom';
import Sms1 from './Sms1';


class Keyboard extends React.Component {
 constructor(props) {
   super(props)
     this.state={
       inputNum: '',
       show: false,
   }
 }


  



  sms = (props) => {
    if(this.state.inputNum !== '' && this.state.inputNum.length === 11){
    // this.props.history.push('/Sms1');
    this.setState({
      show:true
    })}
    else {
      alert('please enter 11 character')
      this.setState({
        inputNum:''
      })
    }   
}

    render() {
        return (
            <React.Fragment>

              {!this.state.show?
             
            <div className="main">
            <header className="title"> 
            <div><h > ورود به آیدال</h><Icon icon={'shield'} className="icon1"/></div>
          </header>
          
          <div className="enternum2">
                    <div style={{marginBottom: '20px', color:"gray", textAlign:"center"}}>شماره همراه خود را وارد کنید</div>
                     <Input maxLength="11" type="text" name='inputNum'  value={this.state.inputNum} onChange={(e) => HandleChange.call(this, e)}><Icon icon={'tel'}/></Input>
                     <div style={{marginTop: "15px"}}><Button onClick={this.sms} color="primary" block >دریافت کد فعال سازی</Button></div>
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
          </div>

             
              : <Sms1 inputNum={this.state.inputNum}/>}
              </React.Fragment>

        )
    }
}

export default withRouter(Keyboard);