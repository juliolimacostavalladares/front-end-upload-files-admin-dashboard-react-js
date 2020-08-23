import React , { Component } from 'react';

import { Route } from 'react-router-dom';

import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "../services/api";


import FileList from '../components/FileList';
import MainFileList from '../components/MainFileList';
import Upload from '../components/Upload';
import Dashboard from '../page/Dashboard';

class Routes extends Component {
  state = {
    uploadedFiles: [],
    mainUploadedFiles: []
  };

  async componentDidMount() {
    const response = await api.get("upload");

    this.setState({
      mainUploadedFiles: response.data.map(file => ({
        id: file.id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 60,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("upload", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`upload/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }
    
    Upload = () => {
      const { uploadedFiles } = this.state;
      return(
        <Upload onUpload={this.handleUpload} files={uploadedFiles} />
      )
    }

    FileList = () => {
      const { uploadedFiles } = this.state;
      return(
        <FileList files={uploadedFiles} onDelete={this.handleDelete} />
      )
    }

    MainFileList = () => {
      const { mainUploadedFiles } = this.state;
      return(
        <MainFileList files={mainUploadedFiles} onDelete={this.handleDelete} />
      )
    }
    render() {
        const { uploadedFiles } = this.state;
    return (
        <>
            <Route exact path="/" component={Dashboard} />
            <Route path="/arquivos" component={this.Upload} /> 
            {!!uploadedFiles.length && (
            <Route path="/arquivos" component={this.FileList} />
            )}
            <Route path="/lista-de-arquivos" component={this.MainFileList} />
        </>
    );
   };
}

export default Routes;