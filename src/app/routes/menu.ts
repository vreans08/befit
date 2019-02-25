
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
    link: '/doctorhome',
    icon: 'icon-home',
    authorized : false
};
const consultation = {
    text: 'Consultation',
    data : 'consultation',
    link: '/doctorhome/consultation',
    icon: 'fas fa-stethoscope',
    authorized : false
};
const adminHome = {
    text: 'Admin Home',
    data : 'adminHome',
    link: '/adminHome',
    icon: 'icon-home',
    authorized : false
};
const patientMap = {
    text: 'Assign Patient',
    data : 'assignPatient',
    link: '/patientmap',
    icon: 'fas fa-user-md',
    authorized : false
};
const addQuestion = {
    text: 'Add Questions',
    data : 'addQuestions',
    link: '/addquestions',
    icon: 'far fa-edit',
    authorized : false
};
const doctorForm = {
    text: 'Doctor Form',
    data : 'doctorForm',
    link: '/doctorform',
    icon: 'fab fa-wpforms',
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
    doctorHome,
    patientMap,
    addQuestion,
    doctorForm,
    consultation
];
