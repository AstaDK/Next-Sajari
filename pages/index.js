import { Container } from "react-bootstrap";
import HomeComponent from "../components/home";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home({}) {
  return (
    <Container>
      <HomeComponent />
    </Container>
  );
}
