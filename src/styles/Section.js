import React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.div`
	width: ${(props) => props.width};
	height: auto;
	background-color: ${(props) => props.backgroundColor};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	border-radius: ${(props) => props.curved};
	overflow: ${(props) => props.overflow};
	z-index: 1;
	display: flex;
	flex-wrap: wrap;
	${(props) =>
		(props.xLarge &&
			css`
				width: 85%;
				height: auto;
			`) ||
		(props.large &&
			css`
				width: 50%;
				height: auto;
				min-width: 150px;
			`) ||
		(props.small &&
			css`
				width: 35%;
				height: auto;
				min-width: 75px;
			`)}
	${(props) =>
		props.shadowed &&
		css`
			-webkit-box-shadow: 7px 4px 5px 0px rgba(0, 0, 0, 1);
			-moz-box-shadow: 7px 4px 5px 0px rgba(0, 0, 0, 1);
			box-shadow: 7px 4px 4px 0px rgba(0, 0, 0, 1);
		`}
      ${(props) =>
		props.textCentered &&
		css`
			text-align: center;
		`}
      ${(props) =>
		props.centered &&
		css`
			justify-content: center;
			align-items: center;
		`}

      ${(props) =>
		props.noSelect &&
		css`
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			-webkit-tap-highlight-color: transparent;
			user-select: none;
		`}
`;
export default Section;
