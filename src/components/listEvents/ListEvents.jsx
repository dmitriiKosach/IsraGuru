import React, {useEffect, useState} from 'react';
import Excursion from "../helpers/excursion/Excursion";
import FilterWrapper from "../helpers/filters/FilterWrapper";
import Header from "../header/Header";
import {useSelector} from "react-redux";
import { Container } from '../styles/ContainerStyles';
import {useCurrent} from "../current/CurrentProvider";

const ListEvents = () => {

    const {isTourist} = useCurrent();
    const filter = useSelector(state => state.filter);
    const [excursions, setExcursions] = useState([...filter.eventsFilter])

    useEffect(()=>{
        setExcursions([...filter.eventsFilter]);
    },[filter])

    return <React.Fragment>
        {!isTourist ? <Header/> : null}
        <Container>

                <FilterWrapper filter={filter}/>
                {excursions.map(excursion => {
                    return <div key={excursion.id}>
                        <Excursion excursion={excursion} isShow='true' />
                    </div>
                })}

        </Container>
    </React.Fragment>
}

export default ListEvents;
