import React, {useState, useEffect} from 'react';
import * as S from "./styled";
import useGitHub from "../../hooks/gitHubHooks"

function Header() {
	
	const {getUser} = useGitHub();
	const [usernameForSearch, setUsernameForSearch] = useState()
	const [usernameInput, setUsernameInput] = useState('')
	
	


	const submitGetUser = () => {


		if(usernameForSearch.trim().length > 0) {
			 getUser(usernameForSearch)
			 setUsernameInput('')

		};
		return getUser(usernameForSearch)

		
	}

	useEffect(() => {
		setUsernameForSearch(usernameInput)
	},[usernameInput]);

	return (
		
			<S.Wrapper>
				<input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setUsernameInput(event.target.value)} value={usernameInput}  />
				<button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
			</S.Wrapper>
		
	);
};

export default Header;