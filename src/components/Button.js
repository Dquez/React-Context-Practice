import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component{ 
    renderLanguage = language =>{
        switch(language){
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
    renderButton = color => {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    { ({language}) => this.renderLanguage(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    render(){
        return (
                <ColorContext.Consumer>
                    {color=> this.renderButton(color)}
                </ColorContext.Consumer>   
        )
    }
}

export default Button;