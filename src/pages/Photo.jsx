import { useNavigate, useParams } from "react-router-dom";
import usePhotos from '../hooks/usePhotos';
import { CentralTitle, FullPageCenter } from '../styled';
import { Spinner } from '../components';

function Photo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { photo, error, isLoading } = usePhotos(id);
  return isLoading ?
    <FullPageCenter><Spinner /></FullPageCenter> :
    error ? (
      <FullPageCenter>
        <p>Oops, looks like we've encountered an error. Well, isn't this embarrassing? Please refresh your page to get rid of this message.</p>
      </FullPageCenter>
    ) : (
      <section>
        <CentralTitle>Photo with an id of #{id}</CentralTitle>
        <div style={{ textAlign: "center" }}>
          <img
            width={550}
            height={550}
            src={photo.url}
            alt={photo.title}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
      </section>
    )
}

export default Photo;