import 'bootstrap-loader';

import './components/vendor/reamaze.min.js';
import './components/vendor/analytics.js';
import './components/vendor/reamaze_widget.js';

import {render} from 'react-dom';
import PackList from './components/PackList.jsx';


render(
  <PackList />,
  document.getElementById("packs")
);
