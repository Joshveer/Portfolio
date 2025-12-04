"use client";

import { usePathname } from "next/navigation";
import { Row, ToggleButton } from "@once-ui-system/core";

import { routes, about } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Row className={styles.position} position="sticky" as="header" zIndex={9} fillWidth padding="8">
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s">
              {routes["/about"] && (
                <ToggleButton
                  prefixIcon="person"
                  href="/about"
                  selected={pathname === "/about" || pathname === "/"}
                />
              )}
            </Row>
          </Row>
        </Row>
        <Row fillWidth horizontal="end" vertical="center" style={{ paddingRight: 12 }}>
          <ThemeToggle />
        </Row>
      </Row>
    </>
  );
};
