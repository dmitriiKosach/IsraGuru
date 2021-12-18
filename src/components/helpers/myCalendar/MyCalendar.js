import React, {useEffect, useState} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './MyCalendar.css';

const MyCalendar = (props) => {
    const defaultProps = {
        numberOfMonths: 3,
    };

    const getInitialState = () => {
        return {
            from: undefined,
            to: undefined,
        };
    }
    const [state, setState] = useState(getInitialState);
    const { from, to } = {...state};
    const modifiers = { start: from, end: to };

    const updateDate = (date) =>{
        props.updateDateFilter(date);
    }

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, state);
        setState({...range});
    }

    useEffect(()=>{
        updateDate({...state});
    },[state, state.from, state.to])

    return (
        <div className="RangeExample">
            <DayPicker
                className="Selectable"
                numberOfMonths={defaultProps.numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
            />
        </div>
        );
}

export default MyCalendar;
























// export const MyCalendar = (props) => {
//     const defaultProps = {
//         numberOfMonths: 3,
//     };
//
//     const [date, setDate] =  useState({
//         from: undefined,
//         to: undefined,
//     })
//
//     const handleDayClick = (day) => {
//         const range = DateUtils.addDayToRange(day, date);
//         setDate(range);
//         updateDate(date);
//     }
//
//     const updateDate = (date) => {
//         if(date.from !== undefined && date.to !== undefined){
//             props.updateDateFilter(date);
//         }
//     }
//
//     // const handleResetClick = () => {
//     //     setState({
//     //         from: undefined,
//     //         to: undefined
//     //     });
//     // }
//     const { from, to } = date;
//     const modifiers = { start: from, end: to };
//
//
//
//
//         return (
//             <div className="RangeExample">
//                 <DayPicker
//                     className="Selectable"
//                     numberOfMonths={defaultProps.numberOfMonths}
//                     selectedDays={[from, {from, to}]}
//                     modifiers={modifiers}
//                     onDayClick={handleDayClick}
//
//                 />
//                 <Helmet>
//                     <style>{`
//   .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
//     background-color: #f0f8ff !important;
//     color: #4a90e2;
//   }
//   .Selectable .DayPicker-Day {
//     border-radius: 0 !important;
//   }
//   .Selectable .DayPicker-Day--start {
//     border-top-left-radius: 50% !important;
//     border-bottom-left-radius: 50% !important;
//   }
//   .Selectable .DayPicker-Day--end {
//     border-top-right-radius: 50% !important;
//     border-bottom-right-radius: 50% !important;
//   }
// `}</style>
//                 </Helmet>
//             </div>
//         );

// }
