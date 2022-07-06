// function component의 파일 이름은 대문자로 시작. (규칙)
// header에 추가할 것이다. 

import React from 'react'

const Button = ({text, onAdd}) => {
    const clickFunc = () => {
        console.log('click!')
    }
    // onClick에 무엇을 주느냐에 따라 다른 말을 출력할 수도 있다 
    return (
        <button
        onClick={onAdd} 
        style={{ backgroundColor: 'red', color: 'black' }} className="btn">{text}</button>
    )
}

export default Button