
import aadharDownload from "./card-assets/aadhar-download.webp"
import retrieveAadhar from "./card-assets/retrieve-aadhar.webp"
import verifyEmail from "./card-assets/verify-mobile.webp"
import deathReport from "./card-assets/death-report.webp"
import documentUpdate from "./card-assets/document-update.webp"
import vidGenerator from "./card-assets/vid-generator.webp"
import lockUnlock from "./card-assets/lock-unlock.webp"
import bankSeeding from "./card-assets/bank-seeding.webp"
import orderPvc from "./card-assets/order-pvc.webp"
import enrollmentUpdate from "./card-assets/enrollment-update.webp"
import deactivationStatus from "./card-assets/deactivation-status.webp"
import locateEnrollment from "./card-assets/locate-enrollment-center.webp"
import bookAppointment from "./card-assets/book-appointment.webp"
import checkAadharValidity from "./card-assets/check-aadhar-validity.webp"
import grievanceFeedback from "./card-assets/grievance-feedback.webp"
import checkGrievance from "./card-assets/check-grievance.webp"

const cards = [
  {
    id: 1,
    image: aadharDownload,
    title: "Download Aadhaar",
    description: "Click here to download digitally signed and password protected electronic copy of the Aadhaar.",
    path: "/download-aadhaar"
  },
  {
    id: 2,
    image: retrieveAadhar,
    title: "Retrieve Aadhaar number/EID/SID",
    description: "Click here to find out Aadhaar number, Enrolment ID (EID) or Service ID (SID).",
    path: "/retrieve-aadhaar"      
  },
  {
    id: 3,
    image: verifyEmail,
    title: "Verify email / mobile",
    description: "Click here to verify mobile and email registered with the Aadhaar.",
    path: "/verify-email"          
  },
  {
    id: 4,
    image: deathReport,
    title: "Report death of a family member",
    description: "Click here to report death of a Family Member for his/her Aadhaar deactivation.",
    path: "/death-report"          
  },
  {
    id: 5,
    image: documentUpdate,
    title: "Document update",
    description: "Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.",
    note: "This service is free of cost till 14/06/2026.",
    path: "/document-update"      
  },
  {
    id: 6,
    image: vidGenerator,
    title: "VID Generator",
    description: "Click here to generate 16 Digit Virtual ID(VID) linked to your Aadhaar.",
    path: "/vid-generator"          
  },
  {
    id: 7,
    image: lockUnlock,
    title: "Lock / Unlock Aadhaar",
    description: "Click here to temporarily lock/unlock your Aadhaar. Please use this service carefully.",
    path: "/lock-unlock"           
  },
  {
    id: 8,
    image: bankSeeding,
    title: "Bank seeding status",
    description: "Click here to find your Bank Seeding Status.",
    path: "/bank-seeding"           
  },
  {
    id: 9,
    image: orderPvc,
    title: "Check Aadhaar PVC card order status",
    description: "Click here to check the status of the already ordered PVC card.",
    path: "/order-pvc"             
  },
  {
    id: 10,
    image: enrollmentUpdate,
    title: "Check enrolment or update status",
    description: "Click here to check the status of the Enrolment or Update request.",
    path: "/enrollment-update"     
  },
  {
    id: 11,
    image: deactivationStatus,
    title: "Check deceased Aadhaar deactivation status",
    description: "Click here to check the status of the Deceased Aadhaar Deactivation request.",
    path: "/deactivation-status"    
  },
  {
    id: 12,
    image: locateEnrollment,
    title: "Locate enrolment center",
    description: "Click here to search and locate nearby Aadhaar Seva Kendras.",
    path: "/locate-enrollment"      
  },
  {
    id: 13,
    image: bookAppointment,
    title: "Book an appointment",
    description: "Click here to book an Appointment for Enrolment or Update.",
    path: "/book-appointment"       
  },
  {
    id: 14,
    image: checkAadharValidity,
    title: "Check Aadhaar validity",
    description: "Click here to validate the status of the Aadhaar.",
    path: "/check-validity"       
  },
  {
    id: 15,
    image: grievanceFeedback,
    title: "Grievance and feedback",
    description: "Click here to file your grievance and feedback.",
    path: "/grievance-feedback"     
  },
  {
    id: 16,
    image: checkGrievance,
    title: "Check grievance / feedback status",
    description: "Click here to check the status of the Grievance / Feedback.",
    path: "/check-grievance"        
  },
]

export default cards