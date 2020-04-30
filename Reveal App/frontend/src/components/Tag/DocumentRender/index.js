import React from "react";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentImportedDate,
  DocumentSnippetText,
  DocumentType,
  TopTitleTypeContainer
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getEditMode,
  getFetchedDocuments,
  getSelectedDocument
} from "../../../store/reducers/DocumentReducer";
import { dark, light } from "../../../styles";
import { getTheme } from "../../../store/reducers/DarkModeReducer";
import { useFetch } from "../../../hooks/useFetch";
import { docURL, getConfigAuthorization } from "../../../store/fetchConfigUrl";
import { selectDocumentAction } from "../../../store/actions/documents/selectDocumentAction";
import { storeDocumentsAction } from "../../../store/actions/documents/storeDocumentsAction";
import { DonutSpinner } from "../../../styles/donut";

const DocumentRender = () => {
  const dispatch = useDispatch();
  const editMode = useSelector(getEditMode);
  const selectedDocument = useSelector(getSelectedDocument);
  const theme = useSelector(getTheme);
  const documents = useSelector(getFetchedDocuments);
  const [response, error, isLoading] = useFetch(
    docURL,
    getConfigAuthorization,
    storeDocumentsAction
  );
  const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

  const renderDocuments = () => {
    if (isLoading) {
      return <DonutSpinner />;
    } else if (error) {
      return <h1>Sorry an error occurred!</h1>;
    } else if (response) {
      const data = documents.map(doc => {
        return (
          <DocumentCard
            style={{
              backgroundColor:
                selectedDocument.id === doc.id && theme === "light"
                  ? light.fourthColor
                  : selectedDocument.id === doc.id && theme === "dark"
                  ? dark.fourthColor
                  : "",
              color:
                selectedDocument.id === doc.id && theme === "light"
                  ? light.secondaryColor
                  : selectedDocument.id === doc.id && theme === "dark"
                  ? dark.secondaryColor
                  : ""
            }}
            onClick={() =>
              !editMode ? dispatch(selectDocumentAction(doc)) : ""
            }
          >
            <TopTitleTypeContainer>
              <DocumentCardTitle> {truncate(doc.title, 20)}</DocumentCardTitle>
              <DocumentType>
                {doc.PDFfile.slice(doc.PDFfile.length - 4)}
              </DocumentType>
            </TopTitleTypeContainer>
            <DocumentImportedDate>
              {doc.date_uploaded.slice(0, 10)}
            </DocumentImportedDate>
            <DocumentSnippetText>
              {truncate(doc.content_text, 100)}
            </DocumentSnippetText>
          </DocumentCard>
        );
      });
      return data;
    }
  };

  return <>{renderDocuments()}</>;
};

export default DocumentRender;
