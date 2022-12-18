import { readFileSync, promises as fsPromises, PathOrFileDescriptor } from 'fs';
import { join } from 'path';

import { IScheduleInputRequest } from '../interfaces/ScheduleInputRequest.interface';

export class FileService {
    private filename: string;
    constructor(filename: string) {
        this.filename = filename
    }

    getDataFromFile(): IScheduleInputRequest[] {
        try {
            return JSON.parse(readFileSync(join(__dirname, this.filename), 'utf-8')) as IScheduleInputRequest[];
        } catch (error) {
            throw new Error(`Something Went Wrong with error ${(error as any).message}!`)
        }

    }
}