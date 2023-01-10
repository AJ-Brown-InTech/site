import React, { Component } from 'react'
import ClickAwayListener from 'react-click-away-listener';



interface State {
    onClick : any
    open : boolean
}
  

export default class  Menu extends Component {
    state = {
        open: false
        }

        handleClickAway () {
            console.log(this.state)
            this.setState({open: !(this.state.open)})
            console.log('Hey, you can close the Popup now');
            return
        };

        MenuHolder(){
            if(this.state.open == false){
                return <div> closed</div>
            }else {
                return <div> open</div>
            }
        }

        render() {

            return(
        <div>
            <ClickAwayListener onClickAway={()=>this.handleClickAway()}>
               {this.MenuHolder()}
            </ClickAwayListener>
          
        </div>
            )
        }
};
