import { Heading, Flex, Image, Text, Link } from "@chakra-ui/react";
import Logo from "assets/logo.png";
import { Fade } from "react-reveal";
import { FOOTER_MENUS } from "constant/Home/FOOTER_MENUS";
import Button from "components/Button";
import { useRedirectUrl } from "hooks/useRedicrectUrl";

import { GLOBAL_COLOR } from "constant/color";
import { FOOTER_SOCIAL } from "constant/FOOTER/FOOTER_CONSTANT";
import { useContext } from "react";
import { AppContext } from "App";

export default function Footer() {
  const { onRedirectUrl } = useRedirectUrl();
  const { isMobile } = useContext(AppContext);
  const PADDING_X = 10;
  return (
    <Fade bottom>
      <Flex
        flexDirection="row"
        gap={10}
        marginTop={PADDING_X * 2}
        paddingTop={PADDING_X}
        wrap="wrap"
      >
        <Flex
          flexDirection="column"
          gap={2}
          width={isMobile ? "100%" : "unset"}
          alignItems="center"
        >
          <Image src={Logo} alt="Logo" style={{ height: 44 }} />
          <Flex gap={1} justifyContent="center">
            {FOOTER_SOCIAL.map((social, index) => (
              <Link key={index} href={social.url} target="_blank">
                <Image
                  src={social.icon}
                  alt="Social Logo"
                  style={{ height: 36 }}
                />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="row" flex={1} gap={10} wrap="wrap">
          {FOOTER_MENUS.map((menu, menuIndex) => (
            <Flex
              key={menuIndex}
              flexDirection="column"
              style={{
                marginLeft: menuIndex === 0 && !isMobile ? "auto" : "",
              }}
              width={isMobile ? "100%" : ""}
            >
              <Heading fontSize="xl" wordBreak="break-word">
                {menu.title}
              </Heading>
              <Flex flexDirection="column" gap={2}>
                {menu.subMenus.map((subMenu, subMenuIndex) => (
                  <Button
                    key={subMenuIndex}
                    width="fit-content"
                    height="fit-content"
                    variant="ghost"
                    padding={0}
                    color={GLOBAL_COLOR.gray03}
                    _hover={
                      !subMenu.path
                        ? {
                            color: GLOBAL_COLOR.gray03,
                          }
                        : undefined
                    }
                    _active={
                      !subMenu.path
                        ? {
                            color: GLOBAL_COLOR.gray03,
                          }
                        : undefined
                    }
                    onClick={() =>
                      !subMenu.path ? null : onRedirectUrl(subMenu.path)
                    }
                  >
                    {subMenu.title}
                  </Button>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex flexDirection="row" width="100%" gap={1} justifyContent="center">
          <Text width="fit-content">Copyright© Year</Text>
          <Text
            cursor="pointer"
            width="fit-content"
            color={GLOBAL_COLOR.blue_light1}
            fontWeight="bold"
            _hover={{
              color: GLOBAL_COLOR.pink1,
            }}
          >
            KalaTek
          </Text>
        </Flex>
      </Flex>
    </Fade>
  );
}
