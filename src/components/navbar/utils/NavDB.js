import { ClipboardIcon ,LogoutIcon, PresentationChartBarIcon, TemplateIcon, } from "@heroicons/react/outline";

export const doctorNavLinks = [
  {
    id: 0,
    title: "Add Patient",
    icon: <TemplateIcon className="nav-icon" />,
    path:"/addpatient",
  },
  {
    id: 1,
    title: "All Patient History",
    icon: <ClipboardIcon className="nav-icon" />,
    path:"/allpatienthistory",
  },
  {
    id: 2,
    title: "Patient Progress",
    icon: <PresentationChartBarIcon className="nav-icon" />,
    path:"/patientprogress",
  },

  {
    id: 5,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
    path:"/login",
  },
];
