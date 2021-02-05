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

export function reducer(state: Widget = initialState, action: WidgetActions.Actions) {
    switch(action.type) {
        case WidgetActions.ADD_WIDGET:
            return {...state, title:action.payload};

        case WidgetActions.ADD_TITLE:
            return {...state, title:action.payload};

        case WidgetActions.ADD_SUBTITLE:
            return {...state, subtitle:action.payload};
        
        case WidgetActions.ADD_LEGEND:
            return {...state, title:action.payload};
        
        case WidgetActions.ADD_CAPTION:
            return {...state, title:action.payload};

        case WidgetActions.ADD_THICKNESS:
            return {...state, title:action.payload};
        
        case WidgetActions.ADD_POSITION:
            return {...state, title:action.payload};

        case WidgetActions.REMOVE_WIDGET:
            return {...state, title:action.payload};
            return state;
        default:
            return state;
    }
}