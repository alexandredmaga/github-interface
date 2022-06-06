import './App.css';
import Layout from "../layout"
import Profile from "../profile"
import Repositories from "../repositories"
import NoSearch from "../noSearch"
import useGitHub from "../../hooks/gitHubHooks"



function App() {
  
  const {gitHubState} = useGitHub();

  return (
            
    		<Layout>
    		    {gitHubState.hasUser ?  <>
                {gitHubState.loading ? (
                    <p> Loading ...</p>

                 ) : (

                    <>
                        <Profile />
                        <Repositories />
                    </>

                )}</> : <NoSearch />}
               
    			
    		</Layout>
  );
}

export default App;
