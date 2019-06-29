import React, {Component} from 'react';

class Summary extends Component {
    render() {
      return (
        <div className="summary__option" key={this.props.idKey}>
            <div className="summary__option__label">{this.props.idKey}  </div>
            <div className="summary__option__value">{this.props.selected[this.props.idKey].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                 .format(this.props.selected[this.props.idKey].cost) }
            </div>
        </div>
      )
    }

}

export default Summary;