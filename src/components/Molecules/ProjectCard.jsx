import React, { useState, useCallback } from "react";
import { Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const ProjectCard = React.memo(({ title, description, imgUrl, videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  // Extract video ID from Loom URL
  const getVideoId = useCallback((url) => {
    const match = url?.match(/share\/([\w-]+)(?:\?sid=[\w-]+)?/);
    return match ? match[1] : null;
  }, []);

  const videoId = videoUrl ? getVideoId(videoUrl) : null;

  const handleModalOpen = useCallback(() => {
    if (videoUrl) setShowModal(true);
  }, [videoUrl]);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.style.opacity = '0.5';
    console.warn(`Failed to load image: ${imgUrl}`);
  }, [imgUrl]);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleModalOpen} style={{ cursor: videoUrl ? 'pointer' : 'default' }} data-testid="project-container">
          <div style={{ position: 'relative' }}>
            <img 
              src={imgUrl} 
              alt={title} 
              loading="lazy"
              onError={handleImageError}
              style={{ 
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: videoUrl ? 'pointer' : 'default',
                transition: 'opacity 0.3s ease'
              }} 
              data-testid="project-image"
            />
            {videoUrl && (
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
          </div>
          <div className="proj-txtx">
            <h4 data-testid="project-title">{title}</h4>
            <span data-testid="project-description">{description}</span>
          </div>
        </div>
      </Col>

      {videoUrl && videoId && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          size="lg"
          centered
          aria-label="video-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title data-testid="modal-title">{title} - Vidéo de présentation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title={`${title} - Vidéo de présentation`}
                src={`https://www.loom.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
});
