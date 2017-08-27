import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super()
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
    this.handleNameChane = this.handleNameChane.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.pilotName = ""
  }


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChane(e) {
    this.pilotName = e.target.value
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      pilot: this.pilotName
    })

  }


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount(){
    //Fetch from Star Wars api
    // Set 'vehicles' state

    this.vehiclesData = fetch("https://swapi.co/api/vehicles/")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      console.log(responseJson.results)
      console.log(responseJson.results[0])

      let vehicleData = responseJson.results.map((vehicle, idx, vehicleArr) => {

        // vehicles are placed into a grid with 3 vehicles per row
        // this is rendering one row at a time
        // we only want to render a row for every group of 3
        // render will happen on index 0 and if index + 1 is
        // a multple of 3

        console.log(vehicle.name)
        let shouldRender = null 

        if ((((idx + 1) % 3) === 0)) {
          shouldRender = true
        } else if (idx > (vehicleArr.length - 2)) {
          shouldRender = true
        }else {
          shouldRender = false
        }


        console.log({shouldRender})
        if(shouldRender) {
          return (
            <div className="row">
              <div className="card col p-2">
                <div className="card-body">
                  Vehicle: {vehicleArr[idx].name}<br />
                  Model: {vehicleArr[idx].model}<br />
                  
                  <ul className="list-group">
                    <li className="list-group-item">Specs</li>
                    <li className="list-group-item">{vehicleArr[idx].manufacturer}</li>
                    <li className="list-group-item">{vehicleArr[idx].vehicle_class}</li>
                    <li className="list-group-item">{vehicleArr[idx].passengers}</li>
                    <li className="list-group-item">{vehicleArr[idx].crew}</li>
                    <li className="list-group-item">{vehicleArr[idx].length}</li>
                    <li className="list-group-item">{vehicleArr[idx].max_atmosphering_speed}</li>
                    <li className="list-group-item">{vehicleArr[idx].cargo_capacity}</li>
                  </ul>
                </div>
              </div>

              <div className="card col p-2">
                <div className="card-body">
                  Vehicle: {vehicleArr[idx - 1].name}<br />
                  Model: {vehicleArr[idx - 1].model}<br />
                  
                  <ul className="list-group">
                    <li className="list-group-item">Specs</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].manufacturer}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].vehicle_class}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].passengers}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].crew}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].length}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].max_atmosphering_speed}</li>
                    <li className="list-group-item">{vehicleArr[idx - 1].cargo_capacity}</li>
                  </ul>
                </div>
              </div>

              <div className="card col p-2">
                <div className="card-body">
                  Vehicle: {vehicleArr[idx - 2].name}<br />
                  Model: {vehicleArr[idx - 2].model}<br />
                  
                  <ul className="list-group">
                    <li className="list-group-item">Specs</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].manufacturer}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].vehicle_class}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].passengers}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].crew}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].length}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].max_atmosphering_speed}</li>
                    <li className="list-group-item">{vehicleArr[idx - 2].cargo_capacity}</li>
                  </ul>
                </div>
              </div>

              
            </div>
          )

        } else {
          return (
            ""
          )
        }
      })

      this.setState({
        vehicles: vehicleData
      })

    })
    .catch((error) => {
      console.error(error);
    })

  }
  


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    
    return (
      <div className="App">
        <div className="container">

          <div className="jumbotron">
            <h1 className="display-3">Star Wars</h1>
            <hr className="my-4" />
            <p className="lead">The Vehicles of Star Wars</p>
            
          </div>

          <div className="card p-2">
            <div className="card-body text-center">
              <form onSubmit={this.handleSubmit}>
                <h3>What is your name, pilot?</h3>
                
                <input type="text" className="form-control col-4 m-auto" id="pilotName" placeholder="Enter your name" onChange={this.handleNameChane} />
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
                <div id="pilotNameDisplay">
                  <h1>{this.state.pilot}</h1>
                </div>
              </form>
            </div>
          </div>
            {this.state.vehicles}
        </div>
      </div>
    );
  }
}

export default App;
