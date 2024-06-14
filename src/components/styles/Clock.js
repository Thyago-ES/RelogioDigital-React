import styled from "styled-components";

export const ClockContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 15px;

	border-radius: 16px;
	background: #000000;
	box-shadow: 2px 2px 10px 0 #000000;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const VisorContainer = styled.div`
	font-family: "Orbitron", sans-serif;
	font-optical-sizing: auto;
	font-style: normal;
	font-size: 2rem;
	font-weight: 700;
	color: rgba(50, 100, 255, 0.8);

	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 90px;
	height: 90px;

	background: rgba(33, 33, 33, 0.8);
	border-radius: 8px;
`;
