---
title:  "Typography post"
date: 2017-05-28
---

Maecenas faucibus [This is a link](https://google.com). Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

**Some bold text** with some _italic text_ oh. Also, some code: `const foo = 1;`

## This is level two

Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

```js
/**
 * A hypothetical function.
 * @param  {String} [someString='foo'] The best string
 * @param  {Number} [someNumber=1]     Your favourite number
 * @return {String}                    The result of this function
 */
function(someString='foo', someNumber=1) {
    return someString + someNumber;
}
```

## This is level two

Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

```js
import React from 'react';
import PropTypes from 'prop-types';
import 'reset-css/reset.css';

import styles from './styles.module.scss';

// This is a comment.

/**
 * Omg
 * this is another comment
 */
const LayoutIndex = (props) => (
  <div className={styles.wrapper}>
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
```

### This is level three

Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

> Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.

---

# This is a level one heading

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
