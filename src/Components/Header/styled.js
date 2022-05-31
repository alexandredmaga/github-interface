import styled from "styled-components";

export const Wrapper = styled.header`
	
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 4px;

	input {
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 100%;
		height: 44px;
		margin-right: 4px;
		padding: 8px;
		font-weight: 500;
	}

	button {
		background-color: #225ed8;
		padding:8px 16px;
		margin:0 8px;
		border-radius: 8px;
		font-weight: bold;

		&:hover {
			background-color: #2c5282;
			box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
			
		}

		span {
			font-weight: bold;
			color: #fff;
		}
	}

`;