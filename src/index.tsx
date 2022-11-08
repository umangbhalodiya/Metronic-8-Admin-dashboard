import ReactDOM from 'react-dom'
// Redux
// https://github.com/rt2zz/redux-persist
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store, {persistor} from './setup/redux/Store'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'

// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './_metronic/assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */

/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store)

Chart.register(...registerables)

ReactDOM.render(
  <MetronicI18nProvider>
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </MetronicI18nProvider>,
  document.getElementById('root')
)
