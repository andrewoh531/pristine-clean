import React, { createContext, Component } from 'react';

const EnquiryContext = createContext({
    shouldBeUsed: false
});

class MyContext extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            shouldBeUsed: false,
            setEnquiry: this.setEnquiry
        }
    }

    setEnquiry = () => {
        console.log(`toggle triggered to ${!this.state.newToggleContext}`)
        this.setState({ newToggleContext: !this.state.newToggleContext })
    }
    

    render() {
        return (
            <EnquiryContext.Provider value={{...this.state}}>
                {this.props.children}
            </EnquiryContext.Provider>
        )
    }
}

export{
    MyContext as default,
    EnquiryContext
} 

