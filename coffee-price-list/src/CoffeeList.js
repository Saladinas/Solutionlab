import React from 'react';

class CoffeeList extends React.Component {
    render() {
        return (<div>
            {this.props.data.map(function (item) {
                return <div className="col-md-3" key={item.id}>{item.name}</div>
            })
            }
        </div>);
    }
}

export default CoffeeList;