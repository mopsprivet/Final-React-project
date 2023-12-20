import React from 'react';
import Header from "./header" 
import Main from './main-page'; 
import BloodGlucose from './blood_glucose'; 
import LogIn from './logIn'; 
import RegistrationPage from './registration';
import Profile from './profile'; 
import "../css/index.css"; 
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'; 
import BreathingRate from './breathig_rate'; 
import Nutrition from './nutrition'; 
import Water from './water'; 
import BodyMeasurements from './body_measurements'; 
import Activity from './activity'; 


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPage: 'Main page',
        };
    }

    switchCategory = (newPage) => {
        this.setState({ selectedPage: newPage });
    };

    render() {
        return (
                <BrowserRouter>
                        <Header selectedCategory={this.switchCategory} />
                        <Routes>
                            <Route path='/main_page' element={<Main />} /> 
                            <Route path='/blood_glucose' element={<BloodGlucose />} /> 
                            <Route path='/breathing_rate' element={<BreathingRate />} /> 
                            <Route path='/login' element={<LogIn />}/> 
                            <Route path='/registration' element={<RegistrationPage />}/> 
                            <Route path='/nutrition' element={<Nutrition />}/> 
                            <Route path='/profile' element={<Profile />}/> 
                            <Route path='/water' element={<Water />}/> 
                            <Route path='/body_measurements' element={<BodyMeasurements />}/> 
                            <Route path='/activity' element={<Activity />}/> 

                            <Route path="/" element={<Navigate to='/main_page' />}/>
                            <Route path="*" element={<Navigate to='/main_page' />}/>
                        </Routes>
                </BrowserRouter>
        )    
    }
}


export default App
