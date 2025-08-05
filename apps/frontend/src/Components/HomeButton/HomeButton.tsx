import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomeButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleNavigateHome = async () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={handleNavigateHome}>Home</Button>
    </div>
  );
};
