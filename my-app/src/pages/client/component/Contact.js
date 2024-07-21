import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Liên hệ với chúng tôi</h1>
      </header>
      <section className="contact-info">
        <h2>Thông tin liên hệ</h2>
        <p>
          <strong>Địa chỉ:</strong> Đường Lê Bình , Quận Cái Răng, Thành phố Cần Thơ, Việt Nam
        </p>
        <p>
          <strong>Điện thoại:</strong> <a href="tel:+84123456789"> +84 966668888</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@yourcompany.com">dhbeeply183@dhb.com</a>
        </p>
        <p>
          <strong>Giờ làm việc:</strong> Thứ Hai - Thứ Sáu: 8:00 - 18:00
        </p>
      </section>
      <section className="contact-form">
        <h2>Gửi tin nhắn cho chúng tôi</h2>
        <form>
          <label htmlFor="name">Tên của bạn:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Tin nhắn:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Gửi tin nhắn</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
