import usePhotos from "../hooks/usePhotos";
import { FullPageCenter, Gallery, CentralTitle } from '../styled';
import { Spinner } from '../components';
import { useNavigate } from "react-router-dom";

const PhotoItem = ({ photo }) => {
  const navigate = useNavigate();
  const { url, title } = photo;
  return (
    <img
      width={200}
      height={200}
      src={url}
      alt={title}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/photos/${photo.id}`)}
    />
  );
}

function Dashboard() {
  const {
    photos,
    error,
    isLoading
  } = usePhotos();
  return isLoading ?
    <FullPageCenter><Spinner /></FullPageCenter> :
    error ? (
      <FullPageCenter>
        <p>Oops, looks like we've encountered an error. Well, isn't this embarrassing? Please refresh your page to get rid of this message.</p>
      </FullPageCenter>
    ) : (
      <section>
        <CentralTitle>Dashboard Gallery</CentralTitle>
        <Gallery>
          {photos.map(photo => <PhotoItem key={photo.id} photo={photo} />)}
        </Gallery>
      </section>
    )
}

export default Dashboard;