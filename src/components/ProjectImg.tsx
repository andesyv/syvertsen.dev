import React from 'react';
import Image from 'next/image';
import Tilt from 'react-tilt';
import { ExtendedImageData } from '../data/data';
interface Props {
  img: ExtendedImageData;
  alt: string;
}

interface ImageState {
  width: number | string;
  height: number | string;
}

class StaticImage extends React.PureComponent<Props, ImageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };

    const containerRef = React.createRef<HTMLDivElement>();

    this.componentDidMount = (): void => {
      const cont = containerRef.current;
      if (cont !== null) {
        const maxWidth = 720;

        const cw = this.state.width;
        const w = typeof cw === 'number' ? Math.min(maxWidth, cw) : maxWidth;
        // w / width = h / height
        // height * w / width = h
        const h = (this.props.img.height * w) / this.props.img.width;

        this.setState({
          width: w,
          height: h,
        });
      }
    };

    this.render = () => {
      return (
        <Tilt
          options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}
        >
          <div
            data-tilt
            className="thumbnail rounded"
            style={{ width: this.state.width, height: this.state.height }}
            ref={containerRef}
          >
            <Image
              src={`/projects/${this.props.img.filename}`}
              alt={this.props.alt}
              layout={'fill'}
              objectFit={'fill'}
            />
          </div>
        </Tilt>
      );
    };
  }
}

const ProjectImg: React.FC<Props> = (props) => <StaticImage {...props} />;

export default ProjectImg;
