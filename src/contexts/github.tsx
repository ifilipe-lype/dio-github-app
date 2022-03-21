import { createContext, ReactNode, useContext, useState } from "react";
import { IGithubUser } from "../models";

interface IGithubContextProps {
    activeUsername: string;
    setActiveUsername: (username: string) => void;
    activeUser: IGithubUser | null,
    activeUserRepos: any[];
}

const GithubContextDefaultValues: IGithubContextProps = {
    activeUsername: "",
    setActiveUsername(username: string){},
    activeUser: null,
    activeUserRepos: []
}

export const GithubContext = createContext<IGithubContextProps>(GithubContextDefaultValues);

export function GithubContextProvider({ children }: { children: ReactNode }){
    const data = useGithubContext();

    return <GithubContext.Provider value={data}>{children}</GithubContext.Provider>
}

export const useGithub = () => useContext(GithubContext);

const useGithubContext = () => {
    const [activeUsername, setActiveUsername] = useState("");
    const [activeUser, setActiveUser] = useState<IGithubUser | null>(null);
    const [activeUserRepos, setActiveUserRepos] = useState([]);

    return Object.freeze({
        activeUsername,
        setActiveUsername,
        activeUser,
        setActiveUser,
        activeUserRepos,
        setActiveUserRepos
    })
}
