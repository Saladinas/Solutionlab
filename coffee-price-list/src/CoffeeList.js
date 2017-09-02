import React from 'react';

class CoffeeList extends React.Component {
    render() {
        return (<div>
            {this.props.data.map(function (item) {
                return <div className="col-xs-3" key={item.id}>
                    <div className="Coffee-element">
                        <img className="Coffee-image" src={item.image} alt={item.name} />
                        <div className="Coffee-name">{item.name}</div>
                    </div>
                </div>
            })
            }
        </div>);
    }
}

export default CoffeeList;