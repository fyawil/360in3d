function PitchVideo() {

    return (
      <>
        <div id="video-container">
          <video id="pitch-video" autoPlay muted loop controls>
            <source src='/PitchVideo.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  }
  
  export default PitchVideo