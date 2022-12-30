import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <ul style={{ display: 'flex', marginBottom: '40px' }}>
        <li style={{ marginRight: '15px' }}>
          <Link to="/">Главная</Link>
        </li>

        <li style={{ marginRight: '15px' }}>
          <Link to="/period">Срок командировки</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/season">Погода там</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/type-trip">Тип отдыха</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/list-things">Список вещей</Link>
        </li>
        <li>
          <Link to="/">Авторизация</Link>
        </li>

        <li>ru/en - i18</li>

        <li>dark/light theme</li>
      </ul>
    </div>
  );
}
