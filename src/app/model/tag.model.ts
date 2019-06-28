
export interface ITagModel {
  position: string;
  action: string;
  description: string;
}

export class Tag implements ITagModel {
  constructor(
    public position: string,
    public action: string,
    public description: string
  ) {

  }
}
