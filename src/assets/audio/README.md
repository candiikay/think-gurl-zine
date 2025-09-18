# Audio Directory

This directory contains audio files for the Think GURL Interactive Zine.

## Audio Guidelines

### Supported Formats
- **MP3** - Widely supported, good compression
- **OGG** - Open source, better compression
- **WAV** - Uncompressed, highest quality
- **WebM** - Modern browsers, good compression

### Quality Standards
- **Bitrate**: 128kbps minimum for speech, 192kbps for music
- **Sample Rate**: 44.1kHz for music, 22kHz for speech
- **Channels**: Mono for speech, stereo for music
- **Duration**: Keep files under 5MB for web performance

## Audio Categories

### Spoken Word
- **Interviews** - Conversations with contributors
- **Readings** - Audio versions of articles
- **Podcasts** - Extended discussions
- **Testimonials** - Personal stories and experiences

### Music & Sound
- **Background Music** - Ambient tracks for sections
- **Sound Effects** - UI interactions and transitions
- **Jingles** - Short audio identifiers
- **Atmospheric** - Environmental sounds and textures

### Accessibility Audio
- **Screen Reader** - Audio descriptions for visual content
- **Alternative Content** - Audio versions of text-heavy sections
- **Navigation** - Audio cues for interaction

## File Organization

```
audio/
├── spoken-word/
│   ├── interviews/
│   ├── readings/
│   └── testimonials/
├── music/
│   ├── background/
│   ├── transitions/
│   └── jingles/
├── effects/
│   ├── ui/
│   ├── ambient/
│   └── feedback/
└── accessibility/
    ├── descriptions/
    └── navigation/
```

## Naming Convention

Use descriptive, kebab-case names:
- `manifesto-reading.mp3`
- `dating-apps-interview.ogg`
- `hygiene-ambient-music.wav`
- `page-turn-sound-effect.mp3`

## Audio Implementation

### HTML5 Audio
```html
<audio controls preload="metadata">
  <source src="../audio/spoken-word/manifesto-reading.mp3" type="audio/mpeg">
  <source src="../audio/spoken-word/manifesto-reading.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio.</p>
</audio>
```

### JavaScript Control
```javascript
class AudioPlayer {
  constructor(audioElement) {
    this.audio = audioElement;
    this.isPlaying = false;
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }
}
```

### CSS Styling
```css
.audio-player {
  background: var(--lavender);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.audio-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.play-button {
  background: var(--pink);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

.progress-bar {
  flex: 1;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
```

## Accessibility

### Audio Descriptions
```html
<audio aria-describedby="audio-description">
  <source src="manifesto-reading.mp3" type="audio/mpeg">
</audio>
<div id="audio-description" class="sr-only">
  Audio reading of the manifesto article, approximately 5 minutes long.
</div>
```

### Keyboard Navigation
```javascript
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    audioPlayer.togglePlayPause();
  }
});
```

### Screen Reader Support
```html
<button aria-label="Play manifesto reading" class="play-button">
  <span class="sr-only">Play audio</span>
  <svg class="icon icon--play" aria-hidden="true">
    <!-- Play icon -->
  </svg>
</button>
```

## Performance Optimization

### Lazy Loading
```javascript
const audioElements = document.querySelectorAll('audio[data-src]');
const audioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const audio = entry.target;
      audio.src = audio.dataset.src;
      audioObserver.unobserve(audio);
    }
  });
});

audioElements.forEach(audio => audioObserver.observe(audio));
```

### Preloading Strategy
```html
<!-- Preload important audio -->
<link rel="preload" href="intro-music.mp3" as="audio" type="audio/mpeg">

<!-- Lazy load less important audio -->
<audio data-src="background-music.mp3" preload="none">
</audio>
```

## Copyright & Licensing

### Usage Rights
- **Original content** - Created specifically for this project
- **Licensed music** - Properly attributed and licensed
- **Creative Commons** - CC-licensed content with attribution
- **Public domain** - Clearly marked as such

### Attribution Format
```html
<div class="audio-attribution">
  <p>
    "Track Name" by <a href="https://artist-website.com">Artist Name</a>
    via <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </p>
</div>
```

## Audio Production

### Recording Guidelines
- **Quiet environment** - Minimize background noise
- **Consistent levels** - Maintain steady audio levels
- **Clear speech** - Enunciate clearly and speak at moderate pace
- **Quality equipment** - Use good microphone and recording software

### Editing Standards
- **Remove dead air** - Trim silence at beginning and end
- **Normalize levels** - Ensure consistent volume
- **Remove clicks/pops** - Clean up audio artifacts
- **Add fade in/out** - Smooth transitions

### Tools
- **Audacity** - Free audio editing software
- **GarageBand** - Mac audio editing
- **Reaper** - Professional audio editing
- **Online tools** - Browser-based audio editors

## Future Enhancements

### Planned Features
- **Audio transcripts** - Text versions of audio content
- **Interactive audio** - Clickable audio segments
- **Audio visualization** - Visual representations of audio
- **Voice synthesis** - Text-to-speech for accessibility

### Technical Improvements
- **Streaming audio** - Progressive loading for large files
- **Audio compression** - Advanced compression techniques
- **Crossfade transitions** - Smooth audio transitions
- **Spatial audio** - 3D audio positioning
