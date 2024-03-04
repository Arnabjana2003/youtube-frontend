import React from "react";
import { useSelector } from "react-redux";

function UploadBar() {
    const isUploading = useSelector(state=>state.uploadingStatus.isUploading)
  if(isUploading) return (
    <div className="w-full flex justify-center p-1 bg-purple-300 text-sm">
        New video is uploading
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pinkName-500"></span>
      </span>
    </div>
  );
}

export default UploadBar;
