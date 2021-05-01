import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions'
import StreamForm from './StreamForm';

class StreamDeleteTest extends React.Component {

    onSubmit = (values) => {
        this.props.createStream(values);
    }

    render() {
        return (
            <div>StreamDeleteTest</div>
        )
    }
}

export default connect(null, { createStream })(StreamDeleteTest);
