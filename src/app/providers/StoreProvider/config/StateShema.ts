import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface CounterState {}

export interface StateShema {
    user?: UserSchema;
    loginForm: LoginSchema;
}
