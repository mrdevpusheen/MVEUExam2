import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
      <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('Meating')}>Мероприятия</li>
        <li onClick={() => setPage('Forum')}>Форум</li>
        <li onClick={() => setPage('Contacts')}>Контакты</li>
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;