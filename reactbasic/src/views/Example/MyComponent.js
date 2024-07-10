import React from "react";
import ChlidComponent from "./ChlidComponent";
import AddComponent from "./AddCompoment";
import BankTable from "./BankTable";

class MyComponent extends React.Component {
    state = {
        arrjobs :[
            {
                id : 1,
                name: 'job1',
                salary: 1000
            },
            {
                id : 2,
                name: 'job2',
                salary: 2000
            },
            {
                id : 3,
                name: 'job3',
                salary: 3000
            }
        ]
    };

    

    addNewJob = (job) => {
        console.log(job);
        // this.setState({
        //     arrjobs: [...this.state.arrjobs, job]
        // });
    }
    render() {
        return (
            <>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Danh sách các ngân hàng</h1>
      <BankTable />
    </div>
            {/* <AddComponent 
            addNewJob = {this.addNewJob}
            />
            
                <ChlidComponent 
                
                arrjobs = {this.state.arrjobs}
                /> */}
                
            </>
        );
    }
}

export default MyComponent;
