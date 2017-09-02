import React from 'react';

class CoffeeList extends React.Component {
    render() {
        return (
            <div className="row Information-block">
                {this.props.data.map(function (item) {
                    return <div className="col-xs-3 Coffee-block" key={item.id}>
                        <div className="Image-block">
                            <img className="Coffee-image" src={item.image} alt={item.name} />
                            <span className="Coffee-price">{item.price} Eur</span>
                        </div>
                        <div className="Coffee-title">{item.title}</div>
                    </div>
                })
                }
            </div>
        );
    }
}

export default CoffeeList;