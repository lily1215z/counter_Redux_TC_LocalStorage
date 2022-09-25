import React from 'react';

type FinishFieldType = {
    inc: () => void
    res: () => void
    startV: number
    maxV: number
    value: number
}

export const FinishField: React.FC<FinishFieldType> = ({inc, res, startV, maxV, value}) => {
    const enterMes = startV >= 0 || maxV > 0 ? 'enter value and press "set"' : ''
    const errorMes = startV < 0 || maxV < 0 || maxV <= startV ? 'incorrect data' : ''
    const classNameActive = value === maxV && 'active_error'
        || startV === maxV && 'active_error'
        || (startV && maxV) < 0 && 'active_error'
        || (startV || maxV) < 0 && 'active_error'
        || startV > maxV && 'active_error'

    return (
        <div className={'inner_box'}>
                    <span
                        className={`${classNameActive} ${'inner_value'}`}>{errorMes ? errorMes : value || enterMes}</span>
            <div className={'inner_btn'}>
                <button disabled={value === maxV || startV === maxV} onClick={inc} className={'btn'}>inc
                </button>
                <button disabled={startV === maxV} onClick={res} className={'btn'}>res</button>
            </div>
        </div>
    );
};

