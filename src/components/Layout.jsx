import React from "react";

import { Container } from "@mantine/core";
import Header from "./Header";

function Layout({ children }) {
	return (
		<Container size="xs">
			
			<Header />
			{children}
		</Container>
	);
}

export default Layout;
