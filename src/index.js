import { createRoot } from 'react-dom/client';
import React from 'react';
import { ConfigProvider } from 'antd';

import App from './App';

import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
	theme: {
		primaryColor: 'slategray'
	}
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
