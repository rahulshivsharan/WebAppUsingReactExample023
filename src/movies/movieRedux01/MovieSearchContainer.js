import MovieSearchForm from './MovieSearchForm';
import * as ActionCreator from './action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        "movielist" : state.movieSearchReducer.movielist,
        "isLoading": state.movieSearchReducer.isLoading,
        "isError": state.movieSearchReducer.isError,
        "tableStyle": state.movieSearchReducer.tableStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "actionref" : bindActionCreators(ActionCreator, dispatch)
    }
}

const MovieSearchContainer = connect(mapStateToProps, mapDispatchToProps)(MovieSearchForm);

export default MovieSearchContainer;