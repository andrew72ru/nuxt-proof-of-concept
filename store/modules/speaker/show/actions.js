import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const retrieve = async ({ commit }, id) => {
  commit(types.SPEAKER_SHOW_TOGGLE_LOADING)

  return await fetch(id)
    .then(response => response.json())
    .then((data) => {
      commit(types.SPEAKER_SHOW_TOGGLE_LOADING)
      commit(types.SPEAKER_SHOW_SET_RETRIEVED, data)
    })
    .catch((e) => {
      commit(types.SPEAKER_SHOW_TOGGLE_LOADING)
      commit(types.SPEAKER_SHOW_SET_ERROR, e.message)
    })
}

export const reset = ({ commit }) => {
  commit(types.SPEAKER_SHOW_RESET)
}
