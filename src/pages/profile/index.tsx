import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { IGithubRepo, IGithubUser, IProfilePassingState } from "../../models";
import GithubPublicApi from "../../services";
import { LocationIcon } from "./components/icons";
import Repositories from "./components/Repositories";
import UserInformation from "./components/userInformation";
import FieldDescription from "./components/userInformation/fieldDescription";

export function Profile() {
  const location = useLocation();
  const { username } = (location.state || {
    username: "ifilipe-lype",
  }) as IProfilePassingState;

  const [user, setUser] = useState<IGithubUser | null>(null);
  const [repos, setRepos] = useState<IGithubRepo[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const user = await GithubPublicApi.getUserProfile(username);
        setUser(user);
        const repos = await GithubPublicApi.getUsersRepos(username);
        setRepos(repos);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [username]);

  return (
    <div className="app-container">
      {user ? (
        <>
          <div className="w-full mb-8">
            <figure className="md:grid grid-flow-col items-center md:grid-flow-row grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center md:justify-start w-full grid-cols-1 mb-8 md:mb-0">
                <img
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden object-cover"
                  alt={`${user.login}`}
                  src={user.avatar_url}
                />
              </div>
              <figcaption className="flex md:col-span-2 gap-4 flex-col">
                <article className="flex items-center md:items-start flex-col gap-2">
                  <div className="flex items-center gap-4">
                    {user.name ? (
                      <>
                        <h2 className="text-xl text-gray-900 font-bold">
                          {user.name}
                        </h2>
                        <span className="text-gray-200">|</span>
                      </>
                    ) : null}
                    <h3 className="text-lg text-gray-500">{user.login}</h3>
                  </div>
                  <FieldDescription
                    icon={<LocationIcon />}
                    body={
                      <>
                        <span>I'm from</span>
                        <span className="font-bold">{user.location}</span>
                      </>
                    }
                  />
                  {user.bio && (
                    <p className="text-gray-700 max-w-md md:max-w-full text-center md:text-left leading-tight">
                      <span className="text-2xl text-gray-300">"</span>
                      {user.bio}
                    </p>
                  )}
                </article>
                <UserInformation user={user} />
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col w-full py-4">
            <header>
              <nav>
                <ul>
                  <li className="py-2 px-4 rounded text-gray-500 bg-gray-100">
                    Most recent {user.public_repos < 12 ? user.public_repos : 12} public repositor
                    {user.public_repos > 1 ? "ies" : "y"}
                  </li>
                </ul>
              </nav>
            </header>
            <div className="py-8">
              {repos ? (
                <Repositories user={user} repos={repos} />
              ) : (
                <div className="flex flex-col items-center min-h-[300px] gap-8 justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-12 w-12 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <h4>Loading user repos...</h4>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center min-h-[300px] gap-8 justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-12 w-12 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h4>Loading user data...</h4>
        </div>
      )}
    </div>
  );
}

export default Profile;
