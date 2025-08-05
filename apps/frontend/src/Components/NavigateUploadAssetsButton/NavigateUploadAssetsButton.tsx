import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavigateUploadAssetsButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleNavigateToUploadAssets = async () => {
    navigate('/uploadAssets');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={handleNavigateToUploadAssets}>Upload assets</Button>
    </div>
  );
};
