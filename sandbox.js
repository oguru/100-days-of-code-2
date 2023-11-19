const useState = (initialValue) => {
    let value = initialValue;

    const setValue = (newValue) => {
        if (typeof newValue === 'function') {
            value = newValue(value);
            return;
        }
        value = newValue;
    }

    return [value, setValue];
}