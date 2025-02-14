import React from 'react';
import Image from 'next/image';
import { isWebUri } from 'valid-url';
//import Tilt from 'react-tilt';
//import { ExtendedImageData } from '../data/data';
//import Container from 'react-bootstrap/Container';

export interface ImageData {
  uri: string;
  alt: string;
  width: number;
  height: number;
}

export function instanceOfImageData(obj: object): obj is ImageData {
  return 'uri' in obj && 'alt' in obj && 'width' in obj && 'height' in obj;
}

export function assertIsImageData(value: object): asserts value is ImageData {
  if (!instanceOfImageData(value)) throw new Error('Not ExtendedImageData');
}

const isGif = (url: string) => url.slice(url.length - 4) === '.gif'

//class StaticImage extends React.PureComponent<ImageData, React.CSSProperties> {
//  constructor(props: ImageData) {
//    super(props);
//    this.state = {
//      width: '100%',
//      height: '100%',
//    };
//
//    const containerRef = React.createRef<HTMLDivElement>();
//    const maxWidth = 720;
//    const imageIsUrl = isWebUri(this.props.uri) !== undefined;
//
//    this.componentDidMount = (): void => {
//      const cont = containerRef.current;
//      if (cont === null) return;
//
//      const cw = cont.offsetWidth;
//      const w = Math.min(maxWidth, cw);
//      // w / width = h / height
//      // height * w / width = h
//      const h = (this.props.height * w) / this.props.width;
//
//      this.setState({
//        width: w,
//        height: h,
//      });
//    };
//
//    this.render = () => {
//      return (
////        <Tilt
////          options={{
////            reverse: false,
////            max: 8,
////            perspective: 1000,
////            scale: 1,
////            speed: 300,
////            transition: true,
////            axis: null,
////            reset: true,
////            easing: 'cubic-bezier(.03,.98,.52,.99)',
////          }}
////        >
////          <Container data-tilt fluid>
//            <div className="thumbnail rounded" ref={containerRef} style={this.state}>
//              <Image
//                src={imageIsUrl ? this.props.uri : `/projects/${this.props.uri}`}
//                alt={this.props.alt}
//                layout={'fill'}
//                objectFit={'fill'}
//                unoptimized={isGif(this.props.uri)}
//              />
//            </div>
////          </Container>
////        </Tilt>
//      );
//    };
//  }
//}

//const ProjectImg: React.FC<ImageData> = (props) => <StaticImage {...props} />;

//export default ProjectImg;

export default function ProjectImg(props: ImageData) {
//  assertIsImageData(props);
  console.log("Rendering %o", props);
  const imageIsUrl = isWebUri(props.uri) !== undefined;
  return (
    <Image
      src={imageIsUrl ? props.uri : `/projects/${props.uri}`}
      alt={props.alt}
      width={props.width}
      height={props.height}
//        style={{
//            objectFit: 'contain' // 'fill'
//        }}
//        layout={'fill'}
//        objectFit={'fill'}
      unoptimized={isGif(props.uri)}
    />
  );
}

