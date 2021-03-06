import Mint from "../Mint";
import { Contract } from "near-api-js";
import { DisplayNft } from "../Nft/nft";
import BuildToken from "../BuildToken";

import { SectionDescription, SectionTitle, Section, Bg, Hr } from "./styles";
import Container from "../Container";

const Dashboard = () => {
  return (
    <>
      <Bg>
        <Container>
          <SectionTitle>When Minecraft meets Blockchain</SectionTitle>
          <SectionDescription>
            Mint & Stake you Land now to enjoy the MetaCraft Metaverse!
          </SectionDescription>

          <Mint />
        </Container>
      </Bg>

      <Section>
        <Container>
          <SectionTitle>Your Lands</SectionTitle>
          <SectionDescription>
            Start build your MetaCraft Land!
          </SectionDescription>
          <DisplayNft />

          <Hr />
          <SectionTitle>Your Unclaimed $BUILD</SectionTitle>
          <SectionDescription>Show $BUILD you have earned!</SectionDescription>
          <BuildToken />
        </Container>
      </Section>
    </>
  );
};

export default Dashboard;
