import { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/react";
import axios from "axios";
import styled from "styled-components";
import { ImageUploader } from "../../components/container";
import Webcam from "@presentational";

const SkinAnalysisContainer = styled.div`
  position: relative;
  height: 100%;
`;

const CameraButtonWrap = styled.div`
  position: fixed;
  width: 100%;
  bottom: 50px;
  padding: 0 15px;
`;

const SaveButton = styled.div``;

const CameraButton = styled.div`
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 1px solid #282828;
    z-index: 1;
  }

  button {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #282828;
  }
`;

const SkinAnalysisPage: React.FC = () => {
  const camRef = useRef<any>(null);
  const history = useHistory();
  const [imageFileList, setImageFileList] = useState<any>([]);
  const [photo, setPhoto] = useState("");

  const handleChangeImageFile = ({ fileList: newFileList }: any) => {
    setImageFileList(newFileList);
  };

  const handleTakePhoto = useCallback(() => {
    const imgSrc = camRef.current.getScreenshot();
    setPhoto(imgSrc);
  }, [camRef]);

  const handleSavePhoto = async (e: any) => {
    e.preventDefault();

    try {
      const data = await axios({
        method: "POST",
        url: "/api/hello",
        data: photo ? photo : imageFileList[0].thumbUrl || null,
        headers: {
          "Content-Type": "image/jpeg",
        },
      });

      localStorage.setItem("imageUrl", data.data.data.path);

      if (data) {
        history.push("/newcase/analysis");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <SkinAnalysisContainer>
      <IonHeader>
        <IonToolbar>
          <IonTitle>skin analysis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">skin analysis</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Webcam
          camRef={camRef}
          handleTakePhoto={handleTakePhoto}
          photo={photo}
          cameraFormat="image/jpeg"
          width="100%"
          height="100%"
          alt=""
          photoWidth="50px"
          photoHeight="50px"
        />
        <CameraButtonWrap>
          <IonGrid>
            <IonRow className="ion-justify-content-between ion-align-items-center">
              {/* <AlbumButton>
            <FileAttacher
              fileList={fileList}
              onChange={handleChangeFile}
              maxCount={1}
            />
          </AlbumButton> */}
              <IonCol>
                <SaveButton className="ion-text-left">
                  <a onClick={handleSavePhoto}>저장</a>
                </SaveButton>
              </IonCol>
              <IonCol>
                <CameraButton>
                  <button
                    onClick={() => {
                      handleTakePhoto();
                    }}
                  />
                </CameraButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </CameraButtonWrap>
        {/* <ImageUploader
          fileList={imageFileList}
          onChange={handleChangeImageFile}
          maxCount={1}
        /> */}
      </IonContent>
    </SkinAnalysisContainer>
  );
};

export default SkinAnalysisPage;
