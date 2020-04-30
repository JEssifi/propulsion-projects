import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropzoneWrapper } from "./styles";
import { useDispatch } from "react-redux";
import { uploadDocumentsFunction } from "../../../store/actions/documents/uploadDocumentsAction";

const MyDropzone = () => {
  const dispatch = useDispatch();
  const maxSize = 100000000;



  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(item => {
      const formData = new FormData()
      formData.append('PDFfile', item, item.name)
      dispatch(uploadDocumentsFunction(formData));
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    acceptedFiles,
    rejectedFiles
  } = useDropzone({ onDrop, accept: ".pdf", maxSize: maxSize });

  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <DropzoneWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {!isDragActive && "Click here or drop a file to upload! (.pdf only)"}
      {isDragActive && !isFileTooLarge && "Drop it like it's hot!"}
      {isFileTooLarge && <p className="text-danger mt-2">File is too large.</p>}
      <div>
        {acceptedFiles.length > 0 && <h2>Accepted files</h2>}
        {acceptedFiles.length > 0 &&
          !isFileTooLarge &&
          acceptedFiles.map(acceptedFile => (
            <p
              key={acceptedFile.name}
              className="list-group-item list-group-item-success"
            >
              {acceptedFile.name} - {Math.round(acceptedFile.size / 1000)} kb
            </p>
          ))}
      </div>
      <div>
        {rejectedFiles.length > 0 && <h2>Rejected files</h2>}
        {rejectedFiles.length > 0 &&
          rejectedFiles.map(rejectedFile => (
            <p
              key={rejectedFile.name}
              className="list-group-item list-group-item-success"
            >
              {rejectedFile.name} - {Math.round(rejectedFile.size / 1000)} kb
            </p>
          ))}
      </div>
    </DropzoneWrapper>
  );
};

export default MyDropzone;
