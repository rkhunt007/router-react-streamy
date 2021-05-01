import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions'
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onSubmit = (values) => {
        this.props.createStream(values);
    }

    render() {
        return (
            <StreamForm onSubmit={this.onSubmit}></StreamForm>
        )
    }
}

export default connect(null, { createStream })(StreamCreate);
