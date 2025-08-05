import { Box, Typography, List, Paper } from '@mui/material';
import { CompanyListItem, NavigateUploadAssetsButton } from '../../Components';
import { DisplayAssetsButton } from '../../Components/DisplayAssetsButton';

const companyIds = ['Company-001', 'Company-002', 'Company-003'];

export const Home: React.FunctionComponent = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        <Typography variant="h6" gutterBottom>
          Companies
        </Typography>
        <NavigateUploadAssetsButton />
        <DisplayAssetsButton />
      </div>

      <Paper elevation={3} sx={{ maxWidth: '100%', height: 500, maxHeight: 500, overflow: 'auto' }}>
        <List>
          {companyIds.map(companyId => (
            <CompanyListItem companyId={companyId} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};
