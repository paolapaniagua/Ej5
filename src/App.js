import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import CardSection from './containers/CardSection';
import StorageService from './utils/localStorageService';

const _instanceStorage = new StorageService(); //Instancia del storageService.

class App extends Component{
  constructor(){
    super();

    this.state = {
      title: "",
      img: "",
      data: [],
    }

    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    // En este ciclo de vida es el indicado para saber si tengo o no datos en el localStorage.
    // Traer datos, condicionar, si tengo actualizar el estado.

    if (_instanceStorage.getItem('datosMeme')) {
      
      const datosMeme= _instanceStorage.getItem('datosMeme');

      this.setState({[this.data]:datosMeme});
    }
    else{
      console.log("No hay datos");
    }
    
  }

  handleOnChangeInput(event){
    this.setState({
      [event.target.name]: event.target.value      
    })
  }

  handleOnClick(){
    const {data, title,img} = this.state;
    
    const addData  = [...data, {
      title,
      img
    }] ;

    this.setState({
      data: addData
    })  
    //Aquí se debería setear el localStorage.
    let listaMemes = [];

    listaMemes.push(`${title} - ${img}`);

    _instanceStorage.setItem('datosMeme',listaMemes);
  }

  render(){
    return(
      <div className="wrapper">
        <div className="container-header">
          <Header title="MemeApp"/>
          <nav className="nav-app">
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese un title" name="title" value={this.state.title}/>
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese una url" name="img" value={this.state.img}/>
            <button onClick={this.handleOnClick}> Agregar </button>
          </nav>
        </div>

        <CardSection data={ this.state.data }/>
      </div>
    )
  }
}

export default App;
