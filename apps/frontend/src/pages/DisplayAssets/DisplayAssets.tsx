import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Box,
  Typography,
} from '@mui/material';
import { HomeButton } from '../../Components/HomeButton';
import { useAssetContext } from '../../dataCache/AssetsProvider';

const PAGE_SIZE = 5;

export const DisplayAssets: React.FunctionComponent = () => {
  const { assets, refreshAssets } = useAssetContext();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(assets.length / PAGE_SIZE);
  const paginatedAssets = assets.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    refreshAssets();
  }, [refreshAssets]);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Uploaded Assets
      </Typography>

      {assets.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Address</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Latitude</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Longitude</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedAssets.map((asset, index) => (
                  <TableRow key={index}>
                    <TableCell>{asset.address}</TableCell>
                    <TableCell>{asset.latitude}</TableCell>
                    <TableCell>{asset.longitude}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Typography>No assets found.</Typography>
      )}

      <Box mt={4}>
        <HomeButton />
      </Box>
    </Box>
  );
};
