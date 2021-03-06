import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        lexicon: PropTypes.object

    }

    render() {
        console.log('context', this.context)
        return (
            <div>
                <h2>{this.context.lexicon.user}: {this.context.user}</h2>
                <h3>{this.context.lexicon.menu}:</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu
