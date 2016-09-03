/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule DragUtil
 */
'use strict';

function getPosition(xRank, yRank): string {
  if ((yRank === 6) || (yRank === 7)) {
    return 'GK';
  } else if ((yRank === 5) && (xRank === 1 || xRank === 0 || xRank === -0)) {
    return 'DL';
  } else if ((yRank === 5) && (xRank === 3 || xRank === 4)) {
    return 'DR';
  } else if ((yRank === 5) && (xRank === 2)) {
    return 'DC';
  } else if ((yRank === 4) && (xRank === 2)) {
    return 'DM';
  } else if ((yRank === 4) && (xRank === 1 || xRank === 0 || xRank === -0)) {
    return 'WBL';
  } else if ((yRank === 4) && (xRank === 3 || xRank === 4)) {
    return 'WBR';
  } else if ((yRank === 3) && (xRank === 2)) {
    return 'MC';
  } else if ((yRank === 3) && (xRank === 1 || xRank === 0 || xRank === -0)) {
    return 'ML';
  } else if ((yRank === 3) && (xRank === 3 || xRank === 4)) {
    return 'MR';
  } else if ((yRank === 2) && (xRank === 2)) {
    return 'AMC';
  } else if ((yRank === 2) && (xRank === 1 || xRank === 0 || xRank === -0)) {
    return 'AML';
  } else if ((yRank === 2) && (xRank === 3 || xRank === 4)) {
    return 'AMR';
  } else if ((yRank === -0 || yRank === 0 || yRank === 1) && (xRank === 2)) {
    return 'FC';
  } else if ((yRank === -0 || yRank === 0 || yRank === 1) &&
    (xRank === 1 || xRank === 0 || xRank === -0)) {
      return 'FCL';
  } else if ((yRank === -0 || yRank === 0 || yRank === 1) && (xRank === 3 || xRank === 4)) {
    return 'FCR';
  }
}

module.exports = {
  getPosition,
};
