import { Howl } from 'howler';
import navigationItemHoverSrc from 'assets/sounds/navigation-item-hover.mp3';

const sound = new Howl({
  src: navigationItemHoverSrc,
});

const handleMouseEnter = () => {
  sound.play();
};

const handleMouseLeave = () => {
  sound.stop();
};

export {
  handleMouseEnter,
  handleMouseLeave,
};
