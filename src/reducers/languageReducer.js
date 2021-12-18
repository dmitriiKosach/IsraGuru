import {LANGUAGES, LANGUAGES_BUTTON} from "../config/config_global";
const languageBrowser = (window.navigator.language).substr(0, 2).toLowerCase();
const defaultLanguage = LANGUAGES.find(language => language.title.toLowerCase() === "en" ? language : "");
const changeLanguage = LANGUAGES.find(language =>{
    return language.title.toLowerCase() === languageBrowser ? language: null;
})


const initialState = {
    lang: changeLanguage !== null ? {...changeLanguage} : {...defaultLanguage},
    languageButtons: LANGUAGES_BUTTON,
    levelCurrentIndex: 0,
    locationCurrentIndex: 0,
    locationCurrent: changeLanguage.locations[0],
    levelCurrent: changeLanguage.levels[0]
}


export function languagesReducer (state = initialState, action){
   switch (action.type){
       case 'UPDATE_LANGUAGE':
           switch (action.payload){
               // case 'All':
               //     return {...state, lang: LANGUAGES[0]};
               case 'RU':
                   return {...state, lang: LANGUAGES[0]};
               case 'EN':
                   return {...state, lang: LANGUAGES[1]};
               case 'FR':
                   return {...state, lang: LANGUAGES[2]};
               default:
                   return state;
           }

       case 'UPDATE_CURRENT_LEVEL':
           return {...state, levelCurrent: state.lang.levels[action.payload]};
       case 'UPDATE_CURRENT_LEVEL_INDEX':
           return {...state, levelCurrentIndex: action.payload};

       case 'UPDATE_CURRENT_LOCATION':
           return {...state, locationCurrent: state.lang.locations[action.payload]};
       case 'UPDATE_CURRENT_LOCATION_INDEX':
           return {...state, locationCurrentIndex: action.payload};
       default:
           return state;
   }
}


