export class TeamRole {
    constructor(
        public name: string,
        public project: boolean,
        public task: boolean,
        public team: boolean,
        public time: boolean,
        public file: boolean,
        public calendar: boolean,
        public finance: boolean,
        public notes: boolean,
        public reports: boolean,
        public client: boolean,
        public map: boolean,
    ){}
}
