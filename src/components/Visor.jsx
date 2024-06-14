import { VisorContainer } from "./styles/Clock";
export default function Visor({ time }) {
	return (
		<VisorContainer>
			<h2>{time}</h2>
		</VisorContainer>
	);
}
