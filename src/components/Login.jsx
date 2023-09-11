import React, { useEffect, useState } from 'react'

export default function Login() {

  // 이메일, 비밀번호 입력값 state
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  // 3-1. 정규식 일치 여부 체크 state
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    // 1. email input창에 입력 받을 수 있게 하기 (e.target.value)
    setEmail(e.target.value); 

    // 2. 정규식 선언
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 3. 정규식 일치 여부
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value);        

    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }

  }

  // 버튼 활성화 여부 체크 state
  const [notAllow, setNotAllow] = useState(true);

  // 이메일 및 비밀번호 유효성에 따른 버튼 상태 설정
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid])

  
  // 더미 데이터를 만들어 잘 작동하는지 테스트해보자
  const user1 = {
    email : 'test1@gmail.com',
    pw : 'aaaaaa@1010'
  }

  const confirm = () => {
    if (email === user1.email && pw === user1.pw) {
      alert("환영합니다~!~! 👻")
    } else {
      alert("회원 정보를 찾을 수 없습니다 😭")
    }
  }

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
          <input className='input' placeholder='test@gmail.com'
          type='text'
          value={email}
          onChange={handleEmail} />
        </div>
        <div className='errMsg-wrap'>
          {/* 4. 정규식이 일치하지 않을 때 에러메세지 적용 */}
          {!emailValid && email.length > 0 && (
            <div>유효하지 않은 이메일입니다.</div>
          )}
        </div>

        <div className='input-title' style={{ marginTop:"26px"}}>비밀번호</div>
        <div className='input-wrap'>
          <input className='input' placeholder='영문, 숫자, 특수문자 포함 8자 이상'
          type='password'
          value={pw}
          onChange={handlePw} />
        </div>
        <div className='errMsg-wrap'>
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자 및 특수문자를 포함하여 8자 이상 입력하세요. </div>
          )}
        </div>
        </div>

        <div>
          <button onClick={confirm} disabled={notAllow} className='btn'>확인</button>
        </div>

    </div>
  )
}
