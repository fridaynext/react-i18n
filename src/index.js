import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_de from "./translations/de_DE/common.json";
import common_en from "./translations/en_US/common.json";


i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
	lng: 'en_US',
	resources: {
		en_US: {
			common: common_en
		},
		de_DE: {
			common: common_de
		},
	}
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
