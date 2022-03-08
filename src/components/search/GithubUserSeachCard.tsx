import React from "react";
import { IGithubSearchUser } from "../../models";

interface IGithubUserSeachResultProps {
  user: IGithubSearchUser;
}

export function GithubUserSeachCard({ user }: IGithubUserSeachResultProps) {
  return (
    <article className="flex items-center gap-8">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={user.avatar_url} alt={`${user.login} - github avatar`} />
      </div>
      <div>
        <h4>{user.login}</h4>
      </div>
    </article>
  );
}

export default GithubUserSeachCard;
