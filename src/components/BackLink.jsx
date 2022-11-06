import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
 border: 1px solid black;
margin-bottom: 2px;
border-radius: 3px;
  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
	return (
		<StyledLink to={to}>
			<HiArrowLeft size="18" />
			{children}
		</StyledLink>
	);
};