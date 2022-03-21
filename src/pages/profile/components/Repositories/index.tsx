import React from "react";
import { IGithubRepo, IGithubUser } from "../../../../models";

interface IRepositoriesProps {
  repos: IGithubRepo[];
  user: IGithubUser
}

export function Repositories({ repos, user }: IRepositoriesProps) {
  return (
    <div className="flex flex-col w-full">
      <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 content-between gap-4">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <article className="flex gap-2 flex-col p-4 border border-gray-100 transition cursor-pointer hover:bg-gray-100">
                <header>
                  <h2 className="text-md font-semibold text-gray-700">
                    {repo.name}
                  </h2>
                </header>
                <div>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {repo.description || "No description available!"}
                  </p>
                  <div className="text-xs flex flex-wrap gap-2 mt-2 items-center text-gray-600">
                    <span className="font-semibold">
                      {repo.language || "No language specified"}
                    </span>
                    <span>{repo.license?.name || "No license"}</span>
                    <span className="text-gray-400">
                      {new Date(repo.created_at).toDateString()}
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </li>
        ))}
      </ul>
      <footer className="py-4">
        <div className="flex items-center justify-center gap-8">
          <a href={`${user.html_url}?tab=repositories`} target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 py-1 border border-gray-100 rounded text-gray-500">
            See more
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Repositories;
