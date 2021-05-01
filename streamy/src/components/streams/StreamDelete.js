import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {

    componentDidMount() {
        console.log('hello')
    }

    render() {
        console.log('hello')
        return (
            <div>
                StreamDelete
                <Modal />
            </div>
        );
    }
}

export default StreamDelete;
