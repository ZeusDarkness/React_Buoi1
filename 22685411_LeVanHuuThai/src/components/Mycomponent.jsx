import React from "react";
import Childcomponent from './Childcomponent.jsx'
class Mycomponent extends React.Component {
    state = {
        listUser: [
            {id: 1, Name: "Dung", Age: 49},
            {id: 2, Name: "Hoang", Age: 34},
            {id: 3, Name: "Chien", Age: 32},
        ]
    }
    render() {
        return (
            <Childcomponent myProp = {parent} sum = {this.sum} />
        )
    }
}
export default Mycomponent;
