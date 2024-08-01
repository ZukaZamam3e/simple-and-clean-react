export interface PageModel {
  name: string;
  href: string;
}

export interface GameModel {
  name: string;
  buttons: PageModel[];
}
