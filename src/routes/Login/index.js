import React from 'react';
import './Login.css';

function Index() {
  const handleSubmit = () => {
    window.alert('!');
  };

  return (
    <div className="login">
      <div style={{ marginBottom: '100px' }}>여기에 무언가 타임라인스러운 애니메이션을 넣어주자</div>
      <div>
        <h3 className="mb-3 font-weight-normal">로그인 페이지</h3>
        <label htmlFor="inputEmail" className="sr-only">이메일 아이디</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="이메일 아이디" required="" autoFocus=""/>
        <label htmlFor="inputPassword" className="sr-only">비밀번호</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="비밀번호" required=""/>
        <div className="checkbox mb-3">
          <label className="float-right">
            <input className="mr-1" type="checkbox" value="remember-me" />자동 로그인
          </label>
        </div>
        <button className="btn submit-btn" type="buttom" onClick={handleSubmit}>로그인</button>
      </div>
      <div className="mt-3 font-left">
        <p>아직 회원이 아니라면 <span>여기</span>에서 가입해주세요.</p>
      </div>
    </div>
  );
}

export default Index;