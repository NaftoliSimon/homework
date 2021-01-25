export interface BlogServerProps {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface Blog {
  id: number;
  name: string;
  website: string;
  companyName: string;
}
