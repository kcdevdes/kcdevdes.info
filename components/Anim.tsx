import Lottie from 'react-lottie';
import DolphinAnimation from '../public/dolphin.json';

const Anim = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DolphinAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={400} height={400} />
    </div>
  );
};

export default Anim;
