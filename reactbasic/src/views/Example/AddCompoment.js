import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({ title: event.target.value });
    }

    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.props.addNewJob('Hello'); // Thêm job mới vào mảng arrjobs
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">Job :</label><br />
                    <input 
                        type="text" 
                        id="fname" 
                        value={this.state.title}
                        onChange={this.handleChangeTitleJob}
                    /><br />
                    <label htmlFor="lname">Lương:</label><br />
                    <input 
                        type="text" 
                        id="lname"
                        value={this.state.salary}
                        onChange={this.handleChangeSalary}
                    /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
        )
    }

}
export default AddComponent;