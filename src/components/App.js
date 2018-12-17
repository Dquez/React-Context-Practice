import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LangaugeSelector from './LanguageSelector';
export default class App extends Component{
    render(){
        
        return(
            <div className='ui container'> 
            <LanguageStore>
                <LangaugeSelector />
                <ColorContext.Provider value='black'>
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageStore>
            </div>
        );
    }
}
