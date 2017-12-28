import React from 'react';
import PropTypes from 'prop-types';

const LayoutIndex = (props) => (
  <div style={{ outline: '1px solid red' }}>
    <h1>{props.data.site.siteMetadata.title}</h1>
    <div>{props.children()}</div>
  </div>
);

LayoutIndex.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LayoutIndex;
