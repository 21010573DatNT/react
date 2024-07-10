import React from "react";
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
    state = {
        showjob: false
    }

    handleShowHide = () => {
        this.setState({ showjob: !this.state.showjob });
    }

    render() {
        // Destructuring props
        let { arrjobs } = this.props;
        let { showjob } = this.state;
        return (
            <>
                {!showjob && <div><button onClick={this.handleShowHide}>Show</button></div>}
                {showjob &&
                    <>
                        <div className="job-list">
                            {
                                arrjobs.map((item) => (
                                    <div key={item.id}>
                                        <p>Job name: {item.name}</p>
                                        <p>Salary: {item.salary}</p>
                                    </div>
                                ))}
                        </div>
                        <div>
                            <button onClick={this.handleShowHide}>Hide</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

ChildComponent.propTypes = {
    arrjobs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            salary: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ChildComponent;
