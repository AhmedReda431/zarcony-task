function buildFormData(formData, data, parentKey = '') {
    if (
        data &&
        typeof data === 'object' &&
        !(data instanceof Date) &&
        !(data instanceof File) &&
        !(data instanceof Blob)
    ) {
        Object.keys(data).forEach((key) => {
            buildFormData(
                formData,
                data[key],
                parentKey ? `${parentKey}[${key}]` : key
            );
        });
    } else {
        let value = data;
        if (data && !(data instanceof String) && !(data instanceof Blob)) {
            value = data.toString();
        }
        if(value){

            formData.append(parentKey, value);
        }
    }
}

export const createdFormData = (payload) => {
    const formdata = new FormData();

    buildFormData(formdata, payload);

    return formdata;
};