import {LiftType} from '../lift-types/lift-type.model';

export class LiftSet {

  id: number;
  reps: number;
  weight: number;
  

  constructor(
  ) {
    
  }
}

export class Lift {

  id: number;
  date: Date;
  lift_type: LiftType;
  lift_sets: LiftSet[];
  

  constructor(
  ) {
    this.date = new Date();
    this.lift_type = new LiftType();
  }
}