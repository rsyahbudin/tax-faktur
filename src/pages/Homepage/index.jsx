import React from "react";
import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Button,
   Heading,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";

const index = () => {
   return (
      <Sidebar>
         <Box as="form" width="full" maxW="md" mx="auto" p={4}>
            <Heading as="h2" size="lg" mb={4}>
               Faktur Pajak Trans Retail Indonesia
            </Heading>
            <FormControl id="nama" isRequired>
               <FormLabel>Nama</FormLabel>
               <Input placeholder="Nama" />
            </FormControl>
            <FormControl id="idTrx" isRequired mt={4}>
               <FormLabel>ID Trx</FormLabel>
               <Input placeholder="ID Trx" />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
               <FormLabel>Email</FormLabel>
               <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="noHp" isRequired mt={4}>
               <FormLabel>No HP</FormLabel>
               <Input placeholder="No HP" />
            </FormControl>
            <FormControl id="npwp" isRequired mt={4}>
               <FormLabel>NPWP</FormLabel>
               <Input placeholder="NPWP" />
            </FormControl>
            <Button mt={4} colorScheme="red" type="submit">
               Kirim
            </Button>
         </Box>
      </Sidebar>
   );
};

export default index;
