import React from 'react';

class CoffeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 5,
            title: '',
            price: '',
            image: 'http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addCoffee = this.addCoffee.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addCoffee() {
        this.setState({
            id: Math.floor(Math.random() * (100000 - 1)) + 1
        });
        this.props.addCoffee(this.state);
    }

    render() {
        return (
            <div className="row Information-block">
                <div className="col-md-4 col-centered Coffee-form">
                    <h2 className="text-center">Add new coffee!</h2>
                    <img className="Coffee-form-image" src={this.state.image} alt={this.state.title} />
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" value={this.state.price} onChange={this.handleInputChange} name="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Image address</label>
                            <div className="col-sm-10">
                                <input className="form-control" value={this.state.image} onChange={this.handleInputChange} name="image" placeholder="Image address" />
                            </div>
                        </div>
                        <button type="button" onClick={this.addCoffee} className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default CoffeeForm;