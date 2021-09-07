import {
  LocalUserActionKind,
  LocalUserAction,
  LocalState,
} from '@constants/localState'

export function LocalUserReducer(
  state: LocalState,
  action: LocalUserAction
): LocalState {
  switch (action.type) {
    case LocalUserActionKind.ReloadLocalUser:
      return { ...state }
    case LocalUserActionKind.UpdateLocalUser:
      return { ...state, isLogin: action.payload.isLogin }
  }
}
