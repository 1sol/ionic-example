import { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { IonRow, IonGrid, IonCol } from "@ionic/react";
// import axios from "axios";
import styled from "styled-components";
import { Webcam, ImageUploader, ProgressBar } from "@presentational";

const UploadPageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const CameraButtonWrap = styled.div`
  position: fixed;
  width: 100%;
  bottom: 30px;
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
    top: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #282828;
  }
`;

const AlbumButton = styled.div`
  .ant-upload.ant-upload-select-picture-card {
    width: 50px;
    height: 50px;
    border: 0;
  }

  .ant-upload-list-picture-card-container {
    width: 50px;
    height: 50px;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    padding: 0;
  }
`;

const UploadPage = () => {
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
    history.push("/skin/result");

    // try {
    //   const data = await axios({
    //     method: "POST",
    //     url: "/api/hello",
    //     data: photo ? photo : imageFileList[0].thumbUrl || null,
    //     headers: {
    //       "Content-Type": "image/jpeg",
    //     },
    //   });

    //   localStorage.setItem("imageUrl", data.data.data.path);

    //   if (data) {
    //   }
    // } catch (error) {
    //   return Promise.reject(error);
    // }
  };

  return (
    <UploadPageContainer>
      <Webcam
        camRef={camRef}
        handleTakePhoto={handleTakePhoto}
        photo={photo}
        cameraFormat="image/jpeg"
        width="100%"
        height="100%"
        alt=""
        photoWidth="60px"
        photoHeight="60px"
      />

      <CameraButtonWrap>
        <IonGrid>
          <IonRow className="ion-justify-content-between ion-align-items-center">
            <IonCol>
              <AlbumButton>
                <ImageUploader
                  fileList={imageFileList}
                  onChange={handleChangeImageFile}
                  maxCount={1}
                />
              </AlbumButton>
            </IonCol>
            <IonCol>
              <CameraButton className="ion-text-center">
                <button
                  onClick={() => {
                    handleTakePhoto();
                  }}
                />
              </CameraButton>
            </IonCol>
            <IonCol>
              <SaveButton className="ion-text-right">
                <button onClick={handleSavePhoto}>저장</button>
              </SaveButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </CameraButtonWrap>

      {photo && <ProgressBar />}
    </UploadPageContainer>
  );
};

export default UploadPage;
