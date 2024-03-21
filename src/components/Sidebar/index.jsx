// src/components/Layout.jsx
import React from "react";
import { Box, Center, Flex, Image, Link } from "@chakra-ui/react";

const Layout = ({ children }) => {
   return (
      <Flex minH="100vh">
         <Box bg="red.800" w="250px" p={4}>
            <Image src="/path/to/your/logo.png" alt="Logo" mb={4} />
            <div className="flex ">
               <Link href="#" color="white" mb={2}>
                  Buat Faktur Pajak
               </Link>
            </div>
            <div>
               <Link href="#" color="white" mb={2}>
                  Proses Faktur Pajak
               </Link>
            </div>
         </Box>
         <Box flex="1" p={4}>
            {children}
         </Box>
      </Flex>
   );
};

export default Layout;
