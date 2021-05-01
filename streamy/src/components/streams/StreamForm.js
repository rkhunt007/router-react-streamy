import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    {meta.error}
                </div>
            );
        }
    }

    renderInput = formProps => {
        const { meta, input, label } = formProps;
        const className = `field ${meta.touched && meta.error ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {/* above line is kind-of-equivalent to below 
                    <input value={input.value} onChange={input.onChange} />;
                */}
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.onSubmit(values);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Label"></Field>
                <Field name="description" component={this.renderInput} label="Enter Description"></Field>
                <button type="submit" className="ui button primary">Submit</button>
            </form>
        )
    }
}

// form validation
const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Enter Label'; // the key should match with the name of field
    }
    if (!formValues.description) {
        errors.description = 'Enter Description';
    }
    return errors;
}

// calling reduxForm will pass the required props to the component
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamForm);

export default connect()(formWrapped);
