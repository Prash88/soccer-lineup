/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule SampleData
 */
'use strict';

function manUtdPlayersData() {
  const players = [
    {
      name: 'D.De Gea',
      position: 'gk',
    },
    {
      name: 'L.Shaw',
      position: 'dl',
    },
    {
      name: 'A.Valencia',
      position: 'dr',
    },
    {
      name: 'D.Blind',
      position: 'dcl',
    },
    {
      name: 'E.Bailly',
      position: 'dcr',
    },
    {
      name: 'Z.Ibrahimovic',
      position: 'fc',
    },
    {
      name: 'W.Rooney',
      position: 'amc',
    },
    {
      name: 'H.Mkhitaryan',
      position: 'amr',
    },
    {
      name: 'A.Martial',
      position: 'aml',
    },
    {
      name: 'P.Pogba',
      position: 'cml',
    },
    {
      name: 'M.Fellaini',
      position: 'cmr',
    },
  ];
  return players;
}

module.exports = {
  manUtdPlayersData,
};
