import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Stack,
  IconButton,
  useDisclosure,
  Link,
  Image,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AppContext, routes } from "App";
import { useRedirectUrl } from "hooks/useRedicrectUrl";
import Button from "components/Button";
import { useLocation } from "react-router";
import { useContext } from "react";

export default function Nav() {
  const location = useLocation();
  const { onRedirectUrl } = useRedirectUrl();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMobile, isTablet, isDesktop } = useContext(AppContext);

  const navButtons = [
    {
      label: "Home",
      path: routes.home.path,
      onClick: () => onRedirectUrl(routes.home.path),
    },
    {
      label: "Portfolio",
      path: routes.portfolio.path,
      onClick: () => onRedirectUrl(routes.portfolio.path),
    },
    {
      label: "Services",
      path: routes.service.path,
      onClick: () => onRedirectUrl(routes.service.path),
    },
    {
      label: "Become a Partner",
      path: routes.beThePartner.path,
      onClick: () => onRedirectUrl(routes.beThePartner.path),
    },
    {
      label: "Contact Us",
      path: routes.contactUs.path,
      onClick: () => onRedirectUrl(routes.contactUs.path),
    },
  ];

  return (
    <Flex h={24} alignItems="center" justifyContent="space-between" w="100%">
      <Link>
        <Flex>
          <Image
            src={Logo}
            alt="Logo"
            style={{ height: 44 }}
            onClick={() => onRedirectUrl(routes.home.path)}
          />
        </Flex>
      </Link>

      <Flex alignItems="center">
        <Stack direction="row" spacing={7}>
          {isDesktop && (
            <>
              {navButtons.map((nav) => (
                <Button
                  key={nav.label}
                  variant="ghost"
                  isActive={
                    nav.path === "/"
                      ? location.pathname === nav.path
                      : location.pathname.includes(nav.path)
                  }
                  onClick={() => nav.onClick()}
                >
                  {nav.label}
                </Button>
              ))}
            </>
          )}

          {(isMobile || isTablet) && (
            <>
              <Button
                as={IconButton}
                icon={<HamburgerIcon />}
                onClick={onOpen}
              ></Button>
              <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent height="100%">
                  <DrawerBody>
                    <Flex flexDirection="column" alignItems="start">
                      <Button variant="ghost" alignSelf="end" onClick={onClose}>
                        <CloseIcon />
                      </Button>
                      {navButtons.map((nav) => (
                        <Button
                          key={nav.label}
                          variant="ghost"
                          onClick={() => {
                            nav.onClick();
                            onClose();
                          }}
                          isActive={
                            nav.path === "/"
                              ? location.pathname === nav.path
                              : location.pathname.includes(nav.path)
                          }
                        >
                          {nav.label}
                        </Button>
                      ))}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}
