export interface MenuItem {
  text: string;
  route: string;
}

export interface Composer {
  id: number;
  nombre: string;
  biografia: string;
  email: string;
}

export interface Instrument {
  name: string;
}

export interface Family {
  id: number;
  nombre: string;
  datosPieza: string;
}