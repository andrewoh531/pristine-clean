import React, { createContext, Component } from 'react'

const EnquiryContext = createContext({
  shouldBeUsed: false,
})

class Context extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldBeUsed: false,
      setContext: this.setContext,
      getDisplayableText: this.getDisplayableText,
    }
  }

  setContext = state => {
    this.setState({
      shouldBeUsed: true,
      ...state,
    })
  }

  getDisplayableText = () => {
    return `${this.state.cleaningType} cleaning for ${
      this.state.bedrooms
    } and ${this.state.bathrooms}.

Suburb:
Enquiry:`
  }

  render() {
    return (
      <EnquiryContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </EnquiryContext.Provider>
    )
  }
}

export { Context as default, EnquiryContext }
