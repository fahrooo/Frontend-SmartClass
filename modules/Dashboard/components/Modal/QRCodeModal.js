import getkelasbyid from "@/modules/Area/Kelas/api/getkelasbyid";
import {
  Box,
  Center,
  DarkMode,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";

const QRCodeModal = ({ isOpen, onClose, id }) => {
  const {
    data: resKelas,
    isLoading: isLoadingKelas,
    refetch: refetchGetKelas,
  } = getkelasbyid({
    id: Number(id),
  });

  useEffect(() => {
    setInterval(() => {
      refetchGetKelas();
    }, 1000);
  }, []);

  return (
    <DarkMode>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent m={2} color="white">
          <ModalHeader>QR Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody m={2}>
            {resKelas?.status == 200 && (
              <Box bgColor="black" p={2}>
                <Center
                  display="flex"
                  flexDirection="column"
                  bgColor="white"
                  mt={4}
                  mx={4}
                >
                  <Box py={4}>
                    <QRCodeSVG value={resKelas?.data?.code_akses} size="250" />
                  </Box>
                </Center>
                <Center>
                  <Text fontSize="5xl" fontWeight="700" color="white">
                    SCAN ME
                  </Text>
                </Center>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default QRCodeModal;
