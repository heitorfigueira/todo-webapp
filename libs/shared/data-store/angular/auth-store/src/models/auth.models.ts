import { Session } from "@authentication-domain";


export interface AuthState {
  isLogged: boolean,
  session?: Session,
}

export const initialState: AuthState = {
  isLogged: false,
  session: undefined
}
