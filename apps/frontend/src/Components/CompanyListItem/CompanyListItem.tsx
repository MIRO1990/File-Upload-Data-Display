import type React from 'react';
import { useCallback } from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { CompanyId } from '../../entities';

export const CompanyListItem: React.FunctionComponent<{ companyId: CompanyId }> = ({
  companyId,
}) => {
  const navigate = useNavigate();

  const handleCompanyClick = useCallback<React.MouseEventHandler<HTMLLIElement>>(async () => {
    console.log(companyId);
    navigate('/displayAssets');
  }, [companyId, navigate]);

  return (
    <ListItem key={companyId} onClick={handleCompanyClick}>
      <ListItemText primary={companyId} />
    </ListItem>
  );
};
