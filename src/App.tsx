import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import theme from './theme/theme';
import '@fontsource/inter';
import Layout from './components/Layout';
import ConnectButton from './components/ConnectButton';
import AccountModal from './components/AccountModal';

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}
