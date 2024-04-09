<<<<<<< HEAD
import { HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
=======
import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
>>>>>>> 659ed18edafc69fed5a7893188ccf775cf4db858
};

export default NavBar;
