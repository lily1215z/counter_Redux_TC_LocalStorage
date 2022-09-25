import React, {ChangeEvent, useEffect} from 'react';
import {
    onChangeHandlerMaxAction,
    onChangeHandlerStartAction
} from "../store/counter-reducer";
import {useAppDispatch} from "../hook";


type EnterFieldType = {
    set: () => void
    startV: number
    maxV: number
}

export const EnterField: React.FC<EnterFieldType> = ({set, startV, maxV}) => {
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch()

    useEffect(() => {  //чтоб при запуске сразу отображалось то что лежит в ЛокарСторедж
        // const valueString = localStorage.getItem('counterMaxV')
        // const valueStringStar = localStorage.getItem('counterStarV')
        // if (valueString && valueStringStar) {
        //     const newValue = JSON.parse(valueString)
        //     const newValueS = JSON.parse(valueStringStar)
        //     dispatch(onChangeHandlerMaxAction(newValue))
        //     dispatch(onChangeHandlerStartAction(newValueS))
        // }

        // dispatch(getLocalStorageMaxValueTC())
    }, [])

    useEffect(() => {  //чтоб при изменении макс значения менялся ЛокарСторедж
        // localStorage.setItem('counterMaxV', JSON.stringify(maxV))
        // dispatch(setLocalStorageMaxValueTC(maxV))

        // localStorage.setItem('counterStarV', JSON.stringify(startV))
    }, [maxV, startV])

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeHandlerMaxAction(+e.currentTarget.value))
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeHandlerStartAction(+e.currentTarget.value))
    }

    return (
        <div className={'inner_box'}>
            <div className={'inner_block'}>
                <span className={'inner_text'}>MaxValue:</span>
                <input
                    className={maxV < 0 || maxV <= startV ? 'input_active' : 'input'}
                    //value={valueString ? JSON.parse(valueString) : ''}
                    value={maxV}
                    type={'number'}
                    onChange={onChangeHandlerMax}
                />

            </div>
            <div className={'inner_block'}>
                <span className={'inner_text'}>StartValue:</span>
                <input
                    className={startV < 0 || maxV <= startV ? 'input_active' : 'input'}
                    value={startV}
                    type={'number'}
                    onChange={onChangeHandlerStart}
                />
            </div>
            <div className={'btn_set'}>
                <button disabled={startV < 0 || maxV < 0 || startV === maxV} onClick={set}
                        className={'btn'}>set
                </button>
            </div>
        </div>
    );
};

