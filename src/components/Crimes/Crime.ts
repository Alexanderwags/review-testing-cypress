export interface Crime {
  category: string;
  location_type: string;
  location: LocationCrime;
  context: string;
  id: number;
  outcome_status: any;
  location_subtype: string;
  persistent_id: string;
  month: String;
}
interface LocationCrime {
  latitude: string;
  street: {
    id: number;
    name: string;
  };
  longitude: string;
}
