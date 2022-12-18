import { FileService } from "./services/file.service";
import { AppointmentSlot } from "./services/appointment-slot";
import { IScheduleInputRequest } from "./interfaces/ScheduleInputRequest.interface";


const fileData: IScheduleInputRequest[] = new FileService('../json/scheduled-data.json').getDataFromFile();

const appointmentData = new AppointmentSlot().getAppointmentSlot(fileData);

console.log(appointmentData);