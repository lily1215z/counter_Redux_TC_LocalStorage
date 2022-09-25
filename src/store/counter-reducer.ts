import {Dispatch} from "redux";

const initialState: stateType = {
    value: 0,
    startV: 1,
    maxV: 3,
    mistake: 'error'
}

export type stateType = {
    value: number,
    startV: number,
    maxV: number,
    mistake: string
}

export  type GeneralActionType = ReturnType<typeof incAction>
    | ReturnType<typeof setAction>
    | ReturnType<typeof resAction>
    | ReturnType<typeof onChangeHandlerStartAction>
    | ReturnType<typeof onChangeHandlerMaxAction>
    | ReturnType<typeof setLocalStorageAC>;

export const CounterReducer = (state: stateType = initialState, action: GeneralActionType): stateType => {
    switch (action.type) {
        case 'INC': {
            return {...state, value: state.value + 1};
        }
        case 'SET':
        case 'RES': {
            return {...state, value: state.value = state.startV};
        }
        case 'START-V': {
            return {...state, startV: state.startV = action.number}
        }
        case 'MAX-V': {
            return {...state, maxV: state.maxV = action.number}
        }
        case 'SET-LOCAL-STORAGE': {
            return {...state, value: action.value}
        }
        default:
            return state;
    }
}

export const incAction = () => ({type: 'INC'} as const)
export const setAction = () => ({type: 'SET'} as const)
export const resAction = () => ({type: 'RES'}) as const
export const onChangeHandlerMaxAction = (number: number) => ({type: 'MAX-V', number: number}) as const
export const onChangeHandlerStartAction = (number: number) => ({type: 'START-V', number: number}) as const
export const setLocalStorageAC = (value: number) => ({type: 'SET-LOCAL-STORAGE', value} as const)


// export const setLocalStorageMaxValueTC = (value: number) => {
//     return (dispatch: Dispatch) => {
//         localStorage.setItem('counterMaxV', JSON.stringify(value))
//         dispatch(onChangeHandlerMaxAction(value))
//     }
// }

// export const getLocalStorageMaxValueTC = () => {
//    return (dispatch: Dispatch) => {
//         const valueString = localStorage.getItem('counterMaxV')
//         if(valueString) {
//             const newValue = JSON.parse(valueString);
//             dispatch(onChangeHandlerMaxAction(newValue))
//         }
//     }
// }
