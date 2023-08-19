import { useContext } from "react";
import { FullPageCenter, LockedBtn } from "../styled";
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";

function Locked() {
  const { setIsUser } = useContext(UserContext);
  const navigate = useNavigate();
  function letUserIn() {
    setIsUser(() => true);
    navigate("/");
  }
  return (
    <FullPageCenter>
      <LockedBtn onClick={letUserIn}>Get in</LockedBtn>
    </FullPageCenter>
  )
}

export default Locked;