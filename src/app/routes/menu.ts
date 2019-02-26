
const superAdminHome = {
    text: 'Super Admin Home',
    data : 'superAdminHome',
    link: '/superadmin',
    icon: 'icon-home',
    authorized : false
};
const patientHome = {
    text: 'Patient Home',
    data : 'patienthome',
    link: '/patienthome',
    icon: 'icon-home',
    authorized : false
};
const doctorHome = {
    text: 'Doctor Home',
    data : 'doctorhome',
    link: '/doctorhome',
    icon: 'icon-home',
    authorized : false,
};
const consultation = {
    text: 'Consultation',
    data : 'consultation',
    link: '/consultation',
    icon: 'fas fa-stethoscope',
    authorized : false
};
const adminHome = {
    text: 'Admin Home',
    data : 'adminhome',
    link: '/adminhome',
    icon: 'icon-home',
    authorized : false
};
const patientMap = {
    text: 'Assign Patient',
    data : 'assignpatient',
    link: '/patientmap',
    icon: 'fas fa-user-md',
    authorized : false
};
const addQuestion = {
    text: 'Add Questions',
    data : 'addquestions',
    link: '/addquestions',
    icon: 'far fa-edit',
    authorized : false
};
const doctorForm = {
    text: 'Doctor Form',
    data : 'doctorform',
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
    consultation,
    patientMap,
    addQuestion,
    doctorForm
    
];
