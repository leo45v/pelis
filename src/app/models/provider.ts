import { environment } from 'src/environments/environment';

type PorviderD = {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
};

export class Provider {
  constructor(
    public buy: Array<PorviderD>,
    public flatrate: Array<PorviderD>,
    public link: string,
    public rent: Array<PorviderD>
  ) {
    this.buy?.forEach((b) => {
      b.logo_path = `${environment.imagesEndPointUrl}${b.logo_path}`;
    });
    this.flatrate?.forEach((f) => {
      f.logo_path = `${environment.imagesEndPointUrl}${f.logo_path}`;
    });
    this.rent?.forEach((r) => {
      r.logo_path = `${environment.imagesEndPointUrl}${r.logo_path}`;
    });
  }

  getAll() {
    const all = (this.buy || [])
      .concat(this.flatrate || [], this.rent || [])
      .reduce((acc, cur) => {
        if (!acc.find((a) => a.provider_id === cur.provider_id)) {
          acc.push(cur);
        }
        return acc;
      }, [] as PorviderD[]);

    return all.sort((a, b) => a.display_priority - b.display_priority);
  }
}
