import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { barReducer } from './bar.reducer';


export const appReducers: ActionReducerMap<IAppState, Action> = {
  bar: barReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = [];
