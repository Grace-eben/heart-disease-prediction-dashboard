import { ClipboardIcon ,LogoutIcon,  TemplateIcon, } from "@heroicons/react/outline";

export const patientNavLinks = [
 
  {
    id: 1,
    title: "Home",
    icon: <TemplateIcon className="nav-icon" />,
    path:"/patienthome",
    func:function(){}
  },
  {
    id: 2,
    title: "View Progress",
    icon: <ClipboardIcon className="nav-icon" />,
    path:"/viewprogress",
    func:function(){}
  },
  
  {
    id: 5,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
    path:"/logout",
    func:function(){
      
    }
  },
];
