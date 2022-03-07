
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => {
    return { todoItems: state.todoItems };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);