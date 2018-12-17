import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class LangaugeSelector extends Component{
    static contextType = LanguageContext;
    render(){
        
        return(
            <div>
                Select a language: 
                <i className='flag us' onClick={()=>this.context.onLanguageChange('English')} />
                <i className='flag it' onClick={()=>this.context.onLanguageChange('Italian')} />
                <i className='flag pt' onClick={()=>this.context.onLanguageChange('Portuguese')} />
                <i className='flag es' onClick={()=>this.context.onLanguageChange('Spanish')} />
            </div>
        )
    }
}