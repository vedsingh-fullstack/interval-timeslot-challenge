import { IScheduleInputRequest } from "../interfaces/ScheduleInputRequest.interface";
import { date } from "../utils/date";


export class AppointmentSlot {
    getAppointmentSlot(scheduleInput: IScheduleInputRequest[]): string[] {
        if (scheduleInput.length == 0) {
            return []
        }
        let timeSlots: string[] = [];
        const breakTimes: number[][] = [];

        // group schedule by employee id 
        const groupedSchedules = this.groupByEmployeeId(scheduleInput);

        Object.keys(groupedSchedules).forEach((key: string) => {
            groupedSchedules[key].forEach((data: IScheduleInputRequest) => {
                const startDate = date(data.startDate, data.startTime);
                const endDate = date(data.endDate, data.endTime);

                // get all break times seconds in array [[7200,10000]]
                breakTimes.push(this.getStartAndEndBreakInSeconds(data.startBreak, data.endBreak));
                breakTimes.push(this.getStartAndEndBreakInSeconds(data.startBreak2, data.endBreak2));
                breakTimes.push(this.getStartAndEndBreakInSeconds(data.startBreak3, data.endBreak3));
                breakTimes.push(this.getStartAndEndBreakInSeconds(data.startBreak4, data.endBreak4));

                const validBreakTimes = breakTimes.filter((breakTime) => breakTime.length);

                while (startDate < endDate) {
                    let isAvailableSlot = this.validateBreakTimes(validBreakTimes, startDate);

                    if (isAvailableSlot) {
                        // format the output in required format
                        let timslot = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()} ${startDate.getHours()}:${('0' + startDate.getMinutes()).slice(-2)} - ${startDate.getHours()}:${startDate.getMinutes() + 15} ${data.employeeName}`
                        timeSlots.push(timslot);
                    }

                    startDate.setMinutes(startDate.getMinutes() + 15);
                }
            })
        })

        return timeSlots.sort();
    }

    private getStartAndEndBreakInSeconds(startBreak: string, endBreak: string): number[] {
        let startBreakInSeconds;
        let endBreakInSeconds;
        let breakTime: number[] = [];

        if (startBreak !== '00:00:00' || endBreak !== '00:00:00') {
            const startBreakArray = startBreak.split(':')
            const endBreakArray = endBreak.split(':')
            startBreakInSeconds = (parseInt(startBreakArray[0]) * 3600) + (parseInt(startBreakArray[1]) * 60);
            endBreakInSeconds = (parseInt(endBreakArray[0]) * 3600) + (parseInt(endBreakArray[1]) * 60)
            breakTime.push(startBreakInSeconds, endBreakInSeconds)
        }

        return breakTime;
    }

    private groupByEmployeeId(data: IScheduleInputRequest[]) {
        return data.reduce((acc: any, item: IScheduleInputRequest) => {
            const key = item.employeeId;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});
    }

    private validateBreakTimes(breakTimeInSeconds: number[][], date: Date): boolean {
        let isAvailableSlot = true;
        breakTimeInSeconds.forEach((breakTime) => {
            const startHourInSeconds = (date.getHours() * 3600) + (date.getMinutes() * 60);
            if (startHourInSeconds >= breakTime[0] && startHourInSeconds < breakTime[1]) {
                isAvailableSlot = false
            }
        })

        return isAvailableSlot;
    }
}