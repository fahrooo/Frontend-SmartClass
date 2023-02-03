import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <NextNProgress
        height={5}
        color="#6994C9"
        options={{ showSpinner: false }}
      />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
