export class Hike {

  id: number;
  name: string;
  length: number;
  date: string;
  totalTime: string;
  elevationGain: number;
  photoUrl: string;
  trailLink: string;
  difficulty: string;
  description: string;
  specialEquipment: string;

  constructor(id?: number, name?: string, length?: number, date?: string, totalTime?: string, elevationGain?: number, photoUrl?: string,
    trailLink?: string,
    difficulty?: string,
    description?: string,
    specialEquipment?: string) {
    this.id = id;
    this.name = name;
    this.length = length;
    this.date = date;
    this.totalTime = totalTime;
    this.elevationGain = elevationGain;
    this.trailLink = trailLink;
    this.difficulty = difficulty;
    this.description = description;
    this.specialEquipment = specialEquipment
  }
}
