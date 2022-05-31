import React from "react";
import {ResetCSS} from "./Global/resetCSS";
import GitHubProvider from "./Providers/GitHubProvider";
import App from "./Components/App/App"



function Providers() {
	
	return (
		<main> 
		<GitHubProvider>
    		<ResetCSS />
    		<App />
    	</GitHubProvider>
    	</main>
	);

	
};

export default Providers;