import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </>
        )
    }
}

export default Main