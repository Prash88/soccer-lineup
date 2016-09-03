/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule SampleData
 */
'use strict';

function singlePlayerData() {
  return (
    [
      {
        name: 'Z.Ibrahimovic',
        position: 'fc',
      }
    ]
  );
}

function manUtdPlayersData() {
  const players = [
    {
      name: 'D.De Gea',
      position: 'gk',
      number: 'DL',
    },
    {
      name: 'L.Shaw',
      position: 'dl',
      number: 'DL',
    },
    {
      name: 'A.Valencia',
      position: 'dr',
      number: 'DR',
    },
    {
      name: 'D.Blind',
      position: 'dcl',
      number: 'DC',
    },
    {
      name: 'E.Bailly',
      position: 'dcr',
      number: 'DC',
    },
    {
      name: 'Z.Ibrahimovic',
      position: 'fc',
      number: 'FC',
    },
    {
      name: 'W.Rooney',
      position: 'amc',
      number: 'AMC',
    },
    {
      name: 'H.Mkhitaryan',
      position: 'amr',
      number: 'AMR',
    },
    {
      name: 'A.Martial',
      position: 'aml',
      number: 'AML',
    },
    {
      name: 'P.Pogba',
      position: 'cml',
      number: 'MC',
    },
    {
      name: 'M.Fellaini',
      position: 'cmr',
      number: 'MC',
    },
  ];
  return players;
}

module.exports = {
  manUtdPlayersData,
  singlePlayerData,
};
