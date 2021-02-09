import React from "react";
import {ClassNames} from "@emotion/react";
import {Item} from "./App";

type Props = {
    text: string,
    setText: (e: string) => void,
    setSelect: (e: string) => void,
    select: string,
    callFunction: (e: string) => void,
    count: number,
    items: Item[]
}

const Code: React.FC<Props> = ({ text, setText, setSelect, select, callFunction, count, items }) => {
    return (
        <ClassNames>
            {({ css, cx }) => (
                <div
                    className={cx(
                        'search',
                        css`
                  width: 800px;
                  margin: 20px auto;
                `
                    )}>
                    <h1>Dictionary</h1>
                    <div className={css`
                  display: flex
                `}>
                        <input
                            value={text}
                            onChange={e => {
                                if(e.target.value.length < 2) setText(e.target.value)
                            }}
                            placeholder="Enter symbol"
                        />
                        <select
                            className={cx(
                                'browser-default',
                                css`
                      min-width: 150px;
                      height: 45px;
                      margin-left: 10px;
                  `)}
                            value={select}
                            onChange={e => setSelect(e.target.value)}
                        >
                            <option value="firstTask">How many words start</option>
                            <option value="secondTask">{`How many times does the letter <LETTER> appear`}</option>
                            <option value="thirdTask">{`How many words end with the letter <LETTER>`}</option>
                            <option value="fourthTask">{`How many words have the same letter repeated in conjunction?`}</option>
                        </select>
                        <button
                            className={cx(
                                'waves-effect waves-light btn',
                                css`
                      min-width: 150px;
                      height: 45px;
                      margin-left: 10px;
                  `
                            )}
                            onClick={() => {
                                callFunction(select)
                            }}
                        >Send</button>
                    </div>

                    <div>
                        <h5 className={css`margin-top: 50px`}>Total count: {count}</h5>
                        <ul className="collection">
                            {
                                items.map((item, index) => (
                                    <li key={index} className="collection-item">{item.value} - {item.label}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            )}
        </ClassNames>
    )
}

export default React.memo(Code)