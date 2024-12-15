export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  is_face_registered: boolean;
  profile: Profile;
}

export interface Profile {
  username: string;
  firstname?: string;
  lastname?: string;
}

export interface Invitation {
  name: string;
  target_date: string;
  event_start: string;
  location: string;
}
