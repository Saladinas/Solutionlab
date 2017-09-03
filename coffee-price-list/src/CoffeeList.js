import React from 'react';

class CoffeeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            coffee: this.props.data
        })

        this.removeCoffee = this.removeCoffee.bind(this);
    }

    removeCoffee(id) {
        this.props.removeCoffee(id);
    }

    render() {
        return (
            <div className="row Information-block">
                {this.props.data.map(function (item) {
                    return <div className="col-xs-3" key={item.id}>
                        <div className="Coffee-block">
                            <div className="Image-block">
                                <img className="Coffee-image" src={item.image} alt={item.name} onError={(event) => event.target.setAttribute("src", "http://tekeye.uk/md_cms/images/placeholder-250px.png")} />
                                <span className="Coffee-price">{item.price} <span className="glyphicon glyphicon-eur" aria-hidden="true"></span></span>
                                <span className="Coffee-removing" onClick={() => this.removeCoffee(item.id)}>x</span>
                            </div>
                            <div className="Coffee-title">{item.title}</div>
                        </div>
                    </div>
                }, this)
                }
            </div>
        );
    }
}

export default CoffeeList;