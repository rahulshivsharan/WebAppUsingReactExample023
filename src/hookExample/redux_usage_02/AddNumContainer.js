import AddNum from './AddNum';
import * as ActionCreator from './action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        "sum" : state.addNumReducer.sum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "actionref" : bindActionCreators(ActionCreator, dispatch)
    }
}

const AddNumContainer = connect(mapStateToProps, mapDispatchToProps)(AddNum); 

export default AddNumContainer;