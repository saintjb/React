import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Alex
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Peter
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Jack
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Victor
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Welcome</div>
            </div>
        </div>

    );
}

export default Dialogs;