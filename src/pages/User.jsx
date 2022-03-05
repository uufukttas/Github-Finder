import { useEffect, useContext, createContext } from "react";
import GithubContext from "../Context/Github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>User</div>;
}

export default User;
