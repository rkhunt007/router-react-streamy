import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
class StreamShow extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {

        if (!this.props.stream) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <div>
                    <h1>{this.props.stream.title}</h1>
                    <h1>{this.props.stream.description}</h1>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.stream[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
