import React from 'react';
import Image from 'next/image';
import Tilt from 'react-tilt';
import { ExtendedImageData } from '../data/data';
import Container from 'react-bootstrap/Container';
import { isWebUri } from 'valid-url';

interface Props {
  img: ExtendedImageData;
  alt: string;
}

class StaticImage extends React.PureComponent<Props, React.CSSProperties> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };

    const containerRef = React.createRef<HTMLDivElement>();
    const maxWidth = 720;
    const imageIsUri = isWebUri(this.props.img.filename) !== undefined;

    this.componentDidMount = (): void => {
      const cont = containerRef.current;
      if (cont === null) return;

      const cw = cont.offsetWidth;
      const w = Math.min(maxWidth, cw);
      // w / width = h / height
      // height * w / width = h
      const h = (this.props.img.height * w) / this.props.img.width;

      this.setState({
        width: w,
        height: h,
      });
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
          <Container data-tilt fluid>
            <div className="thumbnail rounded" ref={containerRef} style={this.state}>
              <Image
                src={imageIsUri ? this.props.img.filename : `/projects/${this.props.img.filename}`}
                alt={this.props.alt}
                layout={'fill'}
                objectFit={'fill'}
              />
            </div>
          </Container>
        </Tilt>
      );
    };
  }
}

const ProjectImg: React.FC<Props> = (props) => <StaticImage {...props} />;

export default ProjectImg;
