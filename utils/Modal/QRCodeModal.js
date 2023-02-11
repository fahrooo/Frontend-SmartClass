import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";
import React from "react";

const QRCodeModal = ({ isOpen, onClose, value }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent m={2}>
        <ModalHeader>QR Code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box bgColor="black" p={2}>
            <Center display="flex" flexDirection="column" bgColor="white" mt={4} mx={4}>
              <Box py={4}>
                <QRCodeSVG value={value} size="250" />
              </Box>
            </Center>
            <Center>
              <Text fontSize="5xl" fontWeight="700" color="white">
                SCAN ME
              </Text>
            </Center>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme={"red"}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QRCodeModal;
