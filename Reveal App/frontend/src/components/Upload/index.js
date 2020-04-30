import React from "react";

import { UploadBottomContainer, UploadTopContainer } from "./styles";
import MyDropzone from "./Dropzone";
import SearchBarTop from "../SearchBarTop";

const Upload = () => {
  return (
    <UploadBottomContainer>
      <UploadTopContainer>
        <div>
          <h2>Uploads</h2>
        </div>
      </UploadTopContainer>
      <MyDropzone />
    </UploadBottomContainer>
  );
};

export default Upload;
