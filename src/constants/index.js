// Login Page
export const APP_INIT = "APP_INIT";


// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// ESTABLISH Page
export const HTTP_ESTABLISH_FETCHING = "HTTP_ESTABLISH_FETCHING";
export const HTTP_ESTABLISH_SUCCESS = "HTTP_ESTABLISH_SUCCESS";
export const HTTP_ESTABLISH_FAILED = "HTTP_ESTABLISH_FAILED";

// ESTABLISH Edit Page
export const HTTP_ESTABLISH_EDIT_FETCHING = "HTTP_ESTABLISH_EDIT_FETCHING";
export const HTTP_ESTABLISH_EDIT_SUCCESS = "HTTP_ESTABLISH_EDIT_SUCCESS";
export const HTTP_ESTABLISH_EDIT_FAILED = "HTTP_ESTABLISH_EDIT_FAILED";
export const HTTP_ESTABLISH_EDIT_INITIALED = "HTTP_ESTABLISH_EDIT_INITIALED";

// Transaction Edit Page
export const HTTP_TRANSACTION_FETCHING = "HTTP_TRANSACTION_FETCHING";
export const HTTP_TRANSACTION_SUCCESS = "HTTP_TRANSACTION_SUCCESS";
export const HTTP_TRANSACTION_FAILED = "HTTP_TRANSACTION_FAILED";

// Detail Page
export const HTTP_DETAIL_FETCHING = "HTTP_DETAIL_FETCHING";
export const HTTP_DETAIL_SUCCESS = "HTTP_DETAIL_SUCCESS";
export const HTTP_DETAIL_FAILED = "HTTP_DETAIL_FAILED";

//View Staff
export const HTTP_STAFF_FETCHING = "HTTP_STAFF_FETCHING";
export const HTTP_STAFF_SUCCESS = "HTTP_STAFF_SUCCESS";
export const HTTP_STAFF_FAILED = "HTTP_STAFF_FAILED";

// export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
// export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
export const E_USER_CANCELLED = 'E_USER_CANCELLED'
export const E_UNKNOWN = 'E_UNKNOWN'
export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK'

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.'
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.'


export const apiUrl = "http://localhost:8085/api/v2";
// export const apiUrl = "https://voyagesafetybackend.ninja/api/v2";
//export const apiBlockChain = "http://localhost:4000/vaccination"
export const apiBlockChain = "https://voyage-hospital-backend.herokuapp.com";
export const apiCovidUrl = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";
export const apiCovidAllUrl = "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all";

export const keycryptr = "voyageSafetySecretKey";

export const YES = 'YES'
export const NO = 'NO'
export const OK = 'ok'
export const NOK = 'nok'

export const server = {
    LOGIN_URL: `authen/login`,
    REGISTER_URL: `authen/register`,
    ESTABLISH_URL: `establishment`,
    DETAIL_URL: `detail`,
    TRANSACTION_URL: `transaction`,
    UPDATE_STATUS: `authen/updatevaccine`,
    LOGIN_PASSED: `yes`,
    LOGIN_USER: `authen/info`,
    EDIT_USER: `authen/update`,
    RESET_PASSWORD: `authen/resetpassword`,
    UPDATE_PASSWORD: `authen/updatepassword`,
    UPLOAD: `authen/upload`,
    VACCINATION: `vaccination/vaccine`,
    STAFF: `establishment/staff`,
    MYESTABLISHMENT: `/establishment/owner`,
    DELETEIMAGE: `/establishment/deleteimage`,
    ADDMOREIMAGE: `/establishment/addmoreimage`,
    CONFIRM: `authen/confirmbooking`,
}

