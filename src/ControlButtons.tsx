import React from 'react';
import {FilterValueType} from "./App";

type ControlButtonsType = {
    changeFilter : (filter:FilterValueType )=> void
    filter:FilterValueType
}

const ControlButtons = (props:ControlButtonsType) => {
    const onClickSetFilter =(filter:FilterValueType)=>()=>props.changeFilter(filter)
    return (
        <div>
            <button
                className = {props.filter ==="all"?"button-active": ""}
                onClick={onClickSetFilter("all")}>All</button>
            <button
                className = {props.filter ==="all"?"button-active": ""}
                onClick={onClickSetFilter("active")}>Active</button>
            <button
                className = {props.filter ==="all"?"button-active": ""}
                onClick={onClickSetFilter("completed")}>Completed</button>
        </div>
    );
};

export default ControlButtons;