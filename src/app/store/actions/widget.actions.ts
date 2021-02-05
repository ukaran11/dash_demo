import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Widget } from './../models/widget.model'

export const ADD_WIDGET       = '[WIDGET] Add'
export const ADD_TITLE       = '[TITLE] Add'
export const ADD_SUBTITLE       = '[SUBTITLE] Add'
export const ADD_LEGEND       = '[LEGEND] Add'
export const ADD_CAPTION       = '[CAPTION] Add'
export const ADD_THICKNESS       = '[THICKNESS] Add'
export const ADD_POSITION       = '[POSITION] Add'
export const REMOVE_WIDGET    = '[WIDGET] Remove'
  // title: string;
  //   subtitle: string;
  //   legend: string;
  //   caption: string;
  //   thickness: string;
  //   position: string;

export class AddWidget implements Action {
    readonly type = ADD_WIDGET

    constructor(public payload: Widget) {}
}

export class AddTitle implements Action {
    readonly type = ADD_TITLE

    constructor(public payload:any) {}
}

export class AddSubtitle implements Action {
    readonly type = ADD_SUBTITLE

    constructor(public payload:any ) {}
}

export class AddLegend implements Action {
    readonly type = ADD_LEGEND

    constructor(public payload: String) {}
}

export class AddCaption implements Action {
    readonly type = ADD_CAPTION

    constructor(public payload: String) {}
}

export class AddThickness implements Action {
    readonly type = ADD_THICKNESS

    constructor(public payload: String) {}
}

export class AddPosition implements Action {
    readonly type = ADD_POSITION

    constructor(public payload: String) {}
}


export class RemoveWidget implements Action {
    readonly type = REMOVE_WIDGET

    constructor(public payload: number) {}
}

export type Actions = AddWidget | RemoveWidget | AddTitle | AddSubtitle | AddLegend | AddCaption
                        | AddThickness | AddPosition