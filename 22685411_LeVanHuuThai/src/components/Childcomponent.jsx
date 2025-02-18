import React from "react";
class Childcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "28",
      Address: "HCM", //giá trị mặc định
    };
  }
  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); //ngăn việc tải lại trang
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div>
          <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>My name is {this.state.Name}</p>
            <p>Address: {this.state.Address}</p>
            <input
              type="text"
              value={this.state.Name} //gán giá trị mặc định
              onChange={(event) => this.handleOnchangeInput(event)}
            />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default Childcomponent;
