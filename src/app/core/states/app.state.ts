import * as fromRouter from '@ngrx/router-store';
import { CartState } from './cart.state';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  cart: CartState;
  router: fromRouter.RouterReducerState<any>;
}