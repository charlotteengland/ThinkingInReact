import React, {Component} from 'react';

class Features extends Component {

  render() {
    const selectedClass = this.props.item.name === this.props.currentKey ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;

    return (
             <li key={this.props.index} className="feature__item">
                <div className={featureClass}
        
                  onClick={e => this.props.updateFeature(this.props.key, this.props.item)}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.item.cost) })
                </div>
              </li>


    )
    



    
  }
}

export default Features