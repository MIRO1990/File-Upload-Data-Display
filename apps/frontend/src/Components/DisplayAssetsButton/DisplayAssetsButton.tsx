import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DisplayAssetsButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleNavigateToDisplayAssets = async () => {
    navigate('/displayAssets');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={handleNavigateToDisplayAssets}>Display assets</Button>
    </div>
  );
};
