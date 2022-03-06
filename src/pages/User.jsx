import {
  FaBloggerB,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layouts/Spinner";
import { useEffect, useContext } from "react";
import GithubContext from "../Context/Github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="mx-auto w-full lg:w-10/12 ">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Go Back
          </Link>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="card image-full rounded-lg shadow-xl">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="card-title text-3xl">
                {name}
                <div className="badge badge-success ml-2 mr-1">{type}</div>
                {hireable && (
                  <div className="badge badge-info mx-1">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="card-actions mt-4">
                <a
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="bg-base-100 stats w-full rounded-lg shadow-md">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">WebSite URL</div>
                  <div className="stat-value text-lg">
                    <a href={`${blog}`} target="_blank" rel="noreferrer">
                      Blog Page
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-base-100 stats mb-6 w-full rounded-lg py-5 shadow-md">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Follwers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repository</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
