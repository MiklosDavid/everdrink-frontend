// import {
//   Directive,
//   EventEmitter,
//   OnInit,
//   OnDestroy,
//   Input,
//   Output,
// } from '@angular/core';
// import { FormGroupDirective } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/debounceTime';


// import { SET_FORM } from '@core/reducers/form.reducer';
// import { AppState } from '@core/states/app.state';

// @Directive({
//   selector: '[appConnectForm]',
// })
// export class ConnectFormDirective implements OnInit, OnDestroy {
//   @Input('appConnectForm') path: string;
//   @Input() debounce = 500;
//   @Input() async = false;
//   subscriptions: Subscription[] = [];

//   constructor(
//     private formGroupDirective: FormGroupDirective,
//     private store: Store<AppState>
//   ) {}

//   ngOnInit(): void {
//     if (this.async) {
//       this.subscriptions.push(
//         this.store
//           .select((state) => state.forms[this.path])
//           .subscribe((value) => {
//             if (value !== undefined || value != null) {
//               this.formGroupDirective.form.patchValue(value, {
//                 emitEvent: false,
//               });
//             }
//           })
//       );
//     } else {
//       this.subscriptions.push(
//         this.store
//           .select((state) => state.forms[this.path])
//           .take(1)
//           .subscribe((value) => {
//             if (value !== undefined || value != null) {
//               this.formGroupDirective.form.patchValue(value, {
//                 emitEvent: false,
//               });
//             }
//           })
//       );
//     }
//     this.subscriptions.push(
//       this.formGroupDirective.form.valueChanges
//         .debounceTime(this.debounce)
//         .subscribe((value) => {
//           this.store.dispatch({
//             type: SET_FORM,
//             payload: {
//               value,
//               path: this.path,
//             },
//           });
//         })
//     );
//   }

//   ngOnDestroy(): void {
//     this.subscriptions.forEach((subscription: Subscription) => {
//       subscription.unsubscribe();
//     });
//     this.subscriptions = [];
//   }
// }
