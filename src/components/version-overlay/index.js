import React from 'react';
import moment from 'moment';

import './version-overlay.scss';

/**
 * Version overlay
 */
const VersionOverlay = ({ buildNum = process.env.UI_BUILD_NUM,
                          uiEnv = process.env.UI_ENV,
                          buildDate = process.env.UI_BUILD_DATE }) => {
  if (buildDate) {
    buildDate = moment(new Date(buildDate)).toISOString();
  }

  if (uiEnv === 'prod') {
    return null;
  }

  return (
    <div className="overlay">
      <div>{buildNum} - {uiEnv}</div>
      {buildDate && <div>{buildDate}</div>}
    </div>
  );
};

export default VersionOverlay;
