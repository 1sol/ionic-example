import Webcam from "react-webcam";
import styled from "styled-components";

const Camera = styled.div`
  height: 100%;
  .webcam {
    height: 100%;
  }
`;

const Photo = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  img {
    border: 1px solid #fff;
  }
`;

interface WebCamState {
  camRef: any;
  photo: any;
  width?: any;
  height?: any;
  cameraFormat?: any;
  handleTakePhoto: any;
  alt?: string;
  photoWidth?: string;
  photoHeight?: string;
}

const WebCam = ({
  camRef,
  photo,
  width,
  height,
  cameraFormat,
  alt,
  photoWidth,
  photoHeight,
}: WebCamState) => {
  return (
    <>
      <Camera>
        <Webcam
          audio={false}
          ref={camRef}
          width={width}
          height={height}
          screenshotFormat={cameraFormat}
          forceScreenshotSourceSize
          style={{ transform: "scaleX(-1)", objectFit: "cover" }}
        />
      </Camera>

      <Photo>
        {photo && (
          <img src={photo} alt={alt} width={photoWidth} height={photoHeight} />
        )}
      </Photo>
    </>
  );
};

export default WebCam;
