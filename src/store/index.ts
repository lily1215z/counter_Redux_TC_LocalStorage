import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer, GeneralActionType} from "./counter-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
export const rootReducer = combineReducers({
    value: CounterReducer,
})

// непосредственно создаём store. persistedTodosString должен писаться во 2 позиции
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        value: store.getState().value
    })
})

type AppActionType = GeneralActionType;

// определить автоматически тип всего объекта состояния
// export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppRootStateType = ReturnType<typeof store.getState>

// type AppStoreType = typeof store  //это не нужно Это как можно брать тип с сой сети

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>