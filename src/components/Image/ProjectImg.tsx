import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
  filename: string;
  alt: string;
}

interface ImageNode {
  node: {
    name: string;
    relativePath: string;
    childImageSharp: {
      fluid: FluidObject;
    };
    publicURL: string;
  };
}
interface QueryData {
  images: {
    edges: ImageNode[];
  };
}

const ProjectImg: React.FC<Props> = ({ filename, alt }) => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1366) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
  if (!image) return null;

  return image.node.childImageSharp ? (
    <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
  ) : (
    <img alt={alt} src={image.node.publicURL} width="100%" />
  );
};
export default ProjectImg;
