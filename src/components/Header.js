import React from 'react'
import Button from './Button.js'

// 리엑트에서 jsx 코드의 클래스 이름 정의할때는 className를 쓴다.


const Header = ({title}) => {
  const onAdd = () => {
    console.log('Clicked')
  }

  console.log(title)
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text="Add" onAdd={onAdd()} />
    </header>
    
  )
}

export default Header