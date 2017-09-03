import React from 'react';
import './CoffeeList.css';

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
                                <img className="Coffee-image" src={item.image} alt={item.name} onError={(event) => event.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Coffee_cup_icon.svg/250px-Coffee_cup_icon.svg.png")} />
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