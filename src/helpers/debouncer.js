export function debouncerDecorator(f, tempo) {
    let _timeouteCode = null
    function decorada() {
        if (_timeouteCode) {
            clearTimeout(_timeouteCode)
        }
        const _this = this
        const _arguments = arguments
        _timeouteCode = setTimeout(() => {
            f.apply(_this, _arguments)
            _timeouteCode = null
        }, tempo)
    }
    return decorada
}
