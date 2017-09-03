import React from 'react';
import FormErrors from './FormErrors';

class CoffeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: undefined,
            title: '',
            price: '',
            image: undefined,
            formErrors: { title: '', price: '', image: '' },
            titleValid: false,
            priceValid: false,
            imageValid: false,
            formValid: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addCoffee = this.addCoffee.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let priceValid = this.state.priceValid;
        let imageValid = this.state.imageValid;

        switch (fieldName) {
            case 'title':
                titleValid = value.length >= 6;
                fieldValidationErrors.title = titleValid ? '' : ' is too short. At least 6 symbols expected.';
                break;
            case 'price':
                priceValid = value.length > 0;
                fieldValidationErrors.price = priceValid ? '' : 'field is empty.';
                break;
            case 'image':
                imageValid = value.length > 0;
                fieldValidationErrors.image = imageValid ? '' : 'field is empty.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            titleValid: titleValid,
            priceValid: priceValid,
            imageValid: imageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.titleValid && this.state.priceValid && this.state.imageValid });
    }

    addCoffee() {
        this.setState({
            id: Math.floor(Math.random() * (100000 - 1)) + 1
        });
        this.props.addCoffee(this.state);
    }

    errorClass(error) {
        console.log(error.length);
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div className="row Information-block">
                <div className="col-md-4 col-centered Coffee-form">
                    <h2 className="text-center">Add new coffee!</h2>
                    <form>
                        <div className={`form-group row
                 ${this.errorClass(this.state.formErrors.title)}`}>
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                            </div>
                        </div>
                        <div className={`form-group row
                 ${this.errorClass(this.state.formErrors.price)}`}>
                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" value={this.state.price} onChange={this.handleInputChange} name="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className={`form-group row
                 ${this.errorClass(this.state.formErrors.image)}`}>
                            <label htmlFor="image" className="col-sm-2 col-form-label">Image address</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={this.state.image || ''} onChange={this.handleInputChange} name="image" placeholder="Image address" />
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <button type="button" disabled={!this.state.formValid} onClick={this.addCoffee} className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default CoffeeForm;