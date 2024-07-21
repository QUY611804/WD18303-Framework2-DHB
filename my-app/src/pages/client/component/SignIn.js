import React from 'react';
import './SignIn.css';

const SignIn = () => {
  const handleGoogleLogin = () => {
    // Xử lý đăng nhập bằng Google tại đây
  };

  const handleFacebookLogin = () => {
    // Xử lý đăng nhập bằng Facebook tại đây
  };

  return (
    <div className="signin">
      <header className="signin-header">
        <h1>Đăng nhập</h1>
      </header>
      <section className="signin-form">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" required />

          <button type="submit">Đăng nhập</button>

          <p className="signup-link">
            Chưa có tài khoản? <a href="/signup">Đăng ký</a>
          </p>
        </form>
        <div className="social-login">
          <button className="google-login" onClick={handleGoogleLogin}>
            Đăng nhập bằng Google
          </button>
          <button className="facebook-login" onClick={handleFacebookLogin}>
            Đăng nhập bằng Facebook
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
