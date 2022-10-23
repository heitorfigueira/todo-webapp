import { Session } from "@authentication-domain";


export interface AuthState {
  isLogged: boolean,
  session?: Session,
  authError?: string
}

export const initialState: AuthState = {
  isLogged: false,
  session: undefined,
  authError: undefined
}
