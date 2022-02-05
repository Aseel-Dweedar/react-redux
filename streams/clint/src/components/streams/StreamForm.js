import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"

class StreamForm extends Component {

    // render error message handler, just if field not touched and empty (params from mete - Field component)
    renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className='ui error message'>
                    <div className='header' >{error}</div>
                </div>
            );
        }
    }

    // Field setup - should return a JSX component to render as Field from "redux-form"
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    };

    // formValues from "redux-form"
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            // should pass any function to "handleSubmit"
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name="title" component={this.renderInput} label="Enter the Title" />
                <Field name="description" component={this.renderInput} label="Enter the Description" />
                <button className='ui button primary' >Submit</button>
            </form>
        );
    }
}

// simple validation form create stream form "empty case"
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }
    if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}

/* ---
 to fix the view for export, create "formWrapped" const 
so no need for this complected export statement
export default connect(null, { createStream }) (reduxForm( { form: "StreamForm", validate } ) (StreamForm))
-- */

export default reduxForm(
    { form: "streamForm", validate }
)(StreamForm);