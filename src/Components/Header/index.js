import React, {useState} from 'react';
import * as S from "./styled";
import useGitHub from "../../Hooks/gitHubHooks"

function Header() {
	
	const {getUser} = useGitHub();
	const [usernameForSearch, setUsernameForSearch] = useState()
	
	const submitGetUser = () => {
		
		if(!usernameForSearch) return getUser(usernameForSearch);
		return getUser(usernameForSearch)
		
		
	}

	return (
		
			<S.Wrapper>
				<input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setUsernameForSearch(event.target.value)}/>
				<button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
			</S.Wrapper>
		
	);
};

export default Header;