import { connect } from 'react-redux';
import App from '../components/App';
import { incrementProgress } from '../actions/progressbar';

// Le composant doit-il lire les données du state ?
const mapState = (state) => ({
  progression: state.progressbar.progression,
});

// Le composant doit-il faire parvenir des données au state ?
const mapDispatch = (dispatch) => ({
  incrementProgressBar: () => {
    dispatch(incrementProgress());
  },
})

// Export du composant rendu intélligent.
export default connect(mapState, mapDispatch)(App);