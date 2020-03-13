import React from 'react';
import s from './Footer.module.css';

const Footer: React.FC = (props) => {
    return <footer className={s.footer}>
        Автор: Поречная Марина<br/>
        Телефон: +7 (923) 198-91-90<br/>
        E-mail: porechnaya-mv@yandex.ru<br/>
        © 2019–2020 : <a href="/">Политика конфиденциальности</a>
    </footer>
}

export default Footer;