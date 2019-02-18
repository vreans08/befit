
const superAdminHome = {
    text: 'Super Admin Home',
    data : 'superAdminHome',
    link: '/superadmin',
    icon: 'icon-home',
    authorized : false
};
const patientHome = {
    text: 'Patient Home',
    data : 'patientHome',
    link: '/app-patienthome',
    icon: 'icon-home',
    authorized : false
};
const doctorHome = {
    text: 'Doctor Home',
    data : 'doctorHome',
    link: '/app-doctorhome',
    icon: 'icon-home',
    authorized : false
};
const adminHome = {
    text: 'Admin Home',
    data : 'adminHome',
    link: '/app-adminhome',
    icon: 'icon-home',
    authorized : false
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};


export const menu = [
    headingMain,
    superAdminHome,
    patientHome,
    adminHome,
    doctorHome
];
