import {useContext} from "react";
import {GitHubContext} from "../providers/GitHubProvider"

function useGitHub() {
	const { gitHubState, getUser, getUserRepos, getUserStarred } = useContext(GitHubContext);

	return { gitHubState, getUser, getUserRepos, getUserStarred };

};

export default useGitHub;


