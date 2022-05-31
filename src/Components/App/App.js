import './App.css';
import Layout from "../Layout"
import Profile from "../Profile"
import Repositories from "../Repositories"
import NoSearch from "../NoSearch"
import useGitHub from "../../Hooks/gitHubHooks"



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
