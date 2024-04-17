import { SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
