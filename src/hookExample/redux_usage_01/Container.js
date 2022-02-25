import Counter from './Counter';
import * as ActionCreator from './action';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        "counterVal" : state.counter.count
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        "actions" : bindActionCreators(ActionCreator, dispatch)
    }
}

const TodoCounter = connect(mapStateToProps, mapDispatchToProps)(Counter); 

export default TodoCounter;