import React from 'react';


export function HandleChange(e) {
    const {name, value} = e.target;
    this.setState({
        [name]: value
    },() => {
       let number = value
       let IndNum = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g
       if(IndNum.test(number)) {
           return;
       }
       else {
           alert('please enter correct number')
           this.setState({
               [name]: ''
           })
       }
    })
}




export const Icon = (props) => {
    const {icon, className, ...other} = props;
    return (
        <i {...other} className={`fa fa-${icon} ${className}`}/>
    )
}