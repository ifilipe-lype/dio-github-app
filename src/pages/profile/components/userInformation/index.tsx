import React from "react";

import { IGithubUser } from "../../../../models";
import {
  ExternalLinkIcon,
  FollowersIcon,
  OfficeBuildingIcon,
  WebsiteIcon,
} from "../icons";
import FieldDescription from "./fieldDescription";

interface IUserInformationProps {
  user: IGithubUser;
}

export function UserInformation({ user }: IUserInformationProps) {
  return (
    <div className="flex items-center md:items-start flex-col gap-2">
      <FieldDescription
        icon={<FollowersIcon />}
        body={
          <>
            <span>{user.followers} followers</span>
            <span className="text-gray-200">|</span>
            <span>{user.following} following</span>
          </>
        }
      />
      {user.company && (
        <FieldDescription
          icon={<OfficeBuildingIcon />}
          body={
            <>
              <span>works at</span>
              <span className="font-bold">{user.company}</span>
            </>
          }
        />
      )}
      {user.blog && (
        <FieldDescription
          icon={<WebsiteIcon />}
          body={
            <>
              <span>find me on</span>
              <a
                target="_blank"
                rel="noreferrer"
                href={user.blog}
                className="font-bold"
              >
                {user.blog.replace("https://", "")}
              </a>
            </>
          }
        />
      )}
      <div className="flex">
        <a
          href={user.html_url}
          rel="noreferrer"
          target="_blank"
          className="flex text-sm text-gray-500 gap-2 w-auto items-center"
        >
          <span className="">
            <ExternalLinkIcon />
          </span>
          <span>View in github</span>
        </a>
      </div>
    </div>
  );
}

export default UserInformation;
