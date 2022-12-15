import { AxiosError } from "axios"

export interface IPopularReduserState{
    selectedLanguage: string,
    repos: IRepos[],
    loading: boolean,
    error: AxiosError | null
}
export interface IRepos{    
    owner: {
        avatar_url: string,
        login: string,
    }
    name: string,
    html_url: string,
    stargazers_count: number,
}
export interface IPlayerPreview{
    userimg:  string,
    username: string,
    children: JSX.Element   
}

export interface IInputProps {
    label: string;
    id: string;
}
export interface IBattleReduserState{
    playerOneName: string,
    playerTwoName: string,
    playerOneImage: string,
    playerTwoImage: string,
    winner: null ,
    loser: null,
    loading: boolean,
    error: AxiosError | null
}

