import { getProducts } from "@/api/products";
import CustomPagination from "@/components/CustomPagination";
import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const metadata = {
  title: "Pagina Principa",
  description: "Pagina Principa",
};

export default async function HomePage({ searchParams }) {
  const page = parseInt(searchParams.page) || 0;
  const data = await getProducts(10, (page - 1) * 10);
  const { products, total } = data;

  return (
    <Box
      sx={{
        my: "2rem",
        pb: "2rem",
      }}
    >
      <Typography variant="h4" align="center">
        Productos Disponibles:{" "}
      </Typography>

      <Box
        sx={{
          my: "1.5rem",
          mx: "2.5rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell align="left">Precio</TableCell>
                <TableCell align="left">Valoracion</TableCell>
                <TableCell align="left">Imagen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product) => (
                <TableRow
                  key={product.id}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{product.id}</TableCell>
                  <TableCell align="left">{product.title}</TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.rating}</TableCell>
                  <TableCell align="left">
                    <Image
                      src={product.thumbnail}
                      alt={product.description}
                      width={100}
                      height={100}
                      priority  
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CustomPagination count={total/10}/>
        </TableContainer>
      </Box>
    </Box>
  );
}
