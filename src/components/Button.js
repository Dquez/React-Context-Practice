import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component{
    static contextType = LanguageContext;
    renderLanguage = () =>{
        switch(this.context){
            case 'Italian':
                return 'Invio';
            case 'Portuguese':
                return 'Enviar';
            case 'Spanish':
                return 'Enviar';
            default:
                return 'English';
        }
    }
    render(){
        return (
            <button className='ui button primary'>{this.renderLanguage()}</button>
        )
    }
}

export default Button;