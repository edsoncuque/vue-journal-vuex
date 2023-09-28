import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutationes from './mutations'

const journalModule = {
    namespaced: true, 
    actions,
    getters,
    mutationes,
    state
}

export default journalModule