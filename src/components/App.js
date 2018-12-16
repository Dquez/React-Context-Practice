import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
export default class App extends Component{
    state = {language: 'English'};

    onLanguageChange = language =>{
        this.setState({
            language
        })
    }

    render(){
        
        return(
            <div className='ui container'> 
                <div>
                    Select a language: 
                    <i className='flag us' onClick={()=>this.onLanguageChange('English')} />
                    <i className='flag it' onClick={()=>this.onLanguageChange('Italian')} />
                    <i className='flag pt' onClick={()=>this.onLanguageChange('Portuguese')} />
                    <i className='flag es' onClick={()=>this.onLanguageChange('Spanish')} />
                </div>

                <LanguageContext.Provider value={this.state.language} >
                    <ColorContext.Provider value='black'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}
