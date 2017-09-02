import React from 'react';

class CoffeeForm extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-centered Coffee-form">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="inputName" placeholder="Title" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPrice" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="inputPrice" placeholder="Price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputImageAddress" className="col-sm-2 col-form-label">Image address</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="inputImageAddress" placeholder="Image address" />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default CoffeeForm;