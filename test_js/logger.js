import {
    type_log,
    type_warning,
    type_error
} from './js/constant.js'

function logger(log, type = type_error) {
    console[type](log)
}

export default logger('Message');