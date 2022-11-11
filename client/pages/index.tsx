import { useQuery } from "urql";
import { graphql } from "../generated";

const helloQueryDocument = graphql(`
  query helloQuery($id: String!) {
    hello(id: $id) {
      id
    }
  }
`);

const Home = () => {
  // Graphql codegen types are not being inferred.

  const [{ data }] = useQuery({
    query: helloQueryDocument,
    variables: {
      id: "string,",
    },
  });

  return <div></div>;
};

export default Home;
