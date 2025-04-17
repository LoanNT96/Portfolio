import { Outlet } from "react-router-dom";
import Nav from "./NavBar";
import Footer from "./Footer";
import { Flex, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "App";

const Layout = () => {
  const { isDesktop, isTablet, isMobile } = useContext(AppContext);
  const paddingX = isDesktop ? 60 : isTablet ? 20 : isMobile ? 10 : 10;
  return (
    <Flex flexDirection="column" height="100vh">
      <Flex width="100%" paddingLeft={paddingX} paddingRight={paddingX}>
        <Nav />
      </Flex>
      <Flex
        flex={1}
        flexDirection="column"
        overflow="auto"
        paddingLeft={paddingX}
        paddingRight={paddingX}
        paddingTop={20}
        id="page_body"
      >
        <Box flex={1} width="100%" zIndex={999}>
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
