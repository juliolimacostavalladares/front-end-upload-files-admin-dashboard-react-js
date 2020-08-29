import React, { Component } from "react";
import Dropzone from "react-dropzone";

import SideBar from "../SideBar";
import Header from "../Header";
import { DropContainer, UploadMessage } from "./styles";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  render() {
    const { onUpload } = this.props;
    return (
      <>
        <Header />
        <SideBar />
        <main
          role="main"
          style={{ marginTop: "200px" }}
          className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
        >
          <Dropzone
            accept="audio/*,image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onDropAccepted={onUpload}
          >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {this.renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
            )}
          </Dropzone>
        </main>
      </>
    );
  }
}
