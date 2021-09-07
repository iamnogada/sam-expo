export interface LocalState {
  currentUser: LocalUser
  isLogin: boolean
}
export interface LocalUser {
  id: string
  displayName: string
  expireDate: Date
}

export enum LocalUserActionKind {
  UpdateLocalUser = 'UPDATE_LOCAL_USER',
  ReloadLocalUser = 'RELOAD_LOCAL_USER',
}

export type LocalUserAction = {
  type: LocalUserActionKind
  payload: any
}
