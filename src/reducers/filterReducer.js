import {EXCURSIONS} from "../config/config_list_events";

localStorage.setItem('events', JSON.stringify(EXCURSIONS));


const initialState = {
    eventsFilter: JSON.parse(localStorage.getItem('events'))
}

export function filterReducer(state = initialState, action){
    const events = JSON.parse(localStorage.getItem('events'));
    switch (action.type){
        case 'UPDATE_EVENTS_BY_LEVEL':
            // const eventsByLevel = events.filter(event => {
            //     debugger
            //     return event.difficultyLevel.title.toLowerCase().includes(action.payload.toLowerCase()) ? event : "";
            // })
            return {...state, difficultyLevel: action.payload};
        case 'UPDATE_EVENTS_BY_DATE_FROM':
            return {...state, dateFrom: action.payload};
        case 'UPDATE_EVENTS_BY_DATE_TO':
            return {...state, dateTo: action.payload};

        case 'UPDATE_EVENTS_BY_CITY':
            const eventsByCity = events.filter(event => {
                return event.city.toLowerCase().includes(action.payload.toLowerCase()) ? event : "";
            })
            return {...state, eventsFilter: eventsByCity};

        case 'UPDATE_EVENTS_BY_SEARCH':
            if(action.payload === ""){
                return {...state, eventsFilter: events}
            }
            const eventsBySearch = events.filter(event => {
                return event.title.toLowerCase().includes(action.payload.toLowerCase()) ? event : "";
            })
            return {...state, eventsFilter: eventsBySearch};

        case 'CLEAR_FILTER':
        default:
            return {...state, eventsFilter: events};
    }
}
