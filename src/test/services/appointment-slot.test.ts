import { describe, expect, test } from '@jest/globals';
import { AppointmentSlot } from '../../services/appointment-slot';
import data from '../../json/scheduled-data.json'


const expectedSlots = [
    '2020-3-29 10:00 - 10:15 Jane Doe',
    '2020-3-29 10:00 - 10:15 John Doe',
    '2020-3-29 10:15 - 10:30 Jane Doe',
    '2020-3-29 10:15 - 10:30 John Doe',
    '2020-3-29 10:30 - 10:45 John Doe',
    '2020-3-29 10:45 - 10:60 John Doe',
    '2020-3-29 11:00 - 11:15 John Doe',
    '2020-3-29 11:15 - 11:30 John Doe',
    '2020-3-29 11:30 - 11:45 John Doe',
    '2020-3-29 11:45 - 11:60 John Doe',
    '2020-3-29 12:30 - 12:45 Jane Doe',
    '2020-3-29 12:30 - 12:45 John Doe',
    '2020-3-29 12:45 - 12:60 Jane Doe',
    '2020-3-29 12:45 - 12:60 John Doe',
    '2020-3-29 13:00 - 13:15 Jane Doe',
    '2020-3-29 13:00 - 13:15 John Doe',
    '2020-3-29 13:15 - 13:30 Jane Doe',
    '2020-3-29 13:15 - 13:30 John Doe',
    '2020-3-29 13:30 - 13:45 Jane Doe',
    '2020-3-29 13:30 - 13:45 John Doe',
    '2020-3-29 13:45 - 13:60 Jane Doe',
    '2020-3-29 13:45 - 13:60 John Doe',
    '2020-3-29 14:00 - 14:15 Jane Doe',
    '2020-3-29 14:00 - 14:15 John Doe',
    '2020-3-29 14:15 - 14:30 Jane Doe',
    '2020-3-29 14:15 - 14:30 John Doe',
    '2020-3-29 14:30 - 14:45 Jane Doe',
    '2020-3-29 14:45 - 14:60 Jane Doe',
    '2020-3-29 15:00 - 15:15 Jane Doe',
    '2020-3-29 15:15 - 15:30 Jane Doe',
    '2020-3-29 15:30 - 15:45 Jane Doe',
    '2020-3-29 15:45 - 15:60 Jane Doe',
    '2020-3-29 16:15 - 16:30 Jane Doe',
    '2020-3-29 16:30 - 16:45 Jane Doe',
    '2020-3-29 18:00 - 18:15 Jane Doe',
    '2020-3-29 18:15 - 18:30 Jane Doe',
    '2020-3-29 18:30 - 18:45 Jane Doe',
    '2020-3-29 18:45 - 18:60 Jane Doe',
    '2020-3-29 19:30 - 19:45 Jane Doe',
    '2020-3-29 19:45 - 19:60 Jane Doe',
    '2020-3-29 20:00 - 20:15 Jane Doe',
    '2020-3-29 20:15 - 20:30 Jane Doe',
    '2020-3-29 20:30 - 20:45 Jane Doe',
    '2020-3-29 20:45 - 20:60 Jane Doe',
    '2020-3-29 21:00 - 21:15 Jane Doe',
    '2020-3-29 21:15 - 21:30 Jane Doe',
    '2020-3-29 21:30 - 21:45 Jane Doe',
    '2020-3-29 21:45 - 21:60 Jane Doe',
    '2020-3-29 22:00 - 22:15 Jane Doe'
]

describe('Appointment Slot', () => {
    test('shows valid sorted available timeslot', () => {
        const result = new AppointmentSlot().getAppointmentSlot(data);

        expect(result).toStrictEqual(expectedSlots);
    });
});