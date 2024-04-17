import { Text, Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinationItem from "../components/DefinationItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailor from "../components/GameTrailor";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) <Spinner />;

  //if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailor gameId={game?.id} />
        <GameScreenshots gameId={game?.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
