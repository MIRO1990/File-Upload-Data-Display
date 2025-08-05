import { FileUploader } from '../../Components';
import { DisplayAssetsButton } from '../../Components/DisplayAssetsButton';
import { HomeButton } from '../../Components/HomeButton';

export const UploadCompanyAssetsPage: React.FunctionComponent = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <FileUploader />
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HomeButton />
        <DisplayAssetsButton />
      </div>
    </div>
  );
};
