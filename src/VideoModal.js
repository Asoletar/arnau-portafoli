import React, { useEffect, useRef } from "react";

const VideoModal = ({ project, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // 🔹 Assegura que el vídeo es reprodueixi
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4 w-3/4 max-w-4xl">
        {/* Botó per tancar */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
          onClick={() => {
            if (videoRef.current) videoRef.current.pause(); // 🔹 Pausar vídeo en tancar
            onClose();
          }}
        >
          ✖
        </button>

        {/* Títol del projecte */}
        <h3 className="text-lg font-semibold mb-4 text-center">{project.title}</h3>

        {/* Vídeo en modal */}
        <div className="relative w-full aspect-video">
          {project.media.endsWith(".mp4") ? (
            <video ref={videoRef} src={project.media} controls className="w-full h-full rounded-lg" />
          ) : (
            <img src={project.media} alt={project.title} className="w-full h-full rounded-lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
