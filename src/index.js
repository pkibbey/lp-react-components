import 'react-app-polyfill/ie11'
import '@webcomponents/custom-elements'

import reactToWeb from 'react-to-webcomponent'
import React from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button'
import InputField from './components/InputField'
import SelectField from './components/SelectField'
import LoadingDots from './components/LoadingDots'
import ErrorText from './components/ErrorText'
import Modal from './components/Modal'
import Checkbox from './components/Checkbox'

export { default as theme } from './theme'

customElements.define('lp-button', reactToWeb(Button, React, ReactDOM))
customElements.define('lp-input-field', reactToWeb(InputField, React, ReactDOM))
customElements.define(
  'lp-select-field',
  reactToWeb(SelectField, React, ReactDOM)
)
customElements.define(
  'lp-loading-dots',
  reactToWeb(LoadingDots, React, ReactDOM)
)
customElements.define('lp-error-text', reactToWeb(ErrorText, React, ReactDOM))
customElements.define('lp-modal', reactToWeb(Modal, React, ReactDOM))
customElements.define('lp-checkbox', reactToWeb(Checkbox, React, ReactDOM))
