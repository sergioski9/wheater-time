import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activo: false
    }
  }


  onClickHandler = () => {
    this.setState({ activo: true })
  }

  componentDidMount() {
    console.log('se ha montado')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('se ha actualizado')
    console.log('state anterior', prevState.activo)
    console.log('state actual', this.state.activo)
  }

  componentWillUnmount() {
    console.log('se ha des-montado')
  }

  estaActivo = () => {
    return this.state.activo ? 'Activo' : 'No activo'
  }

  render() {

    return (
      <div>
        <button onClick={this.onClickHandler}>
          Activar
        </button>
        <h1>
          ErrorBoundary {this.props.saludo}
          {
            this.estaActivo()
          }
        </h1>
      </div>
    )
  }
}

export default ErrorBoundary
