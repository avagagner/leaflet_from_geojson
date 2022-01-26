var map = L.map('mapid').setView([38.64934369526061, -90.26836158466185], 4);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Albuquerque",
        "Population": "100,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.644287109375,
          35.110921809704756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Denver",
        "Population": "1,000,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.9853515625,
          39.740986355883564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Pueblo",
        "Population": "1,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.56787109374999,
          38.272688535980976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Bloomfield",
        "Population": "10,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.984619140625,
          36.73888412439431
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -106.5234375,
            35.10193405724606
          ],
          [
            -106.41357421875,
            35.37113502280101
          ],
          [
            -106.0400390625,
            35.567980458012094
          ],
          [
            -105.79833984375,
            35.69299463209881
          ],
          [
            -105.6005859375,
            35.47856499535729
          ],
          [
            -105.40283203124999,
            35.460669951495305
          ],
          [
            -105.09521484375,
            35.69299463209881
          ],
          [
            -104.83154296875,
            35.94243575255426
          ],
          [
            -104.74365234375,
            36.049098959065645
          ],
          [
            -104.6337890625,
            36.2265501474709
          ],
          [
            -104.6337890625,
            36.421282443649496
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "has baseball field": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30452728271484,
              38.6326955080123
            ],
            [
              -90.26504516601562,
              38.62907483147576
            ],
            [
              -90.26727676391602,
              38.63229321964905
            ],
            [
              -90.26590347290038,
              38.64382459083146
            ],
            [
              -90.30057907104492,
              38.64757859040289
            ],
            [
              -90.30452728271484,
              38.6326955080123
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "has baseball field": "no"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.21843910217285,
              38.61492562012486
            ],
            [
              -90.2142333984375,
              38.61418790695693
            ],
            [
              -90.21371841430664,
              38.617272838823226
            ],
            [
              -90.21775245666504,
              38.61801052026558
            ],
            [
              -90.21843910217285,
              38.61492562012486
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "has baseball field": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26907920837402,
              38.60493231535938
            ],
            [
              -90.2428150177002,
              38.602987147919194
            ],
            [
              -90.24161338806152,
              38.60701157397344
            ],
            [
              -90.25843620300293,
              38.60882249206389
            ],
            [
              -90.25629043579102,
              38.616401023701194
            ],
            [
              -90.25980949401855,
              38.61653514979426
            ],
            [
              -90.26229858398436,
              38.6121759233945
            ],
            [
              -90.2625560760498,
              38.60929198188589
            ],
            [
              -90.26779174804688,
              38.60942612127077
            ],
            [
              -90.26907920837402,
              38.60493231535938
            ]
          ]
        ]
      }
    }
  ]
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.["has baseball field"]) {
            case 'yes': return {color: "#C8C9C7"};
            case 'no':   return {color: "#003DA5"};
        }
    }
}).addTo(map);
