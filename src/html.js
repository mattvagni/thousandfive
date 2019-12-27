import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                /**
                 * Blatantly stolen from overreacted.io (with minor edits ofc)
                 */
                window.__onThemeChange = function() {};

                window.__setTheme = function (newTheme) {
                  window.__theme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);

                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {
                    console.error(err);
                  }
                }

                let preferredTheme;

                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) {
                  console.error(err);
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                darkQuery.addListener(function(e) {
                  window.__setTheme(e.matches ? 'dark' : 'light')
                });

                window.__setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
