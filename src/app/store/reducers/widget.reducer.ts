import { Action } from '@ngrx/store'
import { Widget } from './../models/widget.model'
import * as WidgetActions from './../actions/widget.actions'

const initialState: Widget = {
    title:'',
    subtitle:'',
    legend:'',
    caption:'',
    thickness:'',
    position:''
};

export function reducer(state: Widget[] = [initialState], action: WidgetActions.Actions) {
    switch(action.type) {
        case WidgetActions.ADD_WIDGET:
            return [...state, action.payload];

        case WidgetActions.ADD_TITLE:
            return [...state];

        case WidgetActions.ADD_SUBTITLE:
            return [...state];
        
        case WidgetActions.ADD_LEGEND:
            return [...state, action.payload];
        
        case WidgetActions.ADD_CAPTION:
            return [...state, action.payload];

        case WidgetActions.ADD_THICKNESS:
            return [...state, action.payload];
        
        case WidgetActions.ADD_POSITION:
            return [...state, action.payload];

        case WidgetActions.REMOVE_WIDGET:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}