import React, { useState, useImperativeHandle, forwardRef } from 'react';

import style from './index.module.scss'
import { CSSProperties } from 'react';
import { debounce } from '../../utils';
import { Logo } from '../../static/cos';

interface Props {
    unique: boolean;
    avatar?: string;
    styles?: CSSProperties;
    onDoubleClick: (e?: React.MouseEvent) => void;
}

function Ball({ unique, avatar, styles, onDoubleClick }: Props, ref: React.Ref<any>) {

    useImperativeHandle(ref, () => ({
        displayTalkMsg
    }), [])

    const [content, setContent] = useState<string | null>(null);
    const delaySetContent = debounce(setContent, 5000);

    function displayTalkMsg(msg: string) {
        if (!msg) return;

        setContent(msg)
        delaySetContent(null);
    }

    function handleOnDoubleClick() {
        unique && onDoubleClick();
    }

    const halo = { animation: `${unique ? style.uniqueshine : style.shine} 2s infinite` };
    const display = content ? "block" : "none";
    const img = avatar ? avatar : Logo.Kexie;
    return (
        <div>
            <span onDoubleClick={handleOnDoubleClick}>
                <img
                    className={style.logo}
                    src={img}
                    style={{ ...styles, ...halo }} />
            </span>

            <span style={{ display }}>
                <div className={style.container}>
                    <div className={style.triangle}></div>
                    <div className={style.content}>
                        <div className={style.font}>
                            {content}
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
}



export default forwardRef(Ball);