import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {
    incAction,
    resAction,
    setAction
} from "../store/counter-reducer";
import {EnterField} from "./EnterField";
import {FinishField} from "./FinishField";

export const Counter: React.FC = () => {
    let value: number = useSelector<AppRootStateType, number>(state => state.value.value)
    let startV: number = useSelector<AppRootStateType, number>(state => state.value.startV)
    let maxV: number = useSelector<AppRootStateType, number>(state => state.value.maxV)

    const dispatch = useDispatch();

    const set = () => {
        dispatch(setAction())
    }

    const inc = () => {
        dispatch(incAction())
    }

    const res = () => {
        dispatch(resAction())
    }

    return (
        <div className={'app'}>
            <div className={'inner'}>
                <EnterField
                    set={set}
                    startV={startV}
                    maxV={maxV}
                />

                <FinishField
                    inc={inc}
                    res={res}
                    startV={startV}
                    maxV={maxV}
                    value={value}
                />
            </div>
        </div>
    );
};

// export const Counter = () => {               //вариант на useState без разделения на компоненты
//     const [value, setValue] = useState<number | string>(0)
//     const [startV, setStartV] = useState(0)
//     const [maxV, setMaxV] = useState(3)
//
//     const inc = () => {
//         setValue(+value + 1)
//         if (value === maxV) {
//             setValue(maxV)
//         }
//     }
//
//     const res = () => {
//         setValue(startV)
//     }
//
//     const set = () => {
//         setValue(startV)
//     }
//
//     const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
//         setMaxV(+e.currentTarget.value)
//     }
//
//     const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
//         setStartV(+e.currentTarget.value)
//     }
//
//     const errorMes = startV < 0 || maxV < 0 || maxV <= startV ? 'incorrect data' : ''
//     const enterMes = startV >= 0 || maxV > 0 ? 'enter value and press "set"' : ''
//     const classNameActive = value === maxV && 'active_error'
//         || startV === maxV && 'active_error'
//         || (startV && maxV) < 0 && 'active_error'
//         || (startV || maxV) < 0 && 'active_error'
//         || startV > maxV && 'active_error'
//
//     return (
//         <div className={'app'}>
//             <div className={'inner'}>
//                 <div className={'inner_box'}>
//                     <div className={'inner_block'}>
//                         <span className={'inner_text'}>MaxValue:</span>
//
//                         <input
//                             className={maxV < 0 || maxV <= startV ? 'input_active' : 'input'}
//                             value={maxV}
//                             type={'number'}
//                             onChange={onChangeHandlerMax}
//                         />
//
//                     </div>
//                     <div className={'inner_block'}>
//                         <span className={'inner_text'}>StartValue:</span>
//                         <input
//                             className={startV < 0 || maxV <= startV ? 'input_active' : 'input'}
//                             value={startV}
//                             type={'number'}
//                             onChange={onChangeHandlerStart}
//                         />
//                     </div>
//                     <div className={'btn_set'}>
//                         <button disabled={startV < 0 || maxV < 0 || startV === maxV} onClick={set} className={'btn'}>set</button>
//                     </div>
//                 </div>
//
//                 <div className={'inner_box'}>
//                     <span className={`${classNameActive} ${'inner_value'}`}>{errorMes ? errorMes : value || enterMes}</span>
//                     <div className={'inner_btn'}>
//                         <button disabled={value === maxV || startV === maxV} onClick={inc} className={'btn'}>inc</button>
//                         <button disabled={startV === maxV} onClick={res} className={'btn'}>res</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


