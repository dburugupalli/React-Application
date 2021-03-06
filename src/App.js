import React from 'react';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {

    state = {
        data:{},
        country: ''
    }

    async componentDidMount(){
        const fetcheddata = await fetchData();
        this.setState({data:fetcheddata});
    }

    handleCountryChange= async(country)=>{
        const fetcheddata = await fetchData(country);
        this.setState({data:fetcheddata, country:country    });
        // fetch the data
        // set the data
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className = {styles.container} >
               <Cards data ={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App;