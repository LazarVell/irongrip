import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDgxMGVmZmQzYTFhM2JjYzdhMDRhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTM2Nzg2NCwiZXhwIjoxNjQ1OTcyNjY0fQ.1T3F72Sy9kaj8Fce7OdmYdCVZvBuzPMFZBMcX5a6N1w"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});