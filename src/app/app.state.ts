import { Widget } from './store/models/widget.model'

export interface AppState {
    readonly widget: Widget;
}