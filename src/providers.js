import React from "react";
import {ResetCSS} from "./global/resetCSS";
import GitHubProvider from "./providers/GitHubProvider";
import App from "./components/app/App"



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