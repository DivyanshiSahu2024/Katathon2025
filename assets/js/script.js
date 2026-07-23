// Basic interactions: mobile nav toggle + smooth scroll + demo play-button
document.addEventListener('DOMContentLoaded', function() {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // hide mobile nav after click
        if (window.innerWidth <= 880) {
          document.querySelector('.nav').style.display = '';
        }
      }
    });
  });

  // Play button demo placeholder — could open a modal or link
  const playBtn = document.querySelector('.play-btn');
  playBtn && playBtn.addEventListener('click', () => {
    alert('Demo / video placeholder — link your video or modal here.');
  });
});
var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('yt-background', {
//     videoId: 'BnWqhTO-7c8&t=52s',  // <-- REPLACE WITH YOUR YOUTUBE VIDEO ID
//     playerVars: {
//       autoplay: 1,
//       mute: 1,
//       controls: 0,
//       showinfo: 0,
//       modestbranding: 1,
//       loop: 1,
//       playlist: 'BnWqhTO-7c8&t=52s',  // must match videoId for looping
//       fs: 0,
//       rel: 0,
//       enablejsapi: 1
//     },
//     events: {
//       onReady: function (event) {
//         event.target.playVideo();
//       }
//     }
//   });
// }