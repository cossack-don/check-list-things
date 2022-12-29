import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      Header
      <ul style={{ display: 'flex' }}>
        <li>
          <Link to="/">Главная</Link>
        </li>

        <li>
          <Link to="/period">Срок командировки</Link>
        </li>
        <li>
          <Link to="/season">Погода там</Link>
        </li>
        <li>
          <Link to="/type-trip">Тип отдыха</Link>
        </li>
        <li>
          <Link to="/list-things">Список вещей</Link>
        </li>
        <li>
          <Link to="/">Авторизация</Link>
        </li>
      </ul>
    </div>
  );
}
