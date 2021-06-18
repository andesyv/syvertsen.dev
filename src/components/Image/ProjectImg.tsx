import React from 'react';
import Image from 'next/image';
import Tilt from 'react-tilt';

interface Props {
  filename: string;
  alt: string;
}

interface ImageState {
  width: number;
  height: number;
}

class StaticImage extends React.PureComponent<Props, ImageState> {
  constructor(props: Props) {
    super(props);
    this.state = { width: 300, height: 300 };
  }

  render() {
    const onImgLoad = ({ target }: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const img = target as HTMLImageElement;
      const maxWidth = 720;
      console.log(`width: ${img.naturalWidth}, height: ${img.naturalHeight}`);

      const w = maxWidth;
      // w / width = h / height
      // height * w / width = h 
      const h = (img.naturalHeight * w) / img.naturalWidth;

      this.setState({ width: w, height: h });
    };

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
          style={{ position: 'relative', width: this.state.width, height: this.state.height }}
        >
          <Image
            src={`/projects/${this.props.filename}`}
            alt={this.props.alt}
            onLoad={onImgLoad}
            layout={'fill'}
            objectFit={'fill'}
          />
        </div>
      </Tilt>
    );
  }
}

const ProjectImg: React.FC<Props> = (props) => <StaticImage {...props} />;

export default ProjectImg;
