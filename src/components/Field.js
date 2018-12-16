import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;

    renderLabelText = () =>{
        switch(this.context){
            case 'Italian':
                return 'Nome';
            case 'Portuguese':
                return 'Nome';
            case 'Spanish':
                return 'Nombre';
            default:
                return 'Name';
        }
    }
    render(){
        return(
            <div className='ui field'>
                <label>{this.renderLabelText()}</label>
                <input />

            </div>
        )
    }
}

export default Field;