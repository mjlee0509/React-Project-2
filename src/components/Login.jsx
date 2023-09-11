import React from 'react'

export default function Login() {
  return (
    <div className='page'>
      <div className='title-wrap'>
        이메일과 비밀번호를 
        <br />
        입력해주세요
      </div>

      <div className='contents-wrap'>
        <div className='input-title'>이메일 주소</div>
        <div className='input-wrap'>
          <input className='input' placeholder='test@gmail.com' />
        </div>
        <div className='errMsg-wrap'>
          유효하지 않은 이메일입니다.
        </div>

        <div className='input-title' style={{ marginTop:"26px"}}>비밀번호</div>
        <div className='input-wrap'>
          <input className='input' placeholder='영문, 숫자, 특수문자 포함 8자 이상'/>
        </div>
        <div className='errMsg-wrap'>
          영문, 숫자 및 특수문자를 포함하여 8자 이상 입력하세요.
        </div>
        </div>

        <div>
          <button disabled={true} className='btn'>확인</button>
        </div>

    </div>
  )
}
