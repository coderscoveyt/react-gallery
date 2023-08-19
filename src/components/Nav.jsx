import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import { UnlockedBtn, LockedBtn, Navigation } from '../styled'

function Nav() {
  const navigate = useNavigate();
  const { isUser, setIsUser } = useContext(UserContext);
  const getOut = () => {
    setIsUser(() => false);
    navigate("/locked");
  }
  const getIn = () => {
    setIsUser(() => true);
    navigate("/");
  }

  return (
    <Navigation>
      <Link to="/">Gallery</Link>
      <ul>
        <li>
          <Link to="/">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {isUser ?
            <UnlockedBtn onClick={getOut}>Get out</UnlockedBtn> :
            <LockedBtn onClick={getIn}>Get in</LockedBtn>
          }
        </li>
      </ul>
    </Navigation>
  )
}

export default Nav;