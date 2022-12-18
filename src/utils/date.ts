export const date = (date: string, time: string): Date => {
    const d = new Date(date);
    const timeArray = time.split(":")
    d.setHours(parseInt(timeArray[0]))
    d.setMinutes(parseInt(timeArray[1]))

    return d
}