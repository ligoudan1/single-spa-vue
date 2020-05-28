import * as TYPES from './actionTypes';
import { clone } from '../utils';
const defaultState = {
    locale: localStorage.getItem('locale') || 'zh'
}
export default (state = defaultState, action) => {
    // 更新全局国际化设定
    if (action.type === TYPES.UPDATED_LOCALE) {
        let newState = clone(state);
        newState.locale = action.value;
        console.log(newState);
        // 这里进行一个全局的广播
        window.dispatchEvent(new CustomEvent('change_locale', { "detail": { 'newval': newState.locale } }));
        return newState;
    }
    return state
}