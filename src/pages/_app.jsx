import "@/styles/globals.css";
import GeneralLayout from "../components/general-layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
    </ChakraProvider>
  );
}
